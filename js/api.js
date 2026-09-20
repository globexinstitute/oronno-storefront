/**
 * Oronno Fashion — Data & API Service Layer
 * BACKEND CONTRACT: All pages & components interact ONLY via these async functions.
 * Phase 1 returns mock data from data.js & localStorage.
 * Phase 2 will replace these internals with real REST endpoints without any UI redesign.
 */

const API = {
  // Storage Keys for Local State
  _CART_KEY: "oronno_cart_items",
  _WISHLIST_KEY: "oronno_wishlist_items",
  _ORDERS_KEY: "oronno_customer_orders",
  _USER_KEY: "oronno_auth_user",

  /**
   * Helper simulating asynchronous latency
   */
  _delay(ms = 120) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },

  /* =========================================================================
     1. SETTINGS & METADATA
     ========================================================================= */

  /**
   * Fetch site settings, contact info, delivery zones & payments
   * TODO Phase 2: GET /api/v1/settings
   */
  async getSettings() {
    await this._delay();
    return JSON.parse(JSON.stringify(ORONNO_DATA.settings));
  },

  /**
   * Fetch product categories
   * TODO Phase 2: GET /api/v1/categories
   */
  async getCategories() {
    await this._delay();
    return JSON.parse(JSON.stringify(ORONNO_DATA.categories));
  },

  /* =========================================================================
     2. PRODUCTS & CATALOG
     ========================================================================= */

  /**
   * Fetch products with category, sort, filter, and pagination support
   * TODO Phase 2: GET /api/v1/products?category=&sort=&fabric=&size=&minPrice=&maxPrice=&page=
   */
  async getProducts({ category = null, sort = "featured", filters = {}, page = 1, limit = 12 } = {}) {
    await this._delay();
    let list = [...ORONNO_DATA.products];

    // Filter by Category
    if (category && category !== "all") {
      list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    // Filter by Fabric
    if (filters.fabric) {
      list = list.filter((p) => p.fabric.toLowerCase().includes(filters.fabric.toLowerCase()));
    }

    // Filter by Size availability
    if (filters.size) {
      list = list.filter((p) =>
        p.variants.some((v) => v.size.toUpperCase() === filters.size.toUpperCase() && v.stock > 0)
      );
    }

    // Filter by In-Stock only
    if (filters.inStockOnly) {
      list = list.filter((p) => p.variants.some((v) => v.stock > 0));
    }

    // Filter by Price range
    if (filters.minPrice !== undefined) {
      list = list.filter((p) => (p.salePrice || p.price) >= Number(filters.minPrice));
    }
    if (filters.maxPrice !== undefined) {
      list = list.filter((p) => (p.salePrice || p.price) <= Number(filters.maxPrice));
    }

    // Sorting logic
    if (sort === "price-low") {
      list.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
    } else if (sort === "price-high") {
      list.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
    } else if (sort === "newest") {
      list.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1));
    }

    const total = list.length;
    const startIndex = (page - 1) * limit;
    const paginated = list.slice(startIndex, startIndex + limit);

    return {
      products: JSON.parse(JSON.stringify(paginated)),
      total,
      page,
      totalPages: Math.ceil(total / limit)
    };
  },

  /**
   * Fetch single product by slug
   * TODO Phase 2: GET /api/v1/products/:slug
   */
  async getProduct(slug) {
    await this._delay();
    const product = ORONNO_DATA.products.find((p) => p.slug === slug);
    if (!product) throw new Error("Product not found");
    return JSON.parse(JSON.stringify(product));
  },

  /**
   * Live Search across product names, categories, and tags
   * TODO Phase 2: GET /api/v1/products/search?q=
   */
  async searchProducts(query) {
    await this._delay(80);
    if (!query || query.trim().length === 0) return [];
    const q = query.trim().toLowerCase();
    const matches = ORONNO_DATA.products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.name_bn.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
    return JSON.parse(JSON.stringify(matches));
  },

  /**
   * Get reviews for a product (strictly adheres to returning empty array if none)
   * TODO Phase 2: GET /api/v1/products/:productId/reviews
   */
  async getReviews(productId) {
    await this._delay();
    const approvedReviews = ORONNO_DATA.reviews.filter(
      (r) => r.productId === productId && r.approved === true
    );
    return JSON.parse(JSON.stringify(approvedReviews));
  },

  /* =========================================================================
     3. CART & WISHLIST (LocalStorage Engine)
     ========================================================================= */

  /**
   * Retrieve active cart items and calculate totals
   * TODO Phase 2: GET /api/v1/cart
   */
  async getCart() {
    await this._delay(50);
    const cart = JSON.parse(localStorage.getItem(this._CART_KEY) || "[]");
    let subtotal = 0;
    const enrichedItems = cart.map((item) => {
      const product = ORONNO_DATA.products.find((p) => p.id === item.productId);
      const unitPrice = product ? (product.salePrice || product.price) : 0;
      const itemTotal = unitPrice * item.quantity;
      subtotal += itemTotal;
      return {
        ...item,
        product,
        unitPrice,
        itemTotal
      };
    });

    return {
      items: enrichedItems,
      subtotal,
      totalCount: cart.reduce((sum, item) => sum + item.quantity, 0)
    };
  },

  /**
   * Add item variant to cart
   * TODO Phase 2: POST /api/v1/cart/items
   */
  async addToCart(productId, { size, color, sku }, quantity = 1) {
    await this._delay(50);
    const cart = JSON.parse(localStorage.getItem(this._CART_KEY) || "[]");
    const existingIndex = cart.findIndex((item) => item.sku === sku);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        productId,
        sku,
        size,
        color,
        quantity
      });
    }

    localStorage.setItem(this._CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("oronno:cartupdated"));
    return this.getCart();
  },

  /**
   * Update quantity of a variant in cart
   * TODO Phase 2: PATCH /api/v1/cart/items/:sku
   */
  async updateCart(sku, quantity) {
    await this._delay(50);
    let cart = JSON.parse(localStorage.getItem(this._CART_KEY) || "[]");
    if (quantity <= 0) {
      cart = cart.filter((item) => item.sku !== sku);
    } else {
      const item = cart.find((i) => i.sku === sku);
      if (item) item.quantity = quantity;
    }
    localStorage.setItem(this._CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("oronno:cartupdated"));
    return this.getCart();
  },

  /**
   * Remove item from cart
   * TODO Phase 2: DELETE /api/v1/cart/items/:sku
   */
  async removeFromCart(sku) {
    return this.updateCart(sku, 0);
  },

  /**
   * Wishlist Management
   */
  async getWishlist() {
    const ids = JSON.parse(localStorage.getItem(this._WISHLIST_KEY) || "[]");
    const products = ORONNO_DATA.products.filter((p) => ids.includes(p.id));
    return products;
  },

  async toggleWishlist(productId) {
    let ids = JSON.parse(localStorage.getItem(this._WISHLIST_KEY) || "[]");
    let added = false;
    if (ids.includes(productId)) {
      ids = ids.filter((id) => id !== productId);
    } else {
      ids.push(productId);
      added = true;
    }
    localStorage.setItem(this._WISHLIST_KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent("oronno:wishlistupdated", { detail: { ids, added } }));
    return { added, total: ids.length };
  },

  /* =========================================================================
     4. CHECKOUT & ORDERS
     ========================================================================= */

  /**
   * Validate discount coupon code
   * TODO Phase 2: POST /api/v1/coupons/validate
   */
  async validateCoupon(code) {
    await this._delay();
    // Phase 1 Mock Coupons
    if (!code) throw new Error("Please enter a valid coupon code");
    const normalized = code.trim().toUpperCase();
    if (normalized === "ORONNO10") {
      return { valid: true, code: "ORONNO10", discountPercent: 10, message: "10% festive discount applied" };
    }
    throw new Error("Invalid or expired coupon code");
  },

  /**
   * Create an order
   * TODO Phase 2: POST /api/v1/orders
   */
  async createOrder(orderData) {
    await this._delay(200);
    const orderNumber = "ORN-" + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      orderNumber,
      createdAt: new Date().toISOString(),
      status: "Processing",
      ...orderData
    };

    // Save to customer order history in storage
    const orders = JSON.parse(localStorage.getItem(this._ORDERS_KEY) || "[]");
    orders.unshift(newOrder);
    localStorage.setItem(this._ORDERS_KEY, JSON.stringify(orders));

    // Clear cart after successful order placement
    localStorage.removeItem(this._CART_KEY);
    window.dispatchEvent(new CustomEvent("oronno:cartupdated"));

    return newOrder;
  },

  /**
   * Track order by Order Number and Contact Phone
   * TODO Phase 2: GET /api/v1/orders/track?orderNumber=&phone=
   */
  async trackOrder(orderNumber, phone) {
    await this._delay(150);
    const orders = JSON.parse(localStorage.getItem(this._ORDERS_KEY) || "[]");
    const cleanPhone = phone.trim().replace(/[^0-9]/g, "");
    
    const found = orders.find(
      (o) => o.orderNumber.toUpperCase() === orderNumber.trim().toUpperCase() &&
             o.customer.phone.replace(/[^0-9]/g, "").includes(cleanPhone)
    );

    if (!found) {
      throw new Error("No matching order found for this order ID and phone number.");
    }
    return found;
  },

  /* =========================================================================
     5. CUSTOM SIZING, NEWSLETTER & FORMS
     ========================================================================= */

  /**
   * Submit tailored boutique measurement request
   * TODO Phase 2: POST /api/v1/custom-sizes
   */
  async submitCustomSizeRequest(data) {
    await this._delay(150);
    console.info("Phase 1 Custom Size Submission Recorded:", data);
    return {
      success: true,
      ticketId: "CS-" + Math.floor(1000 + Math.random() * 9000),
      message: "Custom sizing request submitted. Our tailoring team will contact your phone or WhatsApp shortly."
    };
  },

  /**
   * Newsletter subscription
   * TODO Phase 2: POST /api/v1/newsletter/subscribe
   */
  async subscribeNewsletter(email) {
    await this._delay(100);
    if (!email || !email.includes("@")) throw new Error("Please enter a valid email address");
    return {
      success: true,
      message: "Thank you for joining Oronno Fashion's private mailing list."
    };
  },

  /* =========================================================================
     6. AUTHENTICATION & ACCOUNT (Phase 1 Local Mock)
     ========================================================================= */

  /**
   * Customer Login
   * TODO Phase 2: POST /api/v1/auth/login
   */
  async login(phoneOrEmail, password) {
    await this._delay(150);
    if (!phoneOrEmail || !password) throw new Error("Credentials required");
    const user = {
      id: "usr_mock_01",
      name: "Valued Customer",
      email: phoneOrEmail.includes("@") ? phoneOrEmail : "customer@example.com",
      phone: phoneOrEmail.includes("@") ? "01881896612" : phoneOrEmail
    };
    localStorage.setItem(this._USER_KEY, JSON.stringify(user));
    return user;
  },

  /**
   * Customer Registration
   * TODO Phase 2: POST /api/v1/auth/register
   */
  async register(userData) {
    await this._delay(150);
    const user = {
      id: "usr_" + Date.now(),
      ...userData
    };
    localStorage.setItem(this._USER_KEY, JSON.stringify(user));
    return user;
  },

  /**
   * Fetch current account details
   * TODO Phase 2: GET /api/v1/account/me
   */
  async getAccount() {
    await this._delay(50);
    const user = localStorage.getItem(this._USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  /**
   * Fetch all past orders for logged in customer
   * TODO Phase 2: GET /api/v1/account/orders
   */
  async getOrders() {
    await this._delay(80);
    return JSON.parse(localStorage.getItem(this._ORDERS_KEY) || "[]");
  }
};
