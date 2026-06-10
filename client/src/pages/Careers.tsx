import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Users, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "job1",
    title: "製造技術エンジニア",
    department: "製造技術部",
    location: "東京本社",
    type: "正社員",
    description: "最新の織機システムと自動化技術の開発・改善に携わるエンジニア"
  },
  {
    id: "job2",
    title: "品質管理スペシャリスト",
    department: "品質保証部",
    location: "東京本社",
    type: "正社員",
    description: "国際基準に基づいた品質管理体制の構築と改善を推進"
  },
  {
    id: "job3",
    title: "営業マネージャー",
    department: "営業部",
    location: "東京本社",
    type: "正社員",
    description: "グローバルクライアントとの関係構築と新規営業開拓"
  },
  {
    id: "job4",
    title: "サステナビリティ研究員",
    department: "研究開発部",
    location: "東京本社",
    type: "正社員",
    description: "環境配慮型素材の研究開発と製造プロセスの改善"
  }
];

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    id: "benefit1",
    title: "競争力のある給与",
    description: "業界水準を上回る給与と充実したボーナス制度",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: "benefit2",
    title: "キャリア開発",
    description: "継続的な研修と国際的なキャリア形成の機会",
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    id: "benefit3",
    title: "ワークライフバランス",
    description: "柔軟な勤務体制と充実した休暇制度",
    icon: <Heart className="w-8 h-8" />
  },
  {
    id: "benefit4",
    title: "チームワーク",
    description: "多様な背景を持つプロフェッショナルなチーム",
    icon: <Users className="w-8 h-8" />
  }
];

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement[]>([]);
  const benefitsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      jobsRef.current.forEach((job, index) => {
        gsap.fromTo(
          job,
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
              trigger: job,
              start: "top 80%",
              end: "top 20%",
              scrub: false
            }
          }
        );
      });

      benefitsRef.current.forEach((benefit, index) => {
        gsap.fromTo(
          benefit,
          {
            opacity: 0,
            scale: 0.95
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: benefit,
              start: "top 80%",
              toggleActions: "play none none none"
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
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/team-collaboration-SL3Cefj3frzTqcXUjVDR3m.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            採用情報
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            グローバルなアパレル産業の未来を一緒に創造する、才能あるチームメンバーを募集しています
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            なぜ私たちで働くのか
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  グローバルな環境
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  45カ国以上のクライアントと協業。国際的なキャリアを積める環境です。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  技術革新への挑戦
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  最先端の製造技術とサステナブル素材開発に携わる機会があります。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  社会への貢献
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  環境配慮と社会責任を軸とした、持続可能な産業を創造しています。
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/team-collaboration-SL3Cefj3frzTqcXUjVDR3m.webp"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={containerRef} className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            福利厚生
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                ref={(el) => {
                  if (el) benefitsRef.current[index] = el;
                }}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors text-center"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section ref={containerRef} className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            募集職種
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                ref={(el) => {
                  if (el) jobsRef.current[index] = el;
                }}
                className="bg-background rounded-lg p-8 border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {job.department}
                    </p>
                  </div>
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {job.description}
                </p>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  詳細を見る
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            企業文化
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/sustainable-production-WdoMK7xuQ3t3Sss9PU4j93.webp"
                alt="Company culture"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  イノベーション
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  新しいアイデアと挑戦を歓迎し、継続的な改善を推進しています。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  ダイバーシティ
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  多様な背景と視点を持つチームメンバーが一緒に働く環境です。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  持続可能性
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  環境と社会への責任を果たしながら、ビジネスを成長させています。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  チームワーク
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  協力と信頼に基づいた、強いチームを構築しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            あなたのキャリアを一緒に成長させませんか？
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            グローバルなアパレル産業の未来を創造する、才能あるチームメンバーを募集しています
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 font-semibold">
            応募する
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
