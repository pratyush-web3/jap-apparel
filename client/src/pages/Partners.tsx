import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Globe, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import ProductCollection from "@/components/ProductCollection";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  results: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "case1",
    title: "グローバルファッションブランド向けOEM生産",
    client: "欧州大手ファッションブランド",
    industry: "ファッション",
    description: "高品質なカジュアルウェアの大量生産。年間500万枚の製造を実現",
    results: [
      "品質向上: 不良率0.5%以下を達成",
      "納期改善: 平均納期を30%短縮",
      "コスト削減: 製造コストを15%削減"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/finished-products-7EJxuEeHgiyMLoPdzQoVv2.webp"
  },
  {
    id: "case2",
    title: "スポーツウェア向けODM開発",
    client: "アジア大手スポーツブランド",
    industry: "スポーツウェア",
    description: "高機能素材を使用したスポーツウェアの開発と製造。新素材開発から量産化まで対応",
    results: [
      "新素材開発: 3ヶ月で商品化",
      "品質認証: OEKO-TEX取得",
      "市場評価: 顧客満足度95%以上"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/cutting-sewing-HUeYGpfKgPHLrz5csE2QtQ.webp"
  },
  {
    id: "case3",
    title: "企業制服製造",
    client: "日本大手企業グループ",
    industry: "企業制服",
    description: "複数企業向けの統一制服製造。カスタマイズと品質管理を両立",
    results: [
      "納期厳守: 100%達成",
      "品質管理: 返品率0%",
      "顧客満足度: 98%"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/team-collaboration-SL3Cefj3frzTqcXUjVDR3m.webp"
  },
  {
    id: "case4",
    title: "サステナブル素材の開発",
    client: "環境配慮ブランド",
    industry: "サステナブルファッション",
    description: "オーガニックコットンとリサイクル素材を組み合わせた新素材開発",
    results: [
      "素材開発: 6ヶ月で完成",
      "環境認証: GOTS認証取得",
      "販売実績: 初年度100万枚販売"
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/sustainable-production-WdoMK7xuQ3t3Sss9PU4j93.webp"
  }
];

const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/apparel-collection-1-f4LvhBcHHedRCNtuDP9Qve.webp",
    alt: "Apparel collection",
    title: "プレミアムアパレルコレクション"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/pattern-design-E69gtfo27c8TS6MXfdtjuq.webp",
    alt: "Pattern design",
    title: "デザインスタジオ"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/cutting-sewing-HUeYGpfKgPHLrz5csE2QtQ.webp",
    alt: "Cutting and sewing",
    title: "裁断・縫製工程"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/finished-products-7EJxuEeHgiyMLoPdzQoVv2.webp",
    alt: "Finished products",
    title: "完成製品"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/fabric-testing-S2tWTk9ze2h55jgvrU55o5.webp",
    alt: "Fabric testing",
    title: "品質検査"
  }
];

const products = [
  {
    id: "prod1",
    name: "カジュアルウェア",
    category: "ファッション",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/apparel-collection-1-f4LvhBcHHedRCNtuDP9Qve.webp",
    description: "快適性と耐久性を兼ね備えた、日常使いに最適なカジュアルウェア"
  },
  {
    id: "prod2",
    name: "スポーツウェア",
    category: "スポーツ",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/cutting-sewing-HUeYGpfKgPHLrz5csE2QtQ.webp",
    description: "高機能素材を使用した、パフォーマンス重視のスポーツウェア"
  },
  {
    id: "prod3",
    name: "企業制服",
    category: "制服",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/finished-products-7EJxuEeHgiyMLoPdzQoVv2.webp",
    description: "プロフェッショナルな印象を与える、カスタマイズ対応の企業制服"
  },
  {
    id: "prod4",
    name: "サステナブルウェア",
    category: "環境配慮",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/sustainable-production-WdoMK7xuQ3t3Sss9PU4j93.webp",
    description: "環境に配慮した素材を使用した、サステナブルなウェア"
  },
  {
    id: "prod5",
    name: "プレミアムコレクション",
    category: "ラグジュアリー",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/pattern-design-E69gtfo27c8TS6MXfdtjuq.webp",
    description: "最高級の素材と職人技による、ラグジュアリーなプレミアムコレクション"
  },
  {
    id: "prod6",
    name: "カスタムメイド",
    category: "オーダーメイド",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/fabric-testing-S2tWTk9ze2h55jgvrU55o5.webp",
    description: "お客様のニーズに完全対応した、カスタムメイドサービス"
  }
];

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      casesRef.current.forEach((caseStudy, index) => {
        gsap.fromTo(
          caseStudy,
          {
            opacity: 0,
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: caseStudy,
              start: "top 80%",
              end: "top 20%",
              scrub: false
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/apparel-collection-1-f4LvhBcHHedRCNtuDP9Qve.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            パートナー企業
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            グローバルブランドとの信頼関係に基づいた、成功事例の数々
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <ImageGallery images={galleryImages} title="製造工程ギャラリー" />
        </div>
      </section>

      {/* Product Collection */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <ProductCollection products={products} />
        </div>
      </section>

      {/* Case Studies */}
      <section ref={containerRef} className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            成功事例
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                ref={(el) => {
                  if (el) casesRef.current[index] = el;
                }}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Case Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Case Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <p className="text-sm font-semibold text-primary uppercase">
                      {caseStudy.industry}
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {caseStudy.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    <strong>クライアント:</strong> {caseStudy.client}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  <div className="space-y-2 pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-foreground">
                      成果:
                    </p>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            パートナーシップの利点
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                グローバルネットワーク
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                45カ国以上のクライアントとの実績。世界規模での製造・配送体制
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <Award className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                品質保証
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                国際基準に基づいた厳格な品質管理。不良率0.5%以下の実績
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <Building2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                長期的パートナーシップ
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                信頼関係に基づいた長期的な協業。平均取引期間10年以上
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            次のパートナーになりませんか？
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            グローバルブランドの成功を支援する、信頼できるパートナーをお探しでしたら、お気軽にお問い合わせください
          </p>
          <button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            お問い合わせ
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
