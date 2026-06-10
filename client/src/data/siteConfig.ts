/**
 * Site-wide configuration for Japanese Apparel Industrial Website
 */

export const siteConfig = {
  companyName: "日本テキスタイル工業",
  tagline: "日本の精密技術で、世界のアパレル産業をリード",

  contact: {
    phone: "+81-3-1234-5678",
    email: "info@nihon-textile.co.jp",
    address: "〒100-0001 東京都千代田区千代田1-1-1"
  },

  businessHours: {
    weekdays: "平日: 9:00 〜 18:00",
    saturday: "土曜: 9:00 〜 15:00",
    sunday: "日曜・祝日: 休業"
  },

  navigation: [
    { href: "/", label: "ホーム" },
    { href: "/company", label: "会社概要" },
    { href: "/services", label: "サービス" },
    { href: "/materials", label: "素材・品質" },
    { href: "/manufacturing", label: "製造工程" },
    { href: "/sustainability", label: "サステナビリティ" },
    { href: "/partners", label: "パートナー" },
    { href: "/careers", label: "採用情報" }
  ],

  footerLinks: {
    company: [
      { href: "/company", label: "会社概要" },
      { href: "/careers", label: "採用情報" }
    ],
    services: [
      { href: "/services", label: "サービス" },
      { href: "/materials", label: "素材・品質" },
      { href: "/manufacturing", label: "製造工程" }
    ],
    sustainability: [
      { href: "/sustainability", label: "サステナビリティ" },
      { href: "/partners", label: "パートナー" }
    ],
    legal: [
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" }
    ]
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/",
    youtube: "",
    instagram: "",
    x: ""
  }
};
