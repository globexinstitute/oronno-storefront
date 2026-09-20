/**
 * Oronno Fashion — Data Source (Phase 1 Clean Catalog)
 * Strictly holds brand verified details, 6 women's Pakistani and ethnic dresses,
 * 3 categories, and local store configuration.
 */

const ORONNO_DATA = {
  settings: {
    brandName: "Oronno Fashion",
    brandNameBn: "অরণ্য ফ্যাশন",
    tagline: "From Casual to Luxury, All in One Place",
    taglineBn: "ক্যাজুয়াল থেকে লাক্সারি, সব একসাথে",
    announcement: "Carefully Selected & Quality Assured | Custom Sizing Available | All Bangladesh Delivery",
    announcementBn: "যাচাইকৃত মান ও বিশেষ যত্ন | কাস্টম সাইজ সুবিধা | সারা বাংলাদেশে হোম ডেলিভারি",
    phone: "01881896612",
    whatsapp: "+8801881896612",
    address: "Donia, Dhaka 1236",
    addressBn: "দনিয়া, ঢাকা ১২৩৬",
    currency: "৳",
    socials: {
      facebook: "https://www.facebook.com/oronnofashion",
      instagram: "https://www.instagram.com/oronnofashion",
      whatsapp: "https://wa.me/8801881896612"
    },
    deliveryZones: [
      { id: "inside-dhaka", name: "Inside Dhaka", name_bn: "ঢাকার ভিতরে", fee: 80 },
      { id: "outside-dhaka", name: "Outside Dhaka", name_bn: "ঢাকার বাইরে", fee: 150 }
    ],
    paymentMethods: [
      { id: "cod", name: "Cash on Delivery", name_bn: "ক্যাশ অন ডেলিভারি", description: "Pay when you receive your order" },
      { id: "bkash", name: "bKash", name_bn: "বিকাশ", description: "Direct bKash payment gateway" },
      { id: "nagad", name: "Nagad", name_bn: "নগদ", description: "Direct Nagad payment gateway" },
      { id: "card", name: "Debit / Credit Card", name_bn: "কার্ড পেমেন্ট", description: "Visa, Mastercard, AMEX" }
    ]
  },

  categories: [
    {
      id: 1,
      slug: "casual",
      name: "Casual",
      name_bn: "ক্যাজুয়াল",
      description: "Graceful daily and semi-formal Pakistani suits crafted in breathable premium fabrics.",
      image: "images/categories/cat-casual.jpg"
    },
    {
      id: 2,
      slug: "festive",
      name: "Festive",
      name_bn: "ফেস্টিভ",
      description: "Artfully embroidered festive dresses and dupattas tailored for special family occasions.",
      image: "images/categories/cat-festive.jpg"
    },
    {
      id: 3,
      slug: "luxury",
      name: "Luxury",
      name_bn: "লাক্সারি",
      description: "Intricately embellished statement ensembles featuring fine needlework and opulent drape.",
      image: "images/categories/cat-luxury.jpg"
    }
  ],

  products: [
    /* ================= CASUAL (2 Items) ================= */
    {
      id: 101,
      slug: "embroidered-three-piece-suit-beige",
      name: "Embroidered Three-Piece Suit - Beige",
      name_bn: "এমব্রয়ডার্ড থ্রি-পিস স্যুট - বেইজ",
      category: "casual",
      price: 3500, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      salePrice: 2990, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      fabric: "Pure Cotton Lawn Kameez with Sheer Voile Dupatta & Cambric Trouser",
      description: "Soft beige embroidered kameez detailed with subtle thread embroidery on the neckline and sleeve borders. Paired with a delicate sheer dupatta and tailored straight-cut trousers.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "CAS-01-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "CAS-01-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "CAS-01-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "CAS-01-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "CAS-01-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "CAS-01-XXL", stock: 2 }
      ],
      tags: ["custom size available", "lawn", "three-piece", "pakistani suit", "beige"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 102,
      slug: "embroidered-three-piece-suit-teal",
      name: "Embroidered Three-Piece Suit - Teal",
      name_bn: "এমব্রয়ডার্ড থ্রি-পিস স্যুট - টিল",
      category: "casual",
      price: 3200, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      salePrice: null, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      fabric: "Fine Chiffon Kameez with Inner Slip, Chiffon Dupatta & Dyed Trouser",
      description: "Rich teal chiffon kameez featuring graceful white floral needle embroidery, distinct lace-cut cuffs, and a matching embroidered sheer chiffon dupatta.",
      care: "Gentle hand wash in cold water or dry clean. Do not bleach. Warm steam iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "CAS-02-XS", stock: 2 },
        { size: "S", color: "Teal", sku: "CAS-02-S", stock: 4 },
        { size: "M", color: "Teal", sku: "CAS-02-M", stock: 5 },
        { size: "L", color: "Teal", sku: "CAS-02-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "CAS-02-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "CAS-02-XXL", stock: 1 }
      ],
      tags: ["custom size available", "chiffon", "three-piece", "lace detail", "teal"],
      isNew: true,
      isFeatured: false
    },

    /* ================= FESTIVE (2 Items) ================= */
    {
      id: 201,
      slug: "embroidered-three-piece-suit-blush-pink",
      name: "Embroidered Three-Piece Suit - Blush Pink",
      name_bn: "এমব্রয়ডার্ড থ্রি-পিস স্যুট - ব্লাশ পিঙ্ক",
      category: "festive",
      price: 5800, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      salePrice: 4990, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      fabric: "Pure Organza Kameez with Shantoon Slip, Embroidered Dupatta & Trouser",
      description: "Blush pink embroidered kameez with elaborate floral motifs, an architectural gridded lace hemline, and a romantic scalloped lace-edge dupatta.",
      care: "Dry clean only. Store folded in a clean cloth pouch. Do not spray fragrance directly on embroidery.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "FST-01-XS", stock: 2 },
        { size: "S", color: "Blush Pink", sku: "FST-01-S", stock: 4 },
        { size: "M", color: "Blush Pink", sku: "FST-01-M", stock: 5 },
        { size: "L", color: "Blush Pink", sku: "FST-01-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "FST-01-XL", stock: 2 },
        { size: "XXL", color: "Blush Pink", sku: "FST-01-XXL", stock: 1 }
      ],
      tags: ["custom size available", "organza", "scalloped lace", "festive", "pink"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 202,
      slug: "embroidered-long-kameez-ivory-white",
      name: "Embroidered Long Kameez - Ivory White",
      name_bn: "এমব্রয়ডার্ড লং কামিজ - আইভরি হোয়াইট",
      category: "festive",
      price: 5500, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      salePrice: null, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      fabric: "Georgette Long Kameez with Full Lining, Sheer Dupatta & Silk Trouser",
      description: "Ivory white embroidered long kameez adorned with delicate self-tone resham work and golden tilla highlights. Comes with an airy sheer dupatta and slim-cut trousers.",
      care: "Dry clean only to maintain embroidery sheen and delicate stitch tension.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "FST-02-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "FST-02-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "FST-02-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "FST-02-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "FST-02-XL", stock: 2 },
        { size: "XXL", color: "Ivory White", sku: "FST-02-XXL", stock: 1 }
      ],
      tags: ["custom size available", "long kameez", "georgette", "ivory", "festive"],
      isNew: false,
      isFeatured: true
    },

    /* ================= LUXURY (2 Items) ================= */
    {
      id: 301,
      slug: "embroidered-kameez-deep-red",
      name: "Embroidered Kameez - Deep Red",
      name_bn: "এমব্রয়ডার্ড কামিজ - ডিপ রেড",
      category: "luxury",
      price: 11000, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      salePrice: 9500, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      fabric: "Pure Micro Chiffon with Heavy Silk Lining & Embroidered Chiffon Dupatta",
      description: "Deep red chiffon kameez featuring dense artisanal thread embroidery, fine sequin reflections, and an intricate laser cutwork lace hem. Includes dyed trousers and embroidered dupatta.",
      care: "Strictly dry clean only. Steam iron from reverse side.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "LUX-01-XS", stock: 2 },
        { size: "S", color: "Deep Red", sku: "LUX-01-S", stock: 3 },
        { size: "M", color: "Deep Red", sku: "LUX-01-M", stock: 4 },
        { size: "L", color: "Deep Red", sku: "LUX-01-L", stock: 3 },
        { size: "XL", color: "Deep Red", sku: "LUX-01-XL", stock: 2 },
        { size: "XXL", color: "Deep Red", sku: "LUX-01-XXL", stock: 1 }
      ],
      tags: ["custom size available", "cutwork", "chiffon", "luxury", "red"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 302,
      slug: "embroidered-three-piece-suit-ice-blue",
      name: "Embroidered Three-Piece Suit - Ice Blue",
      name_bn: "এমব্রয়ডার্ড থ্রি-পিস স্যুট - আইস ব্লু",
      category: "luxury",
      price: 12500, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      salePrice: 10000, /* SAMPLE PRICE (aligned to Oronno price band) - confirm real price with client */
      fabric: "Premium Crinkle Chiffon with Pure Silk Underlayer, Embroidered Dupatta & Trouser",
      description: "Sophisticated ice blue chiffon suit highlighted by heavy gold and silver metallic embroidered cuffs, delicate chest spray, and a finished borders dupatta.",
      care: "Professional dry clean only. Handle delicate metallic zari threadwork with care.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "LUX-02-XS", stock: 2 },
        { size: "S", color: "Ice Blue", sku: "LUX-02-S", stock: 4 },
        { size: "M", color: "Ice Blue", sku: "LUX-02-M", stock: 4 },
        { size: "L", color: "Ice Blue", sku: "LUX-02-L", stock: 3 },
        { size: "XL", color: "Ice Blue", sku: "LUX-02-XL", stock: 2 },
        { size: "XXL", color: "Ice Blue", sku: "LUX-02-XXL", stock: 1 }
      ],
      tags: ["custom size available", "metallic thread", "ice blue", "luxury", "three-piece"],
      isNew: false,
      isFeatured: true
    },

    /* ===== DEMO CATALOGUE (market-reference sample data, replace before launch) ===== */
    {
      id: 1000,
      slug: "co-ord-set-4208-adan-s-libas",
      name: "Co-Ord Set 4208",
      name_bn: "Co-Ord Set 4208",
      category: "casual",
      price: 3200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Coordinated two-piece set — Adan's Libas styling",
      description: "Demo catalogue item for preview only. Co-Ord Set 4208 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "ADACO1000-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "ADACO1000-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "ADACO1000-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "ADACO1000-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "ADACO1000-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "ADACO1000-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1001,
      slug: "co-ord-set-4206-adan-s-libas",
      name: "Co-Ord Set 4206",
      name_bn: "Co-Ord Set 4206",
      category: "casual",
      price: 3200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Coordinated two-piece set — Adan's Libas styling",
      description: "Demo catalogue item for preview only. Co-Ord Set 4206 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "ADACO1001-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "ADACO1001-S", stock: 5 },
        { size: "M", color: "Teal", sku: "ADACO1001-M", stock: 6 },
        { size: "L", color: "Teal", sku: "ADACO1001-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "ADACO1001-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "ADACO1001-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1002,
      slug: "co-ord-set-4205-adan-s-libas",
      name: "Co-Ord Set 4205",
      name_bn: "Co-Ord Set 4205",
      category: "casual",
      price: 3200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Coordinated two-piece set — Adan's Libas styling",
      description: "Demo catalogue item for preview only. Co-Ord Set 4205 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "ADACO1002-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "ADACO1002-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "ADACO1002-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "ADACO1002-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "ADACO1002-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "ADACO1002-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1003,
      slug: "co-ord-set-4202-adan-s-libas",
      name: "Co-Ord Set 4202",
      name_bn: "Co-Ord Set 4202",
      category: "casual",
      price: 3200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Coordinated two-piece set — Adan's Libas styling",
      description: "Demo catalogue item for preview only. Co-Ord Set 4202 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "ADACO1003-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "ADACO1003-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "ADACO1003-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "ADACO1003-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "ADACO1003-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "ADACO1003-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1004,
      slug: "co-ord-set-4201-adan-s-libas",
      name: "Co-Ord Set 4201",
      name_bn: "Co-Ord Set 4201",
      category: "casual",
      price: 3200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Coordinated two-piece set — Adan's Libas styling",
      description: "Demo catalogue item for preview only. Co-Ord Set 4201 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "ADACO1004-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "ADACO1004-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "ADACO1004-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "ADACO1004-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "ADACO1004-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "ADACO1004-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1005,
      slug: "co-ord-set-4209-adan-s-libas",
      name: "Co-Ord Set 4209",
      name_bn: "Co-Ord Set 4209",
      category: "casual",
      price: 3200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Coordinated two-piece set — Adan's Libas styling",
      description: "Demo catalogue item for preview only. Co-Ord Set 4209 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "ADACO1005-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "ADACO1005-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "ADACO1005-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "ADACO1005-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "ADACO1005-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "ADACO1005-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1006,
      slug: "embroidered-suit-ethnc",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "festive",
      price: 5900, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "ETHEMB1006-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "ETHEMB1006-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "ETHEMB1006-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "ETHEMB1006-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "ETHEMB1006-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "ETHEMB1006-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 1007,
      slug: "ef-566-kastoor",
      name: "EF-566",
      name_bn: "EF-566",
      category: "festive",
      price: 6200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Kastoor styling",
      description: "Demo catalogue item for preview only. EF-566 shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "KASEF1007-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "KASEF1007-S", stock: 5 },
        { size: "M", color: "Teal", sku: "KASEF1007-M", stock: 6 },
        { size: "L", color: "Teal", sku: "KASEF1007-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "KASEF1007-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "KASEF1007-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1008,
      slug: "alisha-cord",
      name: "ALISHA",
      name_bn: "ALISHA",
      category: "festive",
      price: 4650, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Cord styling",
      description: "Demo catalogue item for preview only. ALISHA shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "CORALI1008-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "CORALI1008-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "CORALI1008-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "CORALI1008-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "CORALI1008-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "CORALI1008-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1009,
      slug: "embroidered-lawn-jazmin",
      name: "EMBROIDERED LAWN",
      name_bn: "EMBROIDERED LAWN",
      category: "luxury",
      price: 7650, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Jazmin styling",
      description: "Demo catalogue item for preview only. EMBROIDERED LAWN shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "JAZEMB1009-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "JAZEMB1009-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "JAZEMB1009-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "JAZEMB1009-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "JAZEMB1009-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "JAZEMB1009-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1010,
      slug: "embroidered-lawn-jazmin-2",
      name: "EMBROIDERED LAWN",
      name_bn: "EMBROIDERED LAWN",
      category: "festive",
      price: 6200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Jazmin styling",
      description: "Demo catalogue item for preview only. EMBROIDERED LAWN shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "JAZEMB1010-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "JAZEMB1010-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "JAZEMB1010-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "JAZEMB1010-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "JAZEMB1010-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "JAZEMB1010-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1011,
      slug: "tailored-2-piece-lawn-khaadi",
      name: "Tailored 2-Piece Lawn",
      name_bn: "Tailored 2-Piece Lawn",
      category: "festive",
      price: 5380, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Khaadi styling",
      description: "Demo catalogue item for preview only. Tailored 2-Piece Lawn shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "KHATAI1011-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "KHATAI1011-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "KHATAI1011-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "KHATAI1011-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "KHATAI1011-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "KHATAI1011-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1012,
      slug: "tailored-2-piece-lawn-khaadi-2",
      name: "Tailored 2-Piece Lawn",
      name_bn: "Tailored 2-Piece Lawn",
      category: "festive",
      price: 5400, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Khaadi styling",
      description: "Demo catalogue item for preview only. Tailored 2-Piece Lawn shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "KHATAI1012-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "KHATAI1012-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "KHATAI1012-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "KHATAI1012-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "KHATAI1012-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "KHATAI1012-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 1013,
      slug: "tailored-3-piece-khaadi",
      name: "Tailored 3 Piece",
      name_bn: "Tailored 3 Piece",
      category: "festive",
      price: 6850, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Khaadi styling",
      description: "Demo catalogue item for preview only. Tailored 3 Piece shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "KHATAI1013-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "KHATAI1013-S", stock: 5 },
        { size: "M", color: "Teal", sku: "KHATAI1013-M", stock: 6 },
        { size: "L", color: "Teal", sku: "KHATAI1013-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "KHATAI1013-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "KHATAI1013-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1014,
      slug: "3-piece-tailored-set-khaadi",
      name: "3-Piece Tailored Set",
      name_bn: "3-Piece Tailored Set",
      category: "festive",
      price: 6580, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Khaadi styling",
      description: "Demo catalogue item for preview only. 3-Piece Tailored Set shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "KHA3P1014-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "KHA3P1014-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "KHA3P1014-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "KHA3P1014-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "KHA3P1014-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "KHA3P1014-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1015,
      slug: "embroidered-broshia-tailored-3-piece-khaadi",
      name: "Embroidered Broshia Tailored 3-Piece",
      name_bn: "Embroidered Broshia Tailored 3-Piece",
      category: "luxury",
      price: 7950, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Khaadi styling",
      description: "Demo catalogue item for preview only. Embroidered Broshia Tailored 3-Piece shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "KHAEMB1015-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "KHAEMB1015-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "KHAEMB1015-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "KHAEMB1015-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "KHAEMB1015-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "KHAEMB1015-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1016,
      slug: "2-piece-embroidered-textured-lawn-khaadi",
      name: "2-Piece Embroidered Textured Lawn",
      name_bn: "2-Piece Embroidered Textured Lawn",
      category: "festive",
      price: 5300, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Khaadi styling",
      description: "Demo catalogue item for preview only. 2-Piece Embroidered Textured Lawn shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "KHA2P1016-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "KHA2P1016-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "KHA2P1016-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "KHA2P1016-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "KHA2P1016-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "KHA2P1016-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1017,
      slug: "2-piece-embroidered-textured-lawn-khaadi-2",
      name: "2-Piece Embroidered Textured Lawn",
      name_bn: "2-Piece Embroidered Textured Lawn",
      category: "festive",
      price: 5350, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Khaadi styling",
      description: "Demo catalogue item for preview only. 2-Piece Embroidered Textured Lawn shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "KHA2P1017-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "KHA2P1017-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "KHA2P1017-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "KHA2P1017-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "KHA2P1017-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "KHA2P1017-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1018,
      slug: "embroidered-textured-lawn-khaadi",
      name: "Embroidered Textured Lawn",
      name_bn: "Embroidered Textured Lawn",
      category: "festive",
      price: 5200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Khaadi styling",
      description: "Demo catalogue item for preview only. Embroidered Textured Lawn shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "KHAEMB1018-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "KHAEMB1018-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "KHAEMB1018-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "KHAEMB1018-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "KHAEMB1018-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "KHAEMB1018-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1019,
      slug: "2-piece-digital-printed-lawn-suit-agha-noor",
      name: "2 Piece Digital Printed Lawn Suit",
      name_bn: "2 Piece Digital Printed Lawn Suit",
      category: "festive",
      price: 5100, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Digital Printed Lawn Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "AGH2P1019-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "AGH2P1019-S", stock: 5 },
        { size: "M", color: "Teal", sku: "AGH2P1019-M", stock: 6 },
        { size: "L", color: "Teal", sku: "AGH2P1019-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "AGH2P1019-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "AGH2P1019-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1020,
      slug: "2-piece-embroidered-cambric-suit-agha-noor",
      name: "2 Piece Embroidered Cambric Suit",
      name_bn: "2 Piece Embroidered Cambric Suit",
      category: "festive",
      price: 5400, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Embroidered Cambric Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "AGH2P1020-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "AGH2P1020-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "AGH2P1020-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "AGH2P1020-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "AGH2P1020-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "AGH2P1020-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 1021,
      slug: "2-piece-digital-printed-lawn-suit-agha-noor-2",
      name: "2 Piece Digital Printed Lawn Suit",
      name_bn: "2 Piece Digital Printed Lawn Suit",
      category: "festive",
      price: 4950, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Digital Printed Lawn Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "AGH2P1021-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "AGH2P1021-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "AGH2P1021-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "AGH2P1021-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "AGH2P1021-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "AGH2P1021-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1022,
      slug: "2-piece-embroidered-cambric-suit-agha-noor-2",
      name: "2 Piece Embroidered Cambric Suit",
      name_bn: "2 Piece Embroidered Cambric Suit",
      category: "festive",
      price: 5950, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Embroidered Cambric Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "AGH2P1022-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "AGH2P1022-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "AGH2P1022-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "AGH2P1022-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "AGH2P1022-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "AGH2P1022-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1023,
      slug: "2-piece-embroidered-cambric-suit-agha-noor-3",
      name: "2 Piece Embroidered Cambric Suit",
      name_bn: "2 Piece Embroidered Cambric Suit",
      category: "festive",
      price: 5650, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Embroidered Cambric Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "AGH2P1023-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "AGH2P1023-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "AGH2P1023-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "AGH2P1023-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "AGH2P1023-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "AGH2P1023-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1024,
      slug: "2-piece-digital-printed-cambric-suit-agha-noor",
      name: "2 Piece Digital Printed Cambric Suit",
      name_bn: "2 Piece Digital Printed Cambric Suit",
      category: "festive",
      price: 4990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Digital Printed Cambric Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "AGH2P1024-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "AGH2P1024-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "AGH2P1024-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "AGH2P1024-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "AGH2P1024-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "AGH2P1024-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1025,
      slug: "2-piece-embroidered-cambric-suit-agha-noor-4",
      name: "2 Piece Embroidered Cambric Suit",
      name_bn: "2 Piece Embroidered Cambric Suit",
      category: "festive",
      price: 5800, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Embroidered Cambric Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "AGH2P1025-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "AGH2P1025-S", stock: 5 },
        { size: "M", color: "Teal", sku: "AGH2P1025-M", stock: 6 },
        { size: "L", color: "Teal", sku: "AGH2P1025-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "AGH2P1025-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "AGH2P1025-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1026,
      slug: "2-piece-embroidered-cambric-suit-agha-noor-5",
      name: "2 Piece Embroidered Cambric Suit",
      name_bn: "2 Piece Embroidered Cambric Suit",
      category: "festive",
      price: 5250, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Embroidered Cambric Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "AGH2P1026-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "AGH2P1026-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "AGH2P1026-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "AGH2P1026-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "AGH2P1026-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "AGH2P1026-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1027,
      slug: "2-piece-embroidered-cambric-suit-agha-noor-6",
      name: "2 Piece Embroidered Cambric Suit",
      name_bn: "2 Piece Embroidered Cambric Suit",
      category: "luxury",
      price: 7300, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Embroidered Cambric Suit shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "AGH2P1027-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "AGH2P1027-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "AGH2P1027-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "AGH2P1027-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "AGH2P1027-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "AGH2P1027-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1028,
      slug: "2-piece-embroidered-cambric-suit-agha-noor-7",
      name: "2 Piece Embroidered Cambric Suit",
      name_bn: "2 Piece Embroidered Cambric Suit",
      category: "festive",
      price: 6100, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Embroidered Cambric Suit shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "AGH2P1028-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "AGH2P1028-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "AGH2P1028-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "AGH2P1028-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "AGH2P1028-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "AGH2P1028-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1029,
      slug: "2-piece-embroidered-cambric-suit-s108882-agha-noor",
      name: "2 Piece Embroidered Cambric Suit S108882",
      name_bn: "2 Piece Embroidered Cambric Suit S108882",
      category: "festive",
      price: 4650, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Agha Noor styling",
      description: "Demo catalogue item for preview only. 2 Piece Embroidered Cambric Suit S108882 shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "AGH2P1029-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "AGH2P1029-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "AGH2P1029-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "AGH2P1029-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "AGH2P1029-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "AGH2P1029-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1030,
      slug: "akpwl-06-amna-khadija",
      name: "AKPWL-06",
      name_bn: "AKPWL-06",
      category: "casual",
      price: 3850, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Amna Khadija styling",
      description: "Demo catalogue item for preview only. AKPWL-06 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "AMNAKP1030-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "AMNAKP1030-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "AMNAKP1030-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "AMNAKP1030-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "AMNAKP1030-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "AMNAKP1030-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 1031,
      slug: "akpwl-05-amna-khadija",
      name: "AKPWL-05",
      name_bn: "AKPWL-05",
      category: "casual",
      price: 3850, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Amna Khadija styling",
      description: "Demo catalogue item for preview only. AKPWL-05 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "AMNAKP1031-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "AMNAKP1031-S", stock: 5 },
        { size: "M", color: "Teal", sku: "AMNAKP1031-M", stock: 6 },
        { size: "L", color: "Teal", sku: "AMNAKP1031-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "AMNAKP1031-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "AMNAKP1031-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1032,
      slug: "akpwl-03-amna-khadija",
      name: "AKPWL-03",
      name_bn: "AKPWL-03",
      category: "casual",
      price: 3750, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Amna Khadija styling",
      description: "Demo catalogue item for preview only. AKPWL-03 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "AMNAKP1032-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "AMNAKP1032-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "AMNAKP1032-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "AMNAKP1032-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "AMNAKP1032-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "AMNAKP1032-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1033,
      slug: "akpwl-01-amna-khadija",
      name: "AKPWL-01",
      name_bn: "AKPWL-01",
      category: "casual",
      price: 3750, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Amna Khadija styling",
      description: "Demo catalogue item for preview only. AKPWL-01 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "AMNAKP1033-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "AMNAKP1033-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "AMNAKP1033-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "AMNAKP1033-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "AMNAKP1033-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "AMNAKP1033-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1034,
      slug: "akpwl-04-amna-khadija",
      name: "AKPWL-04",
      name_bn: "AKPWL-04",
      category: "casual",
      price: 3950, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Amna Khadija styling",
      description: "Demo catalogue item for preview only. AKPWL-04 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "AMNAKP1034-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "AMNAKP1034-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "AMNAKP1034-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "AMNAKP1034-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "AMNAKP1034-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "AMNAKP1034-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1035,
      slug: "2-pc-stitched-embroidered-lawn-cnp-6-254-charizma",
      name: "2-PC Stitched Embroidered Lawn CNP-6-254",
      name_bn: "2-PC Stitched Embroidered Lawn CNP-6-254",
      category: "festive",
      price: 6990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Charizma styling",
      description: "Demo catalogue item for preview only. 2-PC Stitched Embroidered Lawn CNP-6-254 shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "CHA2P1035-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "CHA2P1035-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "CHA2P1035-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "CHA2P1035-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "CHA2P1035-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "CHA2P1035-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1036,
      slug: "printed-kaftaan-slub-textured-dress-2896-zellbury",
      name: "Printed Kaftaan Slub Textured Dress 2896",
      name_bn: "Printed Kaftaan Slub Textured Dress 2896",
      category: "casual",
      price: 2850, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Printed slub-textured kaftan — Zellbury styling",
      description: "Demo catalogue item for preview only. Printed Kaftaan Slub Textured Dress 2896 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "ZELPRI1036-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "ZELPRI1036-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "ZELPRI1036-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "ZELPRI1036-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "ZELPRI1036-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "ZELPRI1036-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1037,
      slug: "kurta-dupatta-2897-zellbury",
      name: "Kurta Dupatta 2897",
      name_bn: "Kurta Dupatta 2897",
      category: "casual",
      price: 2800, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Kurta with dupatta — Zellbury styling",
      description: "Demo catalogue item for preview only. Kurta Dupatta 2897 shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "ZELKUR1037-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "ZELKUR1037-S", stock: 5 },
        { size: "M", color: "Teal", sku: "ZELKUR1037-M", stock: 6 },
        { size: "L", color: "Teal", sku: "ZELKUR1037-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "ZELKUR1037-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "ZELKUR1037-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1038,
      slug: "ajlpe-05-embroidered-exclusive-silk-stitched-2pcs-asim-jofa",
      name: "AJLPE-05 Embroidered Exclusive Silk Stitched 2pcs",
      name_bn: "AJLPE-05 Embroidered Exclusive Silk Stitched 2pcs",
      category: "festive",
      price: 4850, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Silk co-ord set — Asim Jofa styling",
      description: "Demo catalogue item for preview only. AJLPE-05 Embroidered Exclusive Silk Stitched 2pcs shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "ASIAJL1038-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "ASIAJL1038-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "ASIAJL1038-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "ASIAJL1038-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "ASIAJL1038-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "ASIAJL1038-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1039,
      slug: "ajlpe-03-embroidered-lawn-stitched-2pcs-asim-jofa",
      name: "AJLPE-03 Embroidered Lawn Stitched 2pcs",
      name_bn: "AJLPE-03 Embroidered Lawn Stitched 2pcs",
      category: "festive",
      price: 5350, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Asim Jofa styling",
      description: "Demo catalogue item for preview only. AJLPE-03 Embroidered Lawn Stitched 2pcs shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "ASIAJL1039-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "ASIAJL1039-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "ASIAJL1039-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "ASIAJL1039-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "ASIAJL1039-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "ASIAJL1039-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1040,
      slug: "printed-lawn-stitched-2pcs-asim-jofa",
      name: "Printed Lawn Stitched 2pcs",
      name_bn: "Printed Lawn Stitched 2pcs",
      category: "festive",
      price: 4200, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Asim Jofa styling",
      description: "Demo catalogue item for preview only. Printed Lawn Stitched 2pcs shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "ASIPRI1040-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "ASIPRI1040-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "ASIPRI1040-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "ASIPRI1040-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "ASIPRI1040-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "ASIPRI1040-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1041,
      slug: "raima-torani",
      name: "RAIMA",
      name_bn: "RAIMA",
      category: "festive",
      price: 4500, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Torani styling",
      description: "Demo catalogue item for preview only. RAIMA shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "TORRAI1041-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "TORRAI1041-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "TORRAI1041-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "TORRAI1041-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "TORRAI1041-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "TORRAI1041-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1042,
      slug: "pink-zimal-set-pemberley",
      name: "Pink Zimal Set",
      name_bn: "Pink Zimal Set",
      category: "festive",
      price: 5450, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Pemberley styling",
      description: "Demo catalogue item for preview only. Pink Zimal Set shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "PEMPIN1042-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "PEMPIN1042-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "PEMPIN1042-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "PEMPIN1042-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "PEMPIN1042-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "PEMPIN1042-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1043,
      slug: "zyra-set-pemberley",
      name: "ZYRA SET",
      name_bn: "ZYRA SET",
      category: "festive",
      price: 5600, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Pemberley styling",
      description: "Demo catalogue item for preview only. ZYRA SET shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "PEMZYR1043-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "PEMZYR1043-S", stock: 5 },
        { size: "M", color: "Teal", sku: "PEMZYR1043-M", stock: 6 },
        { size: "L", color: "Teal", sku: "PEMZYR1043-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "PEMZYR1043-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "PEMZYR1043-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1044,
      slug: "aaliyah-lazuli",
      name: "Aaliyah",
      name_bn: "Aaliyah",
      category: "festive",
      price: 4250, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Lazuli styling",
      description: "Demo catalogue item for preview only. Aaliyah shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "LAZAAL1044-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "LAZAAL1044-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "LAZAAL1044-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "LAZAAL1044-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "LAZAAL1044-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "LAZAAL1044-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1045,
      slug: "koko-lazuli",
      name: "Koko",
      name_bn: "Koko",
      category: "festive",
      price: 5500, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Lazuli styling",
      description: "Demo catalogue item for preview only. Koko shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "LAZKOK1045-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "LAZKOK1045-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "LAZKOK1045-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "LAZKOK1045-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "LAZKOK1045-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "LAZKOK1045-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1046,
      slug: "veya-7b-unstitched",
      name: "Veya-7B",
      name_bn: "Veya-7B",
      category: "festive",
      price: 5990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Unstitched styling",
      description: "Demo catalogue item for preview only. Veya-7B shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "UNSVEY1046-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "UNSVEY1046-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "UNSVEY1046-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "UNSVEY1046-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "UNSVEY1046-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "UNSVEY1046-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1047,
      slug: "aira-6b-unstitched",
      name: "Aira-6B",
      name_bn: "Aira-6B",
      category: "festive",
      price: 5990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Unstitched styling",
      description: "Demo catalogue item for preview only. Aira-6B shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "UNSAIR1047-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "UNSAIR1047-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "UNSAIR1047-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "UNSAIR1047-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "UNSAIR1047-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "UNSAIR1047-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1048,
      slug: "seren-5a-unstitched",
      name: "Seren-5A",
      name_bn: "Seren-5A",
      category: "festive",
      price: 5990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Unstitched styling",
      description: "Demo catalogue item for preview only. Seren-5A shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "UNSSER1048-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "UNSSER1048-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "UNSSER1048-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "UNSSER1048-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "UNSSER1048-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "UNSSER1048-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1049,
      slug: "isla-4a-unstitched",
      name: "Isla-4A",
      name_bn: "Isla-4A",
      category: "festive",
      price: 5990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Unstitched styling",
      description: "Demo catalogue item for preview only. Isla-4A shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "UNSISL1049-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "UNSISL1049-S", stock: 5 },
        { size: "M", color: "Teal", sku: "UNSISL1049-M", stock: 6 },
        { size: "L", color: "Teal", sku: "UNSISL1049-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "UNSISL1049-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "UNSISL1049-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1050,
      slug: "aviona-3b-unstitched",
      name: "Aviona-3B",
      name_bn: "Aviona-3B",
      category: "festive",
      price: 5990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Unstitched styling",
      description: "Demo catalogue item for preview only. Aviona-3B shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "UNSAVI1050-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "UNSAVI1050-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "UNSAVI1050-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "UNSAVI1050-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "UNSAVI1050-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "UNSAVI1050-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1051,
      slug: "aviona-3a-unstitched",
      name: "Aviona-3A",
      name_bn: "Aviona-3A",
      category: "festive",
      price: 5990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Unstitched styling",
      description: "Demo catalogue item for preview only. Aviona-3A shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "UNSAVI1051-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "UNSAVI1051-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "UNSAVI1051-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "UNSAVI1051-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "UNSAVI1051-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "UNSAVI1051-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1052,
      slug: "miro-2b-unstitched",
      name: "Miro-2B",
      name_bn: "Miro-2B",
      category: "festive",
      price: 5990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Unstitched styling",
      description: "Demo catalogue item for preview only. Miro-2B shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "UNSMIR1052-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "UNSMIR1052-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "UNSMIR1052-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "UNSMIR1052-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "UNSMIR1052-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "UNSMIR1052-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1053,
      slug: "rivae-1a-unstitched",
      name: "Rivae-1A",
      name_bn: "Rivae-1A",
      category: "festive",
      price: 5900, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Unstitched styling",
      description: "Demo catalogue item for preview only. Rivae-1A shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "UNSRIV1053-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "UNSRIV1053-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "UNSRIV1053-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "UNSRIV1053-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "UNSRIV1053-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "UNSRIV1053-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1054,
      slug: "embroidered-suit-ethnc-2",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "luxury",
      price: 10950, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "ETHEMB1054-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "ETHEMB1054-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "ETHEMB1054-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "ETHEMB1054-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "ETHEMB1054-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "ETHEMB1054-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1055,
      slug: "embroidered-suit-ethnc-3",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "festive",
      price: 6950, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "ETHEMB1055-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "ETHEMB1055-S", stock: 5 },
        { size: "M", color: "Teal", sku: "ETHEMB1055-M", stock: 6 },
        { size: "L", color: "Teal", sku: "ETHEMB1055-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "ETHEMB1055-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "ETHEMB1055-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1056,
      slug: "embroidered-suit-ethnc-4",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "luxury",
      price: 10500, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "ETHEMB1056-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "ETHEMB1056-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "ETHEMB1056-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "ETHEMB1056-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "ETHEMB1056-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "ETHEMB1056-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1057,
      slug: "embroidered-suit-ethnc-5",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "festive",
      price: 6990, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "ETHEMB1057-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "ETHEMB1057-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "ETHEMB1057-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "ETHEMB1057-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "ETHEMB1057-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "ETHEMB1057-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1058,
      slug: "embroidered-suit-ethnc-6",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "luxury",
      price: 7650, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "ETHEMB1058-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "ETHEMB1058-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "ETHEMB1058-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "ETHEMB1058-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "ETHEMB1058-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "ETHEMB1058-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1059,
      slug: "embroidered-suit-ethnc-7",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "luxury",
      price: 11500, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "ETHEMB1059-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "ETHEMB1059-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "ETHEMB1059-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "ETHEMB1059-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "ETHEMB1059-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "ETHEMB1059-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1060,
      slug: "embroidered-suit-ethnc-8",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "festive",
      price: 6250, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "ETHEMB1060-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "ETHEMB1060-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "ETHEMB1060-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "ETHEMB1060-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "ETHEMB1060-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "ETHEMB1060-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1061,
      slug: "embroidered-suit-ethnc-9",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "luxury",
      price: 7500, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "ETHEMB1061-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "ETHEMB1061-S", stock: 5 },
        { size: "M", color: "Teal", sku: "ETHEMB1061-M", stock: 6 },
        { size: "L", color: "Teal", sku: "ETHEMB1061-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "ETHEMB1061-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "ETHEMB1061-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1062,
      slug: "embroidered-suit-ethnc-10",
      name: "EMBROIDERED SUIT",
      name_bn: "EMBROIDERED SUIT",
      category: "luxury",
      price: 10400, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Ethnc styling",
      description: "Demo catalogue item for preview only. EMBROIDERED SUIT shown in a luxury silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "ETHEMB1062-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "ETHEMB1062-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "ETHEMB1062-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "ETHEMB1062-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "ETHEMB1062-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "ETHEMB1062-XXL", stock: 2 }
      ],
      tags: ["demo", "luxury", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1063,
      slug: "lawn-co-ord-set-lime-light",
      name: "Lawn Co-ord Set",
      name_bn: "Lawn Co-ord Set",
      category: "casual",
      price: 3700, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Lime Light styling",
      description: "Demo catalogue item for preview only. Lawn Co-ord Set shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "LIMLAW1063-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "LIMLAW1063-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "LIMLAW1063-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "LIMLAW1063-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "LIMLAW1063-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "LIMLAW1063-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1064,
      slug: "3-piece-lawn-suit-embroidered-pret-lime-light",
      name: "3 Piece Lawn Suit Embroidered Pret",
      name_bn: "3 Piece Lawn Suit Embroidered Pret",
      category: "festive",
      price: 5150, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Lime Light styling",
      description: "Demo catalogue item for preview only. 3 Piece Lawn Suit Embroidered Pret shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "LIM3P1064-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "LIM3P1064-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "LIM3P1064-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "LIM3P1064-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "LIM3P1064-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "LIM3P1064-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1065,
      slug: "lawn-texture-shirt-embroidered-pret-lime-light",
      name: "Lawn Texture Shirt Embroidered Pret",
      name_bn: "Lawn Texture Shirt Embroidered Pret",
      category: "casual",
      price: 2950, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Lime Light styling",
      description: "Demo catalogue item for preview only. Lawn Texture Shirt Embroidered Pret shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "LIMLAW1065-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "LIMLAW1065-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "LIMLAW1065-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "LIMLAW1065-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "LIMLAW1065-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "LIMLAW1065-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1066,
      slug: "2-piece-satin-suit-embroidered-pret-lime-light",
      name: "2 Piece Satin Suit Embroidered Pret",
      name_bn: "2 Piece Satin Suit Embroidered Pret",
      category: "festive",
      price: 5150, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Satin two-piece suit — Lime Light styling",
      description: "Demo catalogue item for preview only. 2 Piece Satin Suit Embroidered Pret shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "LIM2P1066-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "LIM2P1066-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "LIM2P1066-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "LIM2P1066-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "LIM2P1066-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "LIM2P1066-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1067,
      slug: "2-piece-lawn-suit-embroidered-pret-lime-light",
      name: "2 Piece Lawn Suit Embroidered Pret",
      name_bn: "2 Piece Lawn Suit Embroidered Pret",
      category: "festive",
      price: 4250, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Lime Light styling",
      description: "Demo catalogue item for preview only. 2 Piece Lawn Suit Embroidered Pret shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "LIM2P1067-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "LIM2P1067-S", stock: 5 },
        { size: "M", color: "Teal", sku: "LIM2P1067-M", stock: 6 },
        { size: "L", color: "Teal", sku: "LIM2P1067-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "LIM2P1067-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "LIM2P1067-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1068,
      slug: "3-piece-dobby-suit-embroidered-pret-lime-light",
      name: "3 Piece Dobby Suit Embroidered Pret",
      name_bn: "3 Piece Dobby Suit Embroidered Pret",
      category: "festive",
      price: 5350, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Lime Light styling",
      description: "Demo catalogue item for preview only. 3 Piece Dobby Suit Embroidered Pret shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "LIM3P1068-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "LIM3P1068-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "LIM3P1068-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "LIM3P1068-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "LIM3P1068-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "LIM3P1068-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1069,
      slug: "2-piece-lawn-slub-suit-pret-lime-light",
      name: "2 Piece Lawn Slub Suit Pret",
      name_bn: "2 Piece Lawn Slub Suit Pret",
      category: "casual",
      price: 3700, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Lime Light styling",
      description: "Demo catalogue item for preview only. 2 Piece Lawn Slub Suit Pret shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "LIM2P1069-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "LIM2P1069-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "LIM2P1069-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "LIM2P1069-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "LIM2P1069-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "LIM2P1069-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1070,
      slug: "3-piece-lawn-suit-pret-lime-light",
      name: "3 Piece Lawn Suit Pret",
      name_bn: "3 Piece Lawn Suit Pret",
      category: "festive",
      price: 5150, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Lime Light styling",
      description: "Demo catalogue item for preview only. 3 Piece Lawn Suit Pret shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "LIM3P1070-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "LIM3P1070-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "LIM3P1070-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "LIM3P1070-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "LIM3P1070-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "LIM3P1070-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1071,
      slug: "2-piece-lawn-suit-embroidered-pret-lime-light-2",
      name: "2 Piece Lawn Suit Embroidered Pret",
      name_bn: "2 Piece Lawn Suit Embroidered Pret",
      category: "festive",
      price: 4150, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Lawn suit with dupatta — Lime Light styling",
      description: "Demo catalogue item for preview only. 2 Piece Lawn Suit Embroidered Pret shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "LIM2P1071-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "LIM2P1071-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "LIM2P1071-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "LIM2P1071-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "LIM2P1071-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "LIM2P1071-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1072,
      slug: "silk-co-ord-set-embroidered-lime-light",
      name: "Silk Co-ord Set Embroidered",
      name_bn: "Silk Co-ord Set Embroidered",
      category: "festive",
      price: 5300, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Silk co-ord set — Lime Light styling",
      description: "Demo catalogue item for preview only. Silk Co-ord Set Embroidered shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "LIMSIL1072-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "LIMSIL1072-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "LIMSIL1072-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "LIMSIL1072-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "LIMSIL1072-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "LIMSIL1072-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1073,
      slug: "2-piece-cambric-suit-pret-lime-light",
      name: "2 Piece Cambric Suit Pret",
      name_bn: "2 Piece Cambric Suit Pret",
      category: "festive",
      price: 4650, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Embroidered Cambric two-piece suit — Lime Light styling",
      description: "Demo catalogue item for preview only. 2 Piece Cambric Suit Pret shown in a festive silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "LIM2P1073-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "LIM2P1073-S", stock: 5 },
        { size: "M", color: "Teal", sku: "LIM2P1073-M", stock: 6 },
        { size: "L", color: "Teal", sku: "LIM2P1073-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "LIM2P1073-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "LIM2P1073-XXL", stock: 2 }
      ],
      tags: ["demo", "festive", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1074,
      slug: "embroidered-pret-lime-light",
      name: "EMBROIDERED Pret",
      name_bn: "EMBROIDERED Pret",
      category: "casual",
      price: 3250, /* SAMPLE / DEMO CATALOG DATA (market reference - replace with real Oronno product) */
      salePrice: null,
      fabric: "Premium embroidered ethnic suit — Lime Light styling",
      description: "Demo catalogue item for preview only. EMBROIDERED Pret shown in a casual silhouette to demonstrate the storefront with a full product range. Replace with Oronno's own product before launch.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Moderate iron.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "LIMEMB1074-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "LIMEMB1074-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "LIMEMB1074-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "LIMEMB1074-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "LIMEMB1074-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "LIMEMB1074-XXL", stock: 2 }
      ],
      tags: ["demo", "casual", "pakistani suit", "sample catalogue"],
      isNew: false,
      isFeatured: false
    }
  ],

  // Real reviews store. Zero fabricated reviews.
  // Reviews section renders nothing when empty as per project rules.
  reviews: []
};
