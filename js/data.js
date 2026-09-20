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

    /* ----- Oronno Fashion catalogue ----- */
    {
      id: 1000,
      slug: "noor-cotton-lawn-co-ord-set",
      name: "Noor — Cotton Lawn Co-ord Set",
      name_bn: "Noor — Cotton Lawn Co-ord Set",
      category: "casual",
      price: 3200,
      salePrice: null,
      fabric: "Cotton Lawn co-ord set with coordinated dupatta",
      description: "A breezy cotton lawn co-ord set cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "NOOCO1000-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "NOOCO1000-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "NOOCO1000-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "NOOCO1000-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "NOOCO1000-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "NOOCO1000-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "co-ord-set", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: true
    },
    {
      id: 1001,
      slug: "meher-cotton-lawn-co-ord-set",
      name: "Meher — Cotton Lawn Co-ord Set",
      name_bn: "Meher — Cotton Lawn Co-ord Set",
      category: "casual",
      price: 3200,
      salePrice: null,
      fabric: "Cotton Lawn co-ord set with coordinated dupatta",
      description: "A breezy cotton lawn co-ord set cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "MEHCO1001-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "MEHCO1001-S", stock: 5 },
        { size: "M", color: "Teal", sku: "MEHCO1001-M", stock: 6 },
        { size: "L", color: "Teal", sku: "MEHCO1001-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "MEHCO1001-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "MEHCO1001-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "co-ord-set", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1002,
      slug: "gulnar-cotton-lawn-co-ord-set",
      name: "Gulnar — Cotton Lawn Co-ord Set",
      name_bn: "Gulnar — Cotton Lawn Co-ord Set",
      category: "casual",
      price: 3200,
      salePrice: null,
      fabric: "Cotton Lawn co-ord set with coordinated dupatta",
      description: "A breezy cotton lawn co-ord set cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "GULCO1002-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "GULCO1002-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "GULCO1002-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "GULCO1002-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "GULCO1002-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "GULCO1002-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "co-ord-set", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1003,
      slug: "roshni-cotton-lawn-co-ord-set",
      name: "Roshni — Cotton Lawn Co-ord Set",
      name_bn: "Roshni — Cotton Lawn Co-ord Set",
      category: "casual",
      price: 3200,
      salePrice: null,
      fabric: "Cotton Lawn co-ord set with coordinated dupatta",
      description: "A breezy cotton lawn co-ord set cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "ROSCO1003-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "ROSCO1003-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "ROSCO1003-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "ROSCO1003-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "ROSCO1003-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "ROSCO1003-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "co-ord-set", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1004,
      slug: "saba-cotton-lawn-co-ord-set",
      name: "Saba — Cotton Lawn Co-ord Set",
      name_bn: "Saba — Cotton Lawn Co-ord Set",
      category: "casual",
      price: 3200,
      salePrice: null,
      fabric: "Cotton Lawn co-ord set with coordinated dupatta",
      description: "A breezy cotton lawn co-ord set cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "SABCO1004-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "SABCO1004-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "SABCO1004-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "SABCO1004-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "SABCO1004-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "SABCO1004-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "co-ord-set", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1005,
      slug: "anaya-cotton-lawn-co-ord-set",
      name: "Anaya — Cotton Lawn Co-ord Set",
      name_bn: "Anaya — Cotton Lawn Co-ord Set",
      category: "casual",
      price: 3200,
      salePrice: null,
      fabric: "Cotton Lawn co-ord set with coordinated dupatta",
      description: "A breezy cotton lawn co-ord set cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "ANACO1005-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "ANACO1005-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "ANACO1005-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "ANACO1005-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "ANACO1005-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "ANACO1005-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "co-ord-set", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1006,
      slug: "mahira-chiffon-three-piece-suit",
      name: "Mahira — Chiffon Three-Piece Suit",
      name_bn: "Mahira — Chiffon Three-Piece Suit",
      category: "festive",
      price: 5900,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "MAHCH1006-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "MAHCH1006-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "MAHCH1006-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "MAHCH1006-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "MAHCH1006-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "MAHCH1006-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1007,
      slug: "zoya-chiffon-three-piece-suit",
      name: "Zoya — Chiffon Three-Piece Suit",
      name_bn: "Zoya — Chiffon Three-Piece Suit",
      category: "festive",
      price: 6200,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "ZOYCH1007-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "ZOYCH1007-S", stock: 5 },
        { size: "M", color: "Teal", sku: "ZOYCH1007-M", stock: 6 },
        { size: "L", color: "Teal", sku: "ZOYCH1007-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "ZOYCH1007-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "ZOYCH1007-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1008,
      slug: "inaya-chiffon-three-piece-suit",
      name: "Inaya — Chiffon Three-Piece Suit",
      name_bn: "Inaya — Chiffon Three-Piece Suit",
      category: "festive",
      price: 4650,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "INACH1008-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "INACH1008-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "INACH1008-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "INACH1008-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "INACH1008-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "INACH1008-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1009,
      slug: "rida-lawn-three-piece-suit",
      name: "Rida — Lawn Three-Piece Suit",
      name_bn: "Rida — Lawn Three-Piece Suit",
      category: "luxury",
      price: 7650,
      salePrice: null,
      fabric: "Lawn three-piece with kameez, dupatta & trouser",
      description: "A statement lawn three-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "RIDLA1009-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "RIDLA1009-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "RIDLA1009-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "RIDLA1009-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "RIDLA1009-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "RIDLA1009-XXL", stock: 2 }
      ],
      tags: ["luxury", "lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1010,
      slug: "alia-lawn-three-piece-suit",
      name: "Alia — Lawn Three-Piece Suit",
      name_bn: "Alia — Lawn Three-Piece Suit",
      category: "festive",
      price: 6200,
      salePrice: null,
      fabric: "Lawn three-piece with kameez, dupatta & trouser",
      description: "A festive lawn three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "ALILA1010-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "ALILA1010-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "ALILA1010-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "ALILA1010-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "ALILA1010-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "ALILA1010-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1011,
      slug: "sana-lawn-two-piece-suit",
      name: "Sana — Lawn Two-Piece Suit",
      name_bn: "Sana — Lawn Two-Piece Suit",
      category: "festive",
      price: 5380,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "SANLA1011-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "SANLA1011-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "SANLA1011-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "SANLA1011-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "SANLA1011-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "SANLA1011-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: true,
      isFeatured: false
    },
    {
      id: 1012,
      slug: "hoor-lawn-two-piece-suit",
      name: "Hoor — Lawn Two-Piece Suit",
      name_bn: "Hoor — Lawn Two-Piece Suit",
      category: "festive",
      price: 5400,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "HOOLA1012-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "HOOLA1012-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "HOOLA1012-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "HOOLA1012-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "HOOLA1012-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "HOOLA1012-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1013,
      slug: "aroosh-chiffon-three-piece-suit",
      name: "Aroosh — Chiffon Three-Piece Suit",
      name_bn: "Aroosh — Chiffon Three-Piece Suit",
      category: "festive",
      price: 6850,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "AROCH1013-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "AROCH1013-S", stock: 5 },
        { size: "M", color: "Teal", sku: "AROCH1013-M", stock: 6 },
        { size: "L", color: "Teal", sku: "AROCH1013-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "AROCH1013-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "AROCH1013-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 1014,
      slug: "zunaira-chiffon-three-piece-suit",
      name: "Zunaira — Chiffon Three-Piece Suit",
      name_bn: "Zunaira — Chiffon Three-Piece Suit",
      category: "festive",
      price: 6580,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "ZUNCH1014-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "ZUNCH1014-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "ZUNCH1014-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "ZUNCH1014-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "ZUNCH1014-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "ZUNCH1014-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1015,
      slug: "kiran-raw-silk-three-piece-suit",
      name: "Kiran — Raw Silk Three-Piece Suit",
      name_bn: "Kiran — Raw Silk Three-Piece Suit",
      category: "luxury",
      price: 7950,
      salePrice: null,
      fabric: "Raw Silk three-piece with kameez, dupatta & trouser",
      description: "A statement raw silk three-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "KIRRA1015-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "KIRRA1015-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "KIRRA1015-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "KIRRA1015-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "KIRRA1015-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "KIRRA1015-XXL", stock: 2 }
      ],
      tags: ["luxury", "raw silk", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1016,
      slug: "reshmi-lawn-two-piece-suit",
      name: "Reshmi — Lawn Two-Piece Suit",
      name_bn: "Reshmi — Lawn Two-Piece Suit",
      category: "festive",
      price: 5300,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "RESLA1016-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "RESLA1016-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "RESLA1016-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "RESLA1016-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "RESLA1016-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "RESLA1016-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1017,
      slug: "namira-lawn-two-piece-suit",
      name: "Namira — Lawn Two-Piece Suit",
      name_bn: "Namira — Lawn Two-Piece Suit",
      category: "festive",
      price: 5350,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "NAMLA1017-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "NAMLA1017-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "NAMLA1017-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "NAMLA1017-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "NAMLA1017-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "NAMLA1017-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1018,
      slug: "aiza-lawn-three-piece-suit",
      name: "Aiza — Lawn Three-Piece Suit",
      name_bn: "Aiza — Lawn Three-Piece Suit",
      category: "festive",
      price: 5200,
      salePrice: null,
      fabric: "Lawn three-piece with kameez, dupatta & trouser",
      description: "A festive lawn three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "AIZLA1018-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "AIZLA1018-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "AIZLA1018-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "AIZLA1018-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "AIZLA1018-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "AIZLA1018-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1019,
      slug: "bushra-lawn-two-piece-suit",
      name: "Bushra — Lawn Two-Piece Suit",
      name_bn: "Bushra — Lawn Two-Piece Suit",
      category: "festive",
      price: 5100,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "BUSLA1019-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "BUSLA1019-S", stock: 5 },
        { size: "M", color: "Teal", sku: "BUSLA1019-M", stock: 6 },
        { size: "L", color: "Teal", sku: "BUSLA1019-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "BUSLA1019-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "BUSLA1019-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1020,
      slug: "falak-cambric-two-piece-suit",
      name: "Falak — Cambric Two-Piece Suit",
      name_bn: "Falak — Cambric Two-Piece Suit",
      category: "festive",
      price: 5400,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "FALCA1020-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "FALCA1020-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "FALCA1020-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "FALCA1020-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "FALCA1020-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "FALCA1020-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1021,
      slug: "ghazal-lawn-two-piece-suit",
      name: "Ghazal — Lawn Two-Piece Suit",
      name_bn: "Ghazal — Lawn Two-Piece Suit",
      category: "festive",
      price: 4950,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "GHALA1021-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "GHALA1021-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "GHALA1021-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "GHALA1021-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "GHALA1021-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "GHALA1021-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1022,
      slug: "hina-cambric-two-piece-suit",
      name: "Hina — Cambric Two-Piece Suit",
      name_bn: "Hina — Cambric Two-Piece Suit",
      category: "festive",
      price: 5950,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "HINCA1022-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "HINCA1022-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "HINCA1022-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "HINCA1022-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "HINCA1022-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "HINCA1022-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1023,
      slug: "iqra-cambric-two-piece-suit",
      name: "Iqra — Cambric Two-Piece Suit",
      name_bn: "Iqra — Cambric Two-Piece Suit",
      category: "festive",
      price: 5650,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "IQRCA1023-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "IQRCA1023-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "IQRCA1023-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "IQRCA1023-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "IQRCA1023-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "IQRCA1023-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1024,
      slug: "jannat-cambric-two-piece-suit",
      name: "Jannat — Cambric Two-Piece Suit",
      name_bn: "Jannat — Cambric Two-Piece Suit",
      category: "festive",
      price: 4990,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "JANCA1024-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "JANCA1024-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "JANCA1024-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "JANCA1024-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "JANCA1024-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "JANCA1024-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1025,
      slug: "komal-cambric-two-piece-suit",
      name: "Komal — Cambric Two-Piece Suit",
      name_bn: "Komal — Cambric Two-Piece Suit",
      category: "festive",
      price: 5800,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "KOMCA1025-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "KOMCA1025-S", stock: 5 },
        { size: "M", color: "Teal", sku: "KOMCA1025-M", stock: 6 },
        { size: "L", color: "Teal", sku: "KOMCA1025-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "KOMCA1025-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "KOMCA1025-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1026,
      slug: "lubna-cambric-two-piece-suit",
      name: "Lubna — Cambric Two-Piece Suit",
      name_bn: "Lubna — Cambric Two-Piece Suit",
      category: "festive",
      price: 5250,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "LUBCA1026-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "LUBCA1026-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "LUBCA1026-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "LUBCA1026-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "LUBCA1026-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "LUBCA1026-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 1027,
      slug: "mahi-cambric-two-piece-suit",
      name: "Mahi — Cambric Two-Piece Suit",
      name_bn: "Mahi — Cambric Two-Piece Suit",
      category: "luxury",
      price: 7300,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A statement cambric two-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "MAHCA1027-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "MAHCA1027-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "MAHCA1027-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "MAHCA1027-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "MAHCA1027-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "MAHCA1027-XXL", stock: 2 }
      ],
      tags: ["luxury", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1028,
      slug: "nadia-cambric-two-piece-suit",
      name: "Nadia — Cambric Two-Piece Suit",
      name_bn: "Nadia — Cambric Two-Piece Suit",
      category: "festive",
      price: 6100,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "NADCA1028-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "NADCA1028-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "NADCA1028-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "NADCA1028-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "NADCA1028-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "NADCA1028-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1029,
      slug: "parisa-cambric-two-piece-suit",
      name: "Parisa — Cambric Two-Piece Suit",
      name_bn: "Parisa — Cambric Two-Piece Suit",
      category: "festive",
      price: 4650,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "PARCA1029-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "PARCA1029-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "PARCA1029-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "PARCA1029-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "PARCA1029-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "PARCA1029-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1030,
      slug: "rimsha-cotton-lawn-three-piece-suit",
      name: "Rimsha — Cotton Lawn Three-Piece Suit",
      name_bn: "Rimsha — Cotton Lawn Three-Piece Suit",
      category: "casual",
      price: 3850,
      salePrice: null,
      fabric: "Cotton Lawn three-piece with kameez, dupatta & trouser",
      description: "A breezy cotton lawn three-piece suit cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "RIMCO1030-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "RIMCO1030-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "RIMCO1030-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "RIMCO1030-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "RIMCO1030-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "RIMCO1030-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1031,
      slug: "sitara-cotton-lawn-three-piece-suit",
      name: "Sitara — Cotton Lawn Three-Piece Suit",
      name_bn: "Sitara — Cotton Lawn Three-Piece Suit",
      category: "casual",
      price: 3850,
      salePrice: null,
      fabric: "Cotton Lawn three-piece with kameez, dupatta & trouser",
      description: "A breezy cotton lawn three-piece suit cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "SITCO1031-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "SITCO1031-S", stock: 5 },
        { size: "M", color: "Teal", sku: "SITCO1031-M", stock: 6 },
        { size: "L", color: "Teal", sku: "SITCO1031-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "SITCO1031-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "SITCO1031-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1032,
      slug: "tania-cotton-lawn-three-piece-suit",
      name: "Tania — Cotton Lawn Three-Piece Suit",
      name_bn: "Tania — Cotton Lawn Three-Piece Suit",
      category: "casual",
      price: 3750,
      salePrice: null,
      fabric: "Cotton Lawn three-piece with kameez, dupatta & trouser",
      description: "A breezy cotton lawn three-piece suit cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "TANCO1032-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "TANCO1032-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "TANCO1032-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "TANCO1032-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "TANCO1032-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "TANCO1032-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1033,
      slug: "warda-cotton-lawn-three-piece-suit",
      name: "Warda — Cotton Lawn Three-Piece Suit",
      name_bn: "Warda — Cotton Lawn Three-Piece Suit",
      category: "casual",
      price: 3750,
      salePrice: null,
      fabric: "Cotton Lawn three-piece with kameez, dupatta & trouser",
      description: "A breezy cotton lawn three-piece suit cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "WARCO1033-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "WARCO1033-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "WARCO1033-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "WARCO1033-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "WARCO1033-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "WARCO1033-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1034,
      slug: "yusra-cotton-lawn-three-piece-suit",
      name: "Yusra — Cotton Lawn Three-Piece Suit",
      name_bn: "Yusra — Cotton Lawn Three-Piece Suit",
      category: "casual",
      price: 3950,
      salePrice: null,
      fabric: "Cotton Lawn three-piece with kameez, dupatta & trouser",
      description: "A breezy cotton lawn three-piece suit cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "YUSCO1034-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "YUSCO1034-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "YUSCO1034-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "YUSCO1034-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "YUSCO1034-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "YUSCO1034-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1035,
      slug: "zeba-lawn-two-piece-suit",
      name: "Zeba — Lawn Two-Piece Suit",
      name_bn: "Zeba — Lawn Two-Piece Suit",
      category: "festive",
      price: 6990,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "ZEBLA1035-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "ZEBLA1035-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "ZEBLA1035-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "ZEBLA1035-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "ZEBLA1035-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "ZEBLA1035-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1036,
      slug: "aroni-slub-cotton-kaftan",
      name: "Aroni — Slub Cotton Kaftan",
      name_bn: "Aroni — Slub Cotton Kaftan",
      category: "casual",
      price: 2850,
      salePrice: null,
      fabric: "Slub Cotton kaftan with relaxed drape",
      description: "A breezy slub cotton kaftan cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "AROSL1036-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "AROSL1036-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "AROSL1036-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "AROSL1036-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "AROSL1036-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "AROSL1036-XXL", stock: 2 }
      ],
      tags: ["casual", "slub cotton", "kaftan", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1037,
      slug: "bela-cotton-lawn-kurta-set",
      name: "Bela — Cotton Lawn Kurta Set",
      name_bn: "Bela — Cotton Lawn Kurta Set",
      category: "casual",
      price: 2800,
      salePrice: null,
      fabric: "Cotton Lawn kurta set with dupatta",
      description: "A breezy cotton lawn kurta set cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "BELCO1037-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "BELCO1037-S", stock: 5 },
        { size: "M", color: "Teal", sku: "BELCO1037-M", stock: 6 },
        { size: "L", color: "Teal", sku: "BELCO1037-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "BELCO1037-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "BELCO1037-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "kurta-set", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1038,
      slug: "champa-raw-silk-two-piece-suit",
      name: "Champa — Raw Silk Two-Piece Suit",
      name_bn: "Champa — Raw Silk Two-Piece Suit",
      category: "festive",
      price: 4850,
      salePrice: null,
      fabric: "Raw Silk two-piece with kameez & dupatta",
      description: "A festive raw silk two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "CHARA1038-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "CHARA1038-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "CHARA1038-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "CHARA1038-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "CHARA1038-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "CHARA1038-XXL", stock: 2 }
      ],
      tags: ["festive", "raw silk", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1039,
      slug: "laali-lawn-two-piece-suit",
      name: "Laali — Lawn Two-Piece Suit",
      name_bn: "Laali — Lawn Two-Piece Suit",
      category: "festive",
      price: 5350,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "LAALA1039-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "LAALA1039-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "LAALA1039-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "LAALA1039-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "LAALA1039-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "LAALA1039-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 1040,
      slug: "noor-lawn-two-piece-suit",
      name: "Noor — Lawn Two-Piece Suit",
      name_bn: "Noor — Lawn Two-Piece Suit",
      category: "festive",
      price: 4200,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "NOOLA1040-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "NOOLA1040-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "NOOLA1040-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "NOOLA1040-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "NOOLA1040-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "NOOLA1040-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1041,
      slug: "meher-chiffon-three-piece-suit",
      name: "Meher — Chiffon Three-Piece Suit",
      name_bn: "Meher — Chiffon Three-Piece Suit",
      category: "festive",
      price: 4500,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "MEHCH1041-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "MEHCH1041-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "MEHCH1041-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "MEHCH1041-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "MEHCH1041-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "MEHCH1041-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1042,
      slug: "gulnar-chiffon-three-piece-suit",
      name: "Gulnar — Chiffon Three-Piece Suit",
      name_bn: "Gulnar — Chiffon Three-Piece Suit",
      category: "festive",
      price: 5450,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "GULCH1042-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "GULCH1042-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "GULCH1042-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "GULCH1042-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "GULCH1042-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "GULCH1042-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1043,
      slug: "roshni-chiffon-three-piece-suit",
      name: "Roshni — Chiffon Three-Piece Suit",
      name_bn: "Roshni — Chiffon Three-Piece Suit",
      category: "festive",
      price: 5600,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "ROSCH1043-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "ROSCH1043-S", stock: 5 },
        { size: "M", color: "Teal", sku: "ROSCH1043-M", stock: 6 },
        { size: "L", color: "Teal", sku: "ROSCH1043-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "ROSCH1043-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "ROSCH1043-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1044,
      slug: "saba-chiffon-three-piece-suit",
      name: "Saba — Chiffon Three-Piece Suit",
      name_bn: "Saba — Chiffon Three-Piece Suit",
      category: "festive",
      price: 4250,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "SABCH1044-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "SABCH1044-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "SABCH1044-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "SABCH1044-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "SABCH1044-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "SABCH1044-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1045,
      slug: "anaya-chiffon-three-piece-suit",
      name: "Anaya — Chiffon Three-Piece Suit",
      name_bn: "Anaya — Chiffon Three-Piece Suit",
      category: "festive",
      price: 5500,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "ANACH1045-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "ANACH1045-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "ANACH1045-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "ANACH1045-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "ANACH1045-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "ANACH1045-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1046,
      slug: "mahira-chiffon-three-piece-suit-2",
      name: "Mahira — Chiffon Three-Piece Suit (2)",
      name_bn: "Mahira — Chiffon Three-Piece Suit (2)",
      category: "festive",
      price: 5990,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "MAHCH1046-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "MAHCH1046-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "MAHCH1046-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "MAHCH1046-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "MAHCH1046-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "MAHCH1046-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1047,
      slug: "zoya-chiffon-three-piece-suit-2",
      name: "Zoya — Chiffon Three-Piece Suit (2)",
      name_bn: "Zoya — Chiffon Three-Piece Suit (2)",
      category: "festive",
      price: 5990,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "ZOYCH1047-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "ZOYCH1047-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "ZOYCH1047-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "ZOYCH1047-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "ZOYCH1047-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "ZOYCH1047-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1048,
      slug: "inaya-chiffon-three-piece-suit-2",
      name: "Inaya — Chiffon Three-Piece Suit (2)",
      name_bn: "Inaya — Chiffon Three-Piece Suit (2)",
      category: "festive",
      price: 5990,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "INACH1048-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "INACH1048-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "INACH1048-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "INACH1048-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "INACH1048-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "INACH1048-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1049,
      slug: "rida-chiffon-three-piece-suit",
      name: "Rida — Chiffon Three-Piece Suit",
      name_bn: "Rida — Chiffon Three-Piece Suit",
      category: "festive",
      price: 5990,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "RIDCH1049-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "RIDCH1049-S", stock: 5 },
        { size: "M", color: "Teal", sku: "RIDCH1049-M", stock: 6 },
        { size: "L", color: "Teal", sku: "RIDCH1049-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "RIDCH1049-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "RIDCH1049-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1050,
      slug: "alia-chiffon-three-piece-suit",
      name: "Alia — Chiffon Three-Piece Suit",
      name_bn: "Alia — Chiffon Three-Piece Suit",
      category: "festive",
      price: 5990,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "ALICH1050-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "ALICH1050-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "ALICH1050-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "ALICH1050-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "ALICH1050-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "ALICH1050-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1051,
      slug: "sana-chiffon-three-piece-suit",
      name: "Sana — Chiffon Three-Piece Suit",
      name_bn: "Sana — Chiffon Three-Piece Suit",
      category: "festive",
      price: 5990,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "SANCH1051-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "SANCH1051-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "SANCH1051-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "SANCH1051-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "SANCH1051-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "SANCH1051-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1052,
      slug: "hoor-chiffon-three-piece-suit",
      name: "Hoor — Chiffon Three-Piece Suit",
      name_bn: "Hoor — Chiffon Three-Piece Suit",
      category: "festive",
      price: 5990,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "HOOCH1052-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "HOOCH1052-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "HOOCH1052-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "HOOCH1052-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "HOOCH1052-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "HOOCH1052-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 1053,
      slug: "aroosh-chiffon-three-piece-suit-2",
      name: "Aroosh — Chiffon Three-Piece Suit (2)",
      name_bn: "Aroosh — Chiffon Three-Piece Suit (2)",
      category: "festive",
      price: 5900,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "AROCH1053-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "AROCH1053-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "AROCH1053-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "AROCH1053-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "AROCH1053-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "AROCH1053-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1054,
      slug: "zunaira-raw-silk-three-piece-suit",
      name: "Zunaira — Raw Silk Three-Piece Suit",
      name_bn: "Zunaira — Raw Silk Three-Piece Suit",
      category: "luxury",
      price: 10950,
      salePrice: null,
      fabric: "Raw Silk three-piece with kameez, dupatta & trouser",
      description: "A statement raw silk three-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "ZUNRA1054-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "ZUNRA1054-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "ZUNRA1054-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "ZUNRA1054-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "ZUNRA1054-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "ZUNRA1054-XXL", stock: 2 }
      ],
      tags: ["luxury", "raw silk", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1055,
      slug: "kiran-chiffon-three-piece-suit",
      name: "Kiran — Chiffon Three-Piece Suit",
      name_bn: "Kiran — Chiffon Three-Piece Suit",
      category: "festive",
      price: 6950,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "KIRCH1055-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "KIRCH1055-S", stock: 5 },
        { size: "M", color: "Teal", sku: "KIRCH1055-M", stock: 6 },
        { size: "L", color: "Teal", sku: "KIRCH1055-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "KIRCH1055-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "KIRCH1055-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1056,
      slug: "reshmi-raw-silk-three-piece-suit",
      name: "Reshmi — Raw Silk Three-Piece Suit",
      name_bn: "Reshmi — Raw Silk Three-Piece Suit",
      category: "luxury",
      price: 10500,
      salePrice: null,
      fabric: "Raw Silk three-piece with kameez, dupatta & trouser",
      description: "A statement raw silk three-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "RESRA1056-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "RESRA1056-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "RESRA1056-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "RESRA1056-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "RESRA1056-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "RESRA1056-XXL", stock: 2 }
      ],
      tags: ["luxury", "raw silk", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1057,
      slug: "namira-chiffon-three-piece-suit",
      name: "Namira — Chiffon Three-Piece Suit",
      name_bn: "Namira — Chiffon Three-Piece Suit",
      category: "festive",
      price: 6990,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "NAMCH1057-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "NAMCH1057-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "NAMCH1057-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "NAMCH1057-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "NAMCH1057-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "NAMCH1057-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1058,
      slug: "aiza-raw-silk-three-piece-suit",
      name: "Aiza — Raw Silk Three-Piece Suit",
      name_bn: "Aiza — Raw Silk Three-Piece Suit",
      category: "luxury",
      price: 7650,
      salePrice: null,
      fabric: "Raw Silk three-piece with kameez, dupatta & trouser",
      description: "A statement raw silk three-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "AIZRA1058-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "AIZRA1058-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "AIZRA1058-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "AIZRA1058-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "AIZRA1058-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "AIZRA1058-XXL", stock: 2 }
      ],
      tags: ["luxury", "raw silk", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1059,
      slug: "bushra-raw-silk-three-piece-suit",
      name: "Bushra — Raw Silk Three-Piece Suit",
      name_bn: "Bushra — Raw Silk Three-Piece Suit",
      category: "luxury",
      price: 11500,
      salePrice: null,
      fabric: "Raw Silk three-piece with kameez, dupatta & trouser",
      description: "A statement raw silk three-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "BUSRA1059-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "BUSRA1059-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "BUSRA1059-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "BUSRA1059-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "BUSRA1059-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "BUSRA1059-XXL", stock: 2 }
      ],
      tags: ["luxury", "raw silk", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1060,
      slug: "falak-chiffon-three-piece-suit",
      name: "Falak — Chiffon Three-Piece Suit",
      name_bn: "Falak — Chiffon Three-Piece Suit",
      category: "festive",
      price: 6250,
      salePrice: null,
      fabric: "Chiffon three-piece with kameez, dupatta & trouser",
      description: "A festive chiffon three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "FALCH1060-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "FALCH1060-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "FALCH1060-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "FALCH1060-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "FALCH1060-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "FALCH1060-XXL", stock: 2 }
      ],
      tags: ["festive", "chiffon", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1061,
      slug: "ghazal-raw-silk-three-piece-suit",
      name: "Ghazal — Raw Silk Three-Piece Suit",
      name_bn: "Ghazal — Raw Silk Three-Piece Suit",
      category: "luxury",
      price: 7500,
      salePrice: null,
      fabric: "Raw Silk three-piece with kameez, dupatta & trouser",
      description: "A statement raw silk three-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "GHARA1061-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "GHARA1061-S", stock: 5 },
        { size: "M", color: "Teal", sku: "GHARA1061-M", stock: 6 },
        { size: "L", color: "Teal", sku: "GHARA1061-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "GHARA1061-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "GHARA1061-XXL", stock: 2 }
      ],
      tags: ["luxury", "raw silk", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1062,
      slug: "hina-raw-silk-three-piece-suit",
      name: "Hina — Raw Silk Three-Piece Suit",
      name_bn: "Hina — Raw Silk Three-Piece Suit",
      category: "luxury",
      price: 10400,
      salePrice: null,
      fabric: "Raw Silk three-piece with kameez, dupatta & trouser",
      description: "A statement raw silk three-piece suit with refined detailing and a luxurious drape, crafted for weddings and grand occasions. Shown in a striking blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "HINRA1062-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "HINRA1062-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "HINRA1062-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "HINRA1062-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "HINRA1062-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "HINRA1062-XXL", stock: 2 }
      ],
      tags: ["luxury", "raw silk", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1063,
      slug: "iqra-lawn-co-ord-set",
      name: "Iqra — Lawn Co-ord Set",
      name_bn: "Iqra — Lawn Co-ord Set",
      category: "casual",
      price: 3700,
      salePrice: null,
      fabric: "Lawn co-ord set with coordinated dupatta",
      description: "A breezy lawn co-ord set cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "IQRLA1063-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "IQRLA1063-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "IQRLA1063-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "IQRLA1063-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "IQRLA1063-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "IQRLA1063-XXL", stock: 2 }
      ],
      tags: ["casual", "lawn", "co-ord-set", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1064,
      slug: "jannat-lawn-three-piece-suit",
      name: "Jannat — Lawn Three-Piece Suit",
      name_bn: "Jannat — Lawn Three-Piece Suit",
      category: "festive",
      price: 5150,
      salePrice: null,
      fabric: "Lawn three-piece with kameez, dupatta & trouser",
      description: "A festive lawn three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "JANLA1064-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "JANLA1064-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "JANLA1064-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "JANLA1064-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "JANLA1064-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "JANLA1064-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1065,
      slug: "komal-lawn-kameez",
      name: "Komal — Lawn Kameez",
      name_bn: "Komal — Lawn Kameez",
      category: "casual",
      price: 2950,
      salePrice: null,
      fabric: "Lawn embroidered kameez with dupatta",
      description: "A breezy lawn kameez cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "KOMLA1065-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "KOMLA1065-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "KOMLA1065-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "KOMLA1065-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "KOMLA1065-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "KOMLA1065-XXL", stock: 2 }
      ],
      tags: ["casual", "lawn", "kameez", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: true
    },
    {
      id: 1066,
      slug: "lubna-satin-two-piece-suit",
      name: "Lubna — Satin Two-Piece Suit",
      name_bn: "Lubna — Satin Two-Piece Suit",
      category: "festive",
      price: 5150,
      salePrice: null,
      fabric: "Satin two-piece with kameez & dupatta",
      description: "A festive satin two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "LUBSA1066-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "LUBSA1066-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "LUBSA1066-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "LUBSA1066-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "LUBSA1066-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "LUBSA1066-XXL", stock: 2 }
      ],
      tags: ["festive", "satin", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1067,
      slug: "mahi-lawn-two-piece-suit",
      name: "Mahi — Lawn Two-Piece Suit",
      name_bn: "Mahi — Lawn Two-Piece Suit",
      category: "festive",
      price: 4250,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "MAHLA1067-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "MAHLA1067-S", stock: 5 },
        { size: "M", color: "Teal", sku: "MAHLA1067-M", stock: 6 },
        { size: "L", color: "Teal", sku: "MAHLA1067-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "MAHLA1067-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "MAHLA1067-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1068,
      slug: "nadia-dobby-three-piece-suit",
      name: "Nadia — Dobby Three-Piece Suit",
      name_bn: "Nadia — Dobby Three-Piece Suit",
      category: "festive",
      price: 5350,
      salePrice: null,
      fabric: "Dobby three-piece with kameez, dupatta & trouser",
      description: "A festive dobby three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "NADDO1068-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "NADDO1068-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "NADDO1068-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "NADDO1068-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "NADDO1068-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "NADDO1068-XXL", stock: 2 }
      ],
      tags: ["festive", "dobby", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1069,
      slug: "parisa-lawn-two-piece-suit",
      name: "Parisa — Lawn Two-Piece Suit",
      name_bn: "Parisa — Lawn Two-Piece Suit",
      category: "casual",
      price: 3700,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A breezy lawn two-piece suit cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful ivory white tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-02-a.jpg",
        "images/products/festive-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ivory White", sku: "PARLA1069-XS", stock: 3 },
        { size: "S", color: "Ivory White", sku: "PARLA1069-S", stock: 5 },
        { size: "M", color: "Ivory White", sku: "PARLA1069-M", stock: 6 },
        { size: "L", color: "Ivory White", sku: "PARLA1069-L", stock: 4 },
        { size: "XL", color: "Ivory White", sku: "PARLA1069-XL", stock: 3 },
        { size: "XXL", color: "Ivory White", sku: "PARLA1069-XXL", stock: 2 }
      ],
      tags: ["casual", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1070,
      slug: "rimsha-lawn-three-piece-suit",
      name: "Rimsha — Lawn Three-Piece Suit",
      name_bn: "Rimsha — Lawn Three-Piece Suit",
      category: "festive",
      price: 5150,
      salePrice: null,
      fabric: "Lawn three-piece with kameez, dupatta & trouser",
      description: "A festive lawn three-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant deep red tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-01-a.jpg",
        "images/products/luxury-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Deep Red", sku: "RIMLA1070-XS", stock: 3 },
        { size: "S", color: "Deep Red", sku: "RIMLA1070-S", stock: 5 },
        { size: "M", color: "Deep Red", sku: "RIMLA1070-M", stock: 6 },
        { size: "L", color: "Deep Red", sku: "RIMLA1070-L", stock: 4 },
        { size: "XL", color: "Deep Red", sku: "RIMLA1070-XL", stock: 3 },
        { size: "XXL", color: "Deep Red", sku: "RIMLA1070-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1071,
      slug: "sitara-lawn-two-piece-suit",
      name: "Sitara — Lawn Two-Piece Suit",
      name_bn: "Sitara — Lawn Two-Piece Suit",
      category: "festive",
      price: 4150,
      salePrice: null,
      fabric: "Lawn two-piece with kameez & dupatta",
      description: "A festive lawn two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant ice blue tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/luxury-02-a.jpg",
        "images/products/luxury-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Ice Blue", sku: "SITLA1071-XS", stock: 3 },
        { size: "S", color: "Ice Blue", sku: "SITLA1071-S", stock: 5 },
        { size: "M", color: "Ice Blue", sku: "SITLA1071-M", stock: 6 },
        { size: "L", color: "Ice Blue", sku: "SITLA1071-L", stock: 4 },
        { size: "XL", color: "Ice Blue", sku: "SITLA1071-XL", stock: 3 },
        { size: "XXL", color: "Ice Blue", sku: "SITLA1071-XXL", stock: 2 }
      ],
      tags: ["festive", "lawn", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1072,
      slug: "tania-raw-silk-co-ord-set",
      name: "Tania — Raw Silk Co-ord Set",
      name_bn: "Tania — Raw Silk Co-ord Set",
      category: "festive",
      price: 5300,
      salePrice: null,
      fabric: "Raw Silk co-ord set with coordinated dupatta",
      description: "A festive raw silk co-ord set rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant soft beige tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-01-a.jpg",
        "images/products/casual-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Soft Beige", sku: "TANRA1072-XS", stock: 3 },
        { size: "S", color: "Soft Beige", sku: "TANRA1072-S", stock: 5 },
        { size: "M", color: "Soft Beige", sku: "TANRA1072-M", stock: 6 },
        { size: "L", color: "Soft Beige", sku: "TANRA1072-L", stock: 4 },
        { size: "XL", color: "Soft Beige", sku: "TANRA1072-XL", stock: 3 },
        { size: "XXL", color: "Soft Beige", sku: "TANRA1072-XXL", stock: 2 }
      ],
      tags: ["festive", "raw silk", "co-ord-set", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1073,
      slug: "warda-cambric-two-piece-suit",
      name: "Warda — Cambric Two-Piece Suit",
      name_bn: "Warda — Cambric Two-Piece Suit",
      category: "festive",
      price: 4650,
      salePrice: null,
      fabric: "Cambric two-piece with kameez & dupatta",
      description: "A festive cambric two-piece suit rich with intricate embroidery, made to stand out at celebrations and family gatherings. Presented in an elegant teal tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/casual-02-a.jpg",
        "images/products/casual-02-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Teal", sku: "WARCA1073-XS", stock: 3 },
        { size: "S", color: "Teal", sku: "WARCA1073-S", stock: 5 },
        { size: "M", color: "Teal", sku: "WARCA1073-M", stock: 6 },
        { size: "L", color: "Teal", sku: "WARCA1073-L", stock: 4 },
        { size: "XL", color: "Teal", sku: "WARCA1073-XL", stock: 3 },
        { size: "XXL", color: "Teal", sku: "WARCA1073-XXL", stock: 2 }
      ],
      tags: ["festive", "cambric", "two-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    },
    {
      id: 1074,
      slug: "yusra-cotton-lawn-three-piece-suit-2",
      name: "Yusra — Cotton Lawn Three-Piece Suit (2)",
      name_bn: "Yusra — Cotton Lawn Three-Piece Suit (2)",
      category: "casual",
      price: 3250,
      salePrice: null,
      fabric: "Cotton Lawn three-piece with kameez, dupatta & trouser",
      description: "A breezy cotton lawn three-piece suit cut for everyday elegance — light to wear and easy to carry from day into evening. Finished in a graceful blush pink tone.",
      care: "Hand wash separately in cold water with mild detergent. Do not wring. Shade dry. Warm iron on reverse.",
      images: [
        "images/products/festive-01-a.jpg",
        "images/products/festive-01-b.jpg"
      ],
      variants: [
        { size: "XS", color: "Blush Pink", sku: "YUSCO1074-XS", stock: 3 },
        { size: "S", color: "Blush Pink", sku: "YUSCO1074-S", stock: 5 },
        { size: "M", color: "Blush Pink", sku: "YUSCO1074-M", stock: 6 },
        { size: "L", color: "Blush Pink", sku: "YUSCO1074-L", stock: 4 },
        { size: "XL", color: "Blush Pink", sku: "YUSCO1074-XL", stock: 3 },
        { size: "XXL", color: "Blush Pink", sku: "YUSCO1074-XXL", stock: 2 }
      ],
      tags: ["casual", "cotton lawn", "three-piece-suit", "custom size available", "pakistani suit"],
      isNew: false,
      isFeatured: false
    }
  ],

  // Real reviews store. Zero fabricated reviews.
  // Reviews section renders nothing when empty as per project rules.
  reviews: []
};
