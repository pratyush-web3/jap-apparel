import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, Zap, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
}

const services: Service[] = [
  {
    id: "oem",
    title: "OEM生産",
    description: "クライアントの仕様に基づいた受託製造サービス",
    features: [
      "カスタム仕様対応",
      "大量生産対応",
      "品質保証",
      "納期厳守"
    ],
    icon: <Package className="w-8 h-8" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/cutting-sewing-HUeYGpfKgPHLrz5csE2QtQ.webp"
  },
  {
    id: "odm",
    title: "ODM開発",
    description: "デザインから製造まで、完全なサポート",
    features: [
      "デザイン提案",
      "素材選定",
      "試作製作",
      "量産化支援"
    ],
    icon: <Zap className="w-8 h-8" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/pattern-design-E69gtfo27c8TS6MXfdtjuq.webp"
  },
  {
    id: "custom",
    title: "カスタム製造",
    description: "特殊な要件に対応した製造サービス",
    features: [
      "特殊素材対応",
      "小ロット対応",
      "迅速対応",
      "柔軟な仕様変更"
    ],
    icon: <Users className="w-8 h-8" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/quality-inspection-HBdc2uGwvp7ytrjEmpStSd.webp"
  },
  {
    id: "corporate",
    title: "企業制服",
    description: "企業向けの統一制服製造",
    features: [
      "ブランド統一",
      "耐久性重視",
      "快適性確保",
      "メンテナンス対応"
    ],
    icon: <Award className="w-8 h-8" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/finished-products-7EJxuEeHgiyMLoPdzQoVv2.webp"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      servicesRef.current.forEach((service, index) => {
        gsap.fromTo(
          service,
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
              trigger: service,
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
            製品・サービス
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            グローバルブランドのニーズに応える、多様なサービスラインアップ
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={containerRef} className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) servicesRef.current[index] = el;
                }}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">
                      主な特徴:
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
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

      {/* Production Capabilities */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              製造能力
            </h2>
            <p className="text-lg text-muted-foreground">
              最先端の設備と熟練職人による、高品質な製造体制
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/sustainable-production-WdoMK7xuQ3t3Sss9PU4j93.webp"
                alt="Manufacturing capabilities"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  年間生産能力
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">
                  5000万枚
                </p>
                <p className="text-muted-foreground">
                  高品質なアパレル製品の安定供給
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  対応素材
                </h3>
                <p className="text-3xl font-bold text-secondary mb-2">
                  6種類以上
                </p>
                <p className="text-muted-foreground">
                  天然素材からサステナブル素材まで幅広く対応
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  納期
                </h3>
                <p className="text-3xl font-bold text-accent mb-2">
                  最短4週間
                </p>
                <p className="text-muted-foreground">
                  緊急対応にも対応可能
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                品質保証体制
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                国際基準に基づいた厳格な品質管理プロセスにより、最高水準の製品品質を実現しています。
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">
                    <strong>入荷検査:</strong> 全素材の品質確認
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">
                    <strong>工程管理:</strong> 各工程での厳密な監視
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">
                    <strong>最終検査:</strong> 出荷前の完全検査
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">
                    <strong>試験分析:</strong> 先端技術による品質検証
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/fabric-testing-S2tWTk9ze2h55jgvrU55o5.webp"
                alt="Quality assurance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            あなたのプロジェクトに最適なサービスをお探しですか？
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            専門チームが、カスタマイズされたソリューションをご提案します
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
