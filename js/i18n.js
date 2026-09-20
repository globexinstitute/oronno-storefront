/**
 * Oronno Fashion — Internationalization Module (EN / বাংলা)
 * Manages dual-language state, dictionary translations, and UI re-renders.
 */

const ORONNO_I18N = {
  currentLang: localStorage.getItem("oronno_lang") || "en",

  translations: {
    en: {
      "hero.subhead": "Dhaka Boutique Collection",
      "hero.desc": "From Casual to Luxury, All in One Place. Carefully selected Pakistani and ethnic dresses tailored for timeless elegance.",
      // Header & Navigation
      "nav.new_arrivals": "New Arrivals",
      "nav.casual": "Casual",
      "nav.festive": "Festive",
      "nav.luxury": "Luxury",
      "nav.custom_size": "Custom Size",
      "nav.contact": "Contact",
      "nav.shop": "Shop Collection",
      "nav.about": "About Oronno",
      "nav.wishlist": "Wishlist",
      "nav.account": "Account",
      "nav.cart": "Cart",
      
      // Top announcement
      "announcement.text": "Carefully Selected & Quality Assured | Custom Sizing Available | All Bangladesh Delivery",
      
      // Common UI & Buttons
      "btn.shop_now": "Shop Collection",
      "btn.order_custom": "Order Custom Size",
      "btn.add_to_cart": "Add to Cart",
      "btn.buy_now": "Buy Now",
      "btn.quick_view": "Quick View",
      "btn.view_details": "View Details",
      "btn.close": "Close",
      "btn.checkout": "Proceed to Checkout",
      "btn.view_cart": "View Full Cart",
      "btn.continue_shopping": "Continue Shopping",
      "btn.apply": "Apply",

      // Mini Cart
      "cart.title": "Your Shopping Bag",
      "cart.empty": "Your shopping bag is currently empty.",
      "cart.subtotal": "Subtotal",
      "cart.vat_note": "Taxes and shipping calculated at checkout",

      // Search
      "search.placeholder": "Search Pakistani suits, organza, lawn, velvet...",
      "search.heading": "Search Our Collection",

      // Brand Pillars
      "pillar.carefully_selected": "Carefully Selected",
      "pillar.carefully_selected_desc": "Every fabric cut and embroidery pattern is hand-inspected for flawlessness.",
      "pillar.quality_assured": "Quality Assured",
      "pillar.quality_assured_desc": "Premium dyed silks, organic lawns, and genuine tilla threads.",
      "pillar.custom_sizes": "Custom Sizes Available",
      "pillar.custom_sizes_desc": "Tailored to your exact measurements by skilled boutique artisans.",
      "pillar.easy_ordering": "Easy Inbox Ordering",
      "pillar.easy_ordering_desc": "Order directly online or message our team on Facebook and WhatsApp.",

      // Footer
      "footer.tagline": "From Casual to Luxury, All in One Place.",
      "footer.about_text": "Dhaka-based women's boutique offering curated Pakistani and ethnic wear. Crafted with care, grace, and timeless elegance.",
      "footer.quick_links": "Collections",
      "footer.customer_care": "Customer Care",
      "footer.contact_title": "Store & Studio",
      "footer.shipping_policy": "Shipping & Returns",
      "footer.faq": "Frequently Asked Questions",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.copyright": "© 2026 Oronno Fashion. All rights reserved."
    },

    bn: {
      "hero.subhead": "ঢাকা বুটিক কালেকশন",
      "hero.desc": "ক্যাজুয়াল থেকে লাক্সারি, সব একসাথে। যত্ন করে বাছাই করা পাকিস্তানি ও এথনিক পোশাক, চিরন্তন সৌন্দর্যের জন্য।",
      // Header & Navigation
      "nav.new_arrivals": "নতুন আগমন",
      "nav.casual": "ক্যাজুয়াল",
      "nav.festive": "ফেস্টিভ",
      "nav.luxury": "লাক্সারি",
      "nav.custom_size": "কাস্টম সাইজ",
      "nav.contact": "যোগাযোগ",
      "nav.shop": "কালেকশন দেখুন",
      "nav.about": "আমাদের কথা",
      "nav.wishlist": "উইশলিস্ট",
      "nav.account": "অ্যাকাউন্ট",
      "nav.cart": "ব্যাগ",

      // Top announcement
      "announcement.text": "যাচাইকৃত মান ও বিশেষ যত্ন | কাস্টম সাইজ সুবিধা | সারা বাংলাদেশে হোম ডেলিভারি",

      // Common UI & Buttons
      "btn.shop_now": "কালেকশন দেখুন",
      "btn.order_custom": "কাস্টম সাইজ অর্ডার",
      "btn.add_to_cart": "ব্যাগে যোগ করুন",
      "btn.buy_now": "এখনই কিনুন",
      "btn.quick_view": "দ্রুত দেখুন",
      "btn.view_details": "বিস্তারিত দেখুন",
      "btn.close": "বন্ধ করুন",
      "btn.checkout": "চেকআউট করুন",
      "btn.view_cart": "ব্যাগ দেখুন",
      "btn.continue_shopping": "কেনাকাটা চালিয়ে যান",
      "btn.apply": "প্রয়োগ করুন",

      // Mini Cart
      "cart.title": "আপনার শপিং ব্যাগ",
      "cart.empty": "আপনার শপিং ব্যাগ এই মুহূর্তে খালি আছে।",
      "cart.subtotal": "মোট মূল্য",
      "cart.vat_note": "ডেলিভারি চার্জ চেকআউটে নির্ধারণ করা হবে",

      // Search
      "search.placeholder": "লরে, শিফন, কাতান বা ড্রেস অনুসন্ধান করুন...",
      "search.heading": "পোশাক অনুসন্ধান করুন",

      // Brand Pillars
      "pillar.carefully_selected": "যাচাইকৃত মান",
      "pillar.carefully_selected_desc": "প্রতিটি পোশাকের ফেব্রিক এবং নকশা যত্নসহকারে বাছাই করা হয়।",
      "pillar.quality_assured": "নিখুঁত ফিনিশিং",
      "pillar.quality_assured_desc": "উচ্চমানের র সিল্ক, ফাইন লন এবং আসল জরি সুতার কাজ।",
      "pillar.custom_sizes": "কাস্টম সাইজ সুবিধা",
      "pillar.custom_sizes_desc": "আপনার নিখুঁত মাপে আমাদের অভিজ্ঞ কারিগর দ্বারা তৈরি করে নেওয়ার সুবিধা।",
      "pillar.easy_ordering": "সহজ অর্ডার ব্যবস্থা",
      "pillar.easy_ordering_desc": "ওয়েবসাইট থেকে সরাসরি অথবা ফেসবুক ও হোয়াটসঅ্যাপ ইনবক্সে সহজে অর্ডার করুন।",

      // Footer
      "footer.tagline": "ক্যাজুয়াল থেকে লাক্সারি, সব একসাথে।",
      "footer.about_text": "ঢাকার ঐতিহ্যবাহী বুটিক ব্র্যান্ড—প্রিমিয়াম পাকিস্তানি ও এথনিক পোশাকের নির্ভরযোগ্য ঠিকানা।",
      "footer.quick_links": "কালেকশন",
      "footer.customer_care": "সহায়তা ও সেবা",
      "footer.contact_title": "স্টুডিও ও ঠিকানা",
      "footer.shipping_policy": "ডেলিভারি ও রিটার্ন",
      "footer.faq": "সাধারণ জিজ্ঞাসা (FAQ)",
      "footer.privacy": "প্রাইভেসি পলিসি",
      "footer.terms": "শর্তাবলী",
      "footer.copyright": "© ২০২৬ অরণ্য ফ্যাশন। সর্বস্বত্ব সংরক্ষিত।"
    }
  },

  t(key) {
    const lang = this.currentLang;
    if (this.translations[lang] && this.translations[lang][key]) {
      return this.translations[lang][key];
    }
    // Fallback to English
    return (this.translations.en && this.translations.en[key]) || key;
  },

  setLang(lang) {
    if (lang !== "en" && lang !== "bn") return;
    this.currentLang = lang;
    localStorage.setItem("oronno_lang", lang);
    document.documentElement.lang = lang;
    if (lang === "bn") {
      document.body.classList.add("bn");
    } else {
      document.body.classList.remove("bn");
    }
    this.updateDom();
    window.dispatchEvent(new CustomEvent("oronno:langchange", { detail: { lang } }));
  },

  getLang() {
    return this.currentLang;
  },

  updateDom() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = this.t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", translation);
      } else {
        el.textContent = translation;
      }
    });

    // Update active state on language switcher buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === this.currentLang);
    });
  }
};
