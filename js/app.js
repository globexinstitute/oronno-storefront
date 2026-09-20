/**
 * Oronno Fashion — Core Application Controller
 * Shared Header/Footer Renderer, Drawers, Sticky Header & Global Listeners
 */

const App = {
  async init() {
    // 1. Initialize Language System
    ORONNO_I18N.setLang(ORONNO_I18N.getLang());

    // 2. Render Shared Structural Components
    this.renderHeader();
    this.renderFooter();

    // 3. Initialize Interactive Behaviors
    this.initStickyHeader();
    this.initMobileDrawer();
    this.initCartDrawer();
    this.initSearchDrawer();
    this.bindEvents();

    // 4. Update Header Badges (Cart & Wishlist)
    await this.updateBadges();
  },

  /**
   * Injects the unified Header & Announcement bar
   */
  renderHeader() {
    const headerContainer = document.getElementById("site-header");
    if (!headerContainer) return;

    headerContainer.innerHTML = `
      <!-- Top Announcement Strip -->
      <div class="announcement-bar">
        <div class="container announcement-content">
          <div class="announcement-text" data-i18n="announcement.text">
            ${ORONNO_I18N.t("announcement.text")}
          </div>
          <div class="lang-switch" role="group" aria-label="Language selector">
            <button class="lang-btn ${ORONNO_I18N.getLang() === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="lang-btn ${ORONNO_I18N.getLang() === 'bn' ? 'active' : ''}" data-lang="bn">বাংলা</button>
          </div>
        </div>
      </div>

      <!-- Main Navigation Header -->
      <div class="container">
        <div class="header-inner">
          <!-- Mobile Menu Trigger -->
          <button class="menu-toggle" id="btn-open-mobile-menu" aria-label="Open navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <!-- Brand Logo -->
          <a href="index.html" class="brand-logo" aria-label="Oronno Fashion Home">
            <img src="images/logo/oronno-emblem.png" alt="" class="logo-symbol-img" aria-hidden="true">
            <div>
              <span class="logo-text">ORONNO</span>
              <span class="logo-tagline">FASHION</span>
            </div>
          </a>

          <!-- Desktop Navigation Bar -->
          <nav class="desktop-nav" aria-label="Primary Navigation">
            <a href="collection.html?category=new" class="nav-link" data-i18n="nav.new_arrivals">New Arrivals</a>
            <a href="collection.html?category=casual" class="nav-link" data-i18n="nav.casual">Casual</a>
            <a href="collection.html?category=festive" class="nav-link" data-i18n="nav.festive">Festive</a>
            <a href="collection.html?category=luxury" class="nav-link" data-i18n="nav.luxury">Luxury</a>
            <a href="custom-size.html" class="nav-link" data-i18n="nav.custom_size">Custom Size</a>
            <a href="contact.html" class="nav-link" data-i18n="nav.contact">Contact</a>
          </nav>

          <!-- Utilities (Search, Wishlist, Account, Cart) -->
          <div class="header-actions">
            <!-- Search -->
            <button class="icon-btn" id="btn-open-search" aria-label="Search products">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>

            <!-- Wishlist -->
            <a href="wishlist.html" class="icon-btn" aria-label="View Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span class="badge-count" id="wishlist-badge" style="display: none;">0</span>
            </a>

            <!-- Account -->
            <a href="account.html" class="icon-btn" aria-label="Customer Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </a>

            <!-- Mini Cart Trigger -->
            <button class="icon-btn" id="btn-open-cart" aria-label="View Shopping Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span class="badge-count" id="cart-badge" style="display: none;">0</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
      <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
        <div class="drawer-header">
          <span class="font-serif text-burgundy" style="font-size: 1.25rem;">ORONNO FASHION</span>
          <button class="icon-btn" id="btn-close-mobile-menu" aria-label="Close navigation menu">✕</button>
        </div>
        <nav class="drawer-nav">
          <a href="collection.html?category=new" class="drawer-nav-link" data-i18n="nav.new_arrivals">New Arrivals</a>
          <a href="collection.html?category=casual" class="drawer-nav-link" data-i18n="nav.casual">Casual</a>
          <a href="collection.html?category=festive" class="drawer-nav-link" data-i18n="nav.festive">Festive</a>
          <a href="collection.html?category=luxury" class="drawer-nav-link" data-i18n="nav.luxury">Luxury</a>
          <a href="custom-size.html" class="drawer-nav-link" data-i18n="nav.custom_size">Custom Size</a>
          <a href="about.html" class="drawer-nav-link" data-i18n="nav.about">About Oronno</a>
          <a href="contact.html" class="drawer-nav-link" data-i18n="nav.contact">Contact</a>
        </nav>
        <div class="drawer-contact">
          <p><strong>Hotline:</strong> 01881896612</p>
          <p>Donia, Dhaka 1236</p>
        </div>
      </div>

      <!-- Live Search Bar Overlay -->
      <div class="search-overlay" id="search-overlay" aria-hidden="true">
        <div class="search-box">
          <label for="site-search-input" class="sr-only">Search</label>
          <input type="search" id="site-search-input" data-i18n="search.placeholder" placeholder="Search Pakistani suits, organza, lawn, velvet..." autocomplete="off">
          <button class="search-close-btn" id="btn-close-search" aria-label="Close search">✕</button>
        </div>
        <div id="search-quick-results" class="container" style="max-width: 760px; padding: 1rem 0;"></div>
      </div>

      <!-- Mini-Cart Drawer -->
      <div class="cart-drawer-overlay" id="cart-drawer-overlay"></div>
      <div class="cart-drawer" id="cart-drawer" aria-hidden="true">
        <div class="cart-drawer-header">
          <h3 class="font-serif" style="font-size: 1.15rem;" data-i18n="cart.title">Your Shopping Bag</h3>
          <button class="icon-btn" id="btn-close-cart" aria-label="Close cart">✕</button>
        </div>
        <div class="cart-drawer-body" id="cart-drawer-items">
          <!-- Dynamic Items Rendered via JS -->
        </div>
        <div class="cart-drawer-footer" id="cart-drawer-footer" style="display: none;">
          <div class="cart-subtotal-row">
            <span data-i18n="cart.subtotal">Subtotal</span>
            <span id="cart-drawer-subtotal">৳0</span>
          </div>
          <p style="font-size: 0.78rem; color: var(--color-text-muted); margin-bottom: 1rem;" data-i18n="cart.vat_note">
            Taxes and shipping calculated at checkout
          </p>
          <a href="checkout.html" class="btn btn-primary" style="width: 100%;" data-i18n="btn.checkout">Proceed to Checkout</a>
          <a href="cart.html" class="btn btn-outline" style="width: 100%; margin-top: 0.5rem;" data-i18n="btn.view_cart">View Full Cart</a>
        </div>
      </div>
    `;
  },

  /**
   * Injects the unified Footer
   */
  renderFooter() {
    const footerContainer = document.getElementById("site-footer");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand & Bio -->
          <div class="footer-brand">
            <a href="index.html" class="brand-logo" style="margin-bottom: 0.75rem;">
              <svg class="logo-symbol" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:38px;height:38px;">
                <circle cx="50" cy="50" r="46" stroke="#C9A24B" stroke-width="2" stroke-dasharray="2 3"/>
                <path d="M50 78V42M50 42L41 33M50 42L59 33M50 56L37 47M50 56L63 47" stroke="#C9A24B" stroke-width="2.2" stroke-linecap="round"/>
              </svg>
              <span class="logo-text" style="color: var(--color-cream); font-size: 1.35rem;">ORONNO</span>
            </a>
            <p data-i18n="footer.about_text">
              Dhaka-based women's boutique offering curated Pakistani and ethnic wear. Crafted with care, grace, and timeless elegance.
            </p>
            <p style="margin-top: 0.75rem; color: var(--color-gold-light); font-size: 0.85rem;" data-i18n="footer.tagline">
              From Casual to Luxury, All in One Place.
            </p>
          </div>

          <!-- Col 2: Collections -->
          <div>
            <h4 class="footer-col-title" data-i18n="footer.quick_links">Collections</h4>
            <ul class="footer-links">
              <li><a href="collection.html?category=new" data-i18n="nav.new_arrivals">New Arrivals</a></li>
              <li><a href="collection.html?category=casual" data-i18n="nav.casual">Casual Wear</a></li>
              <li><a href="collection.html?category=festive" data-i18n="nav.festive">Festive Collection</a></li>
              <li><a href="collection.html?category=luxury" data-i18n="nav.luxury">Luxury Pret</a></li>
              <li><a href="custom-size.html" data-i18n="nav.custom_size">Custom Sizing Service</a></li>
            </ul>
          </div>

          <!-- Col 3: Customer Care -->
          <div>
            <h4 class="footer-col-title" data-i18n="footer.customer_care">Customer Care</h4>
            <ul class="footer-links">
              <li><a href="track-order.html">Track Your Order</a></li>
              <li><a href="shipping-returns.html" data-i18n="footer.shipping_policy">Shipping & Returns</a></li>
              <li><a href="faq.html" data-i18n="footer.faq">Frequently Asked Questions</a></li>
              <li><a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a></li>
              <li><a href="terms.html" data-i18n="footer.terms">Terms of Service</a></li>
            </ul>
          </div>

          <!-- Col 4: Boutique Contact Info -->
          <div>
            <h4 class="footer-col-title" data-i18n="footer.contact_title">Store & Studio</h4>
            <div class="footer-contact-item">
              <span>📍</span>
              <span>Donia, Dhaka 1236, Bangladesh</span>
            </div>
            <div class="footer-contact-item">
              <span>📞</span>
              <a href="tel:01881896612">01881896612</a>
            </div>
            <div class="footer-contact-item">
              <span>💬</span>
              <a href="https://wa.me/8801881896612" target="_blank" rel="noopener">WhatsApp: 01881896612</a>
            </div>
            <div class="footer-contact-item">
              <span>✉️</span>
              <a href="https://www.facebook.com/oronnofashion" target="_blank" rel="noopener">Order via Facebook Inbox</a>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <p data-i18n="footer.copyright">© 2026 Oronno Fashion. All rights reserved.</p>
          <p style="letter-spacing: 0.05em;">Designed & Crafted for Graceful Living.</p>
        </div>
      </div>
    `;
  },

  /**
   * Header shrink on window scroll
   */
  initStickyHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("is-shrunk");
      } else {
        header.classList.remove("is-shrunk");
      }
    }, { passive: true });
  },

  /**
   * Mobile Navigation Toggle & Drawer
   */
  initMobileDrawer() {
    const openBtn = document.getElementById("btn-open-mobile-menu");
    const closeBtn = document.getElementById("btn-close-mobile-menu");
    const drawer = document.getElementById("mobile-drawer");
    const overlay = document.getElementById("mobile-drawer-overlay");

    const toggle = (open) => {
      drawer?.classList.toggle("is-open", open);
      overlay?.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };

    openBtn?.addEventListener("click", () => toggle(true));
    closeBtn?.addEventListener("click", () => toggle(false));
    overlay?.addEventListener("click", () => toggle(false));
  },

  /**
   * Mini Cart Drawer Toggle & Live Render
   */
  initCartDrawer() {
    const openBtn = document.getElementById("btn-open-cart");
    const closeBtn = document.getElementById("btn-close-cart");
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");

    const toggle = async (open) => {
      if (open) {
        await this.renderMiniCart();
      }
      drawer?.classList.toggle("is-open", open);
      overlay?.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };

    openBtn?.addEventListener("click", () => toggle(true));
    closeBtn?.addEventListener("click", () => toggle(false));
    overlay?.addEventListener("click", () => toggle(false));

    window.addEventListener("oronno:opencart", () => toggle(true));
  },

  /**
   * Search Drawer & Live Autocomplete
   */
  initSearchDrawer() {
    const openBtn = document.getElementById("btn-open-search");
    const closeBtn = document.getElementById("btn-close-search");
    const overlay = document.getElementById("search-overlay");
    const input = document.getElementById("site-search-input");
    const resultsContainer = document.getElementById("search-quick-results");

    const toggle = (open) => {
      overlay?.classList.toggle("is-open", open);
      if (open) {
        setTimeout(() => input?.focus(), 150);
      } else {
        if (input) input.value = "";
        if (resultsContainer) resultsContainer.innerHTML = "";
      }
    };

    openBtn?.addEventListener("click", () => toggle(true));
    closeBtn?.addEventListener("click", () => toggle(false));

    // Live search input handling
    let debounceTimer;
    input?.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      const query = e.target.value.trim();

      if (query.length < 2) {
        resultsContainer.innerHTML = "";
        return;
      }

      debounceTimer = setTimeout(async () => {
        const matches = await API.searchProducts(query);
        if (matches.length === 0) {
          resultsContainer.innerHTML = `<p style="padding: 1rem; color: var(--color-text-muted); font-size: 0.9rem;">No designs found matching "${query}".</p>`;
          return;
        }

        resultsContainer.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 0.75rem; max-height: 320px; overflow-y: auto;">
            ${matches.slice(0, 5).map(item => `
              <a href="product.html?slug=${item.slug}" style="display: flex; align-items: center; gap: 1rem; padding: 0.5rem; background: var(--color-white); border: 1px solid var(--color-border);">
                <img src="${item.images[0]}" alt="${item.name}" style="width: 48px; height: 58px; object-fit: cover;">
                <div style="flex:1;">
                  <h5 style="font-size: 0.9rem; font-weight: 500; color: var(--color-burgundy);">${item.name}</h5>
                  <span style="font-size: 0.8rem; color: var(--color-gold-hover);">৳${item.salePrice || item.price}</span>
                </div>
              </a>
            `).join("")}
          </div>
        `;
      }, 200);
    });
  },

  /**
   * Render Mini Cart contents inside drawer
   */
  async renderMiniCart() {
    const container = document.getElementById("cart-drawer-items");
    const footer = document.getElementById("cart-drawer-footer");
    const subtotalEl = document.getElementById("cart-drawer-subtotal");
    if (!container) return;

    const cart = await API.getCart();

    if (!cart.items || cart.items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <p data-i18n="cart.empty">${ORONNO_I18N.t("cart.empty")}</p>
          <a href="collection.html" class="btn btn-outline" style="margin-top: 1.5rem;" data-i18n="btn.continue_shopping">
            ${ORONNO_I18N.t("btn.continue_shopping")}
          </a>
        </div>
      `;
      if (footer) footer.style.display = "none";
      return;
    }

    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${cart.items.map(item => `
          <div style="display: flex; gap: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--color-border); align-items: center;">
            <img src="${item.product?.images[0] || 'images/products/placeholder.jpg'}" alt="${item.product?.name}" style="width: 64px; height: 78px; object-fit: cover;">
            <div style="flex: 1;">
              <h4 style="font-size: 0.9rem; font-family: var(--font-sans);">${item.product?.name || 'Item'}</h4>
              <p style="font-size: 0.78rem; color: var(--color-text-muted);">Size: ${item.size} | Color: ${item.color}</p>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                <span style="font-weight: 600; font-size: 0.88rem;">৳${item.unitPrice} × ${item.quantity}</span>
                <button onclick="App.removeItemFromCart('${item.sku}')" style="color: var(--color-error); font-size: 0.75rem; text-decoration: underline;">Remove</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    if (subtotalEl) subtotalEl.textContent = `৳${cart.subtotal.toLocaleString()}`;
    if (footer) footer.style.display = "block";
  },

  async removeItemFromCart(sku) {
    await API.removeFromCart(sku);
    await this.renderMiniCart();
    await this.updateBadges();
  },

  /**
   * Keep header badges synchronized with data
   */
  async updateBadges() {
    const cart = await API.getCart();
    const cartBadge = document.getElementById("cart-badge");
    if (cartBadge) {
      cartBadge.textContent = cart.totalCount;
      cartBadge.style.display = cart.totalCount > 0 ? "flex" : "none";
    }

    const wishlist = await API.getWishlist();
    const wishBadge = document.getElementById("wishlist-badge");
    if (wishBadge) {
      wishBadge.textContent = wishlist.length;
      wishBadge.style.display = wishlist.length > 0 ? "flex" : "none";
    }
  },

  /**
   * Bind global event listeners
   */
  bindEvents() {
    // Language Switcher clicks
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-btn");
      if (btn && btn.dataset.lang) {
        ORONNO_I18N.setLang(btn.dataset.lang);
      }
    });

    // ESC key closes any open drawer/modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.getElementById("mobile-drawer")?.classList.remove("is-open");
        document.getElementById("mobile-drawer-overlay")?.classList.remove("is-open");
        document.getElementById("cart-drawer")?.classList.remove("is-open");
        document.getElementById("cart-drawer-overlay")?.classList.remove("is-open");
        document.getElementById("search-overlay")?.classList.remove("is-open");
        document.body.style.overflow = "";
      }
    });

    // Custom events
    window.addEventListener("oronno:cartupdated", () => this.updateBadges());
    window.addEventListener("oronno:wishlistupdated", () => this.updateBadges());
    window.addEventListener("oronno:langchange", () => {
      this.renderMiniCart();
    });
  }
};

// Auto-run on DOM Ready
document.addEventListener("DOMContentLoaded", () => App.init());
