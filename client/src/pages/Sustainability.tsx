import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Droplet, Zap, Recycle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryCertifications from "@/components/IndustryCertifications";

gsap.registerPlugin(ScrollTrigger);

interface Initiative {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics: string[];
  image: string;
}

const initiatives: Initiative[] = [
  {
    id: "carbon",
    title: "カーボンニュートラル",
    description: "2023年にカーボンニュートラルを達成。再生可能エネルギーの導入と排出量の相殺を実現",
    icon: <Zap className="w-8 h-8" />,
    metrics: ["CO2削減: 60%", "再生可能エネルギー: 80%", "相殺: 100%"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/sustainable-production-WdoMK7xuQ3t3Sss9PU4j93.webp"
  },
  {
    id: "water",
    title: "水の保全",
    description: "水の再利用システムを導入し、用水量を大幅に削減。クリーンな水を地域に返却",
    icon: <Droplet className="w-8 h-8" />,
    metrics: ["用水削減: 70%", "再利用率: 85%", "排水浄化: 100%"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/fabric-dyeing-eaz6WdJyZRcPsPaCUTbUvE.webp"
  },
  {
    id: "waste",
    title: "廃棄物削減",
    description: "製造工程での廃棄物を最小化。リサイクル可能な素材の利用を推進",
    icon: <Recycle className="w-8 h-8" />,
    metrics: ["廃棄物削減: 75%", "リサイクル率: 90%", "ゼロウェイスト達成"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/apparel-collection-1-f4LvhBcHHedRCNtuDP9Qve.webp"
  },
  {
    id: "materials",
    title: "サステナブル素材",
    description: "オーガニックコットン、リサイクル素材、バイオベース素材の開発と使用を拡大",
    icon: <Leaf className="w-8 h-8" />,
    metrics: ["サステナブル素材: 45%", "オーガニック: 30%", "リサイクル: 15%"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/finished-products-7EJxuEeHgiyMLoPdzQoVv2.webp"
  }
];

export default function Sustainability() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initiativesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      initiativesRef.current.forEach((initiative, index) => {
        gsap.fromTo(
          initiative,
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
              trigger: initiative,
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
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/sustainable-production-WdoMK7xuQ3t3Sss9PU4j93.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            サステナビリティ
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            環境配慮と社会責任を軸とした、持続可能な製造を実現
          </p>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section ref={containerRef} className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.id}
                ref={(el) => {
                  if (el) initiativesRef.current[index] = el;
                }}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Initiative Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Initiative Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{initiative.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {initiative.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {initiative.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                      主な成果:
                    </p>
                    <ul className="space-y-2">
                      {initiative.metrics.map((metric, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {metric}
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

      {/* Environmental Goals */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            2030年までの目標
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                環境目標
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">
                    CO2排出量を70%削減
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">
                    用水量を80%削減
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">
                    廃棄物をゼロに近づける
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">
                    再生可能エネルギー100%達成
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                社会目標
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">
                    従業員の福利厚生向上
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">
                    地域社会への貢献活動拡大
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">
                    労働環境の継続的改善
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">
                    ダイバーシティ&インクルージョン推進
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            国際認証
          </h2>
          <IndustryCertifications />
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            持続可能な未来への約束
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            私たちは、環境と社会への責任を果たしながら、次世代のための持続可能なアパレル産業を創造することをお約束します。
          </p>
          <button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            詳しく知る
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
