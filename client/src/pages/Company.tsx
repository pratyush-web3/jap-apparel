import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Target, Lightbulb, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "山田太郎",
    position: "代表取締役CEO",
    department: "経営"
  },
  {
    id: "cto",
    name: "佐藤花子",
    position: "最高技術責任者",
    department: "製造技術"
  },
  {
    id: "cso",
    name: "鈴木次郎",
    position: "営業本部長",
    department: "営業"
  },
  {
    id: "coo",
    name: "田中美咲",
    position: "最高運営責任者",
    department: "運営"
  }
];

export default function Company() {
  const containerRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      membersRef.current.forEach((member, index) => {
        gsap.fromTo(
          member,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: member,
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
            会社概要
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            日本の製造技術とグローバルな視点で、アパレル産業の未来を創造
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                創業年
              </p>
              <p className="text-4xl font-bold text-primary mb-2">1985</p>
              <p className="text-muted-foreground">40年以上の実績</p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                従業員数
              </p>
              <p className="text-4xl font-bold text-secondary mb-2">850</p>
              <p className="text-muted-foreground">グローバルチーム</p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                年間生産量
              </p>
              <p className="text-4xl font-bold text-accent mb-2">5000万</p>
              <p className="text-muted-foreground">枚/年</p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                取引国
              </p>
              <p className="text-4xl font-bold text-primary mb-2">45+</p>
              <p className="text-muted-foreground">カ国以上</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            企業沿革
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-lg font-bold text-primary">1985年</p>
                <p className="text-foreground">
                  日本テキスタイル工業株式会社を設立
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6 py-2">
                <p className="text-lg font-bold text-secondary">1995年</p>
                <p className="text-foreground">
                  アジア地域での事業拡大を開始
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <p className="text-lg font-bold text-accent">2005年</p>
                <p className="text-foreground">
                  欧米市場への進出、グローバル展開加速
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-lg font-bold text-primary">2015年</p>
                <p className="text-foreground">
                  サステナブル素材開発プロジェクト開始
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6 py-2">
                <p className="text-lg font-bold text-secondary">2023年</p>
                <p className="text-foreground">
                  次世代製造技術への投資を加速
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/textile-weaving-KjKgAXcxA28Groods3bBE7.webp"
                alt="Company history"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-background rounded-lg p-8 border border-border">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ミッション
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                高品質で環境配慮型のアパレル製造を通じて、グローバルブランドの成功をサポートし、持続可能な産業の発展に貢献する。
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <Lightbulb className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ビジョン
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                革新的な製造技術とサステナブルな素材開発により、アパレル産業の未来を創造し、世界中の消費者に価値を提供する。
              </p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <Globe className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                バリュー
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                品質第一、環境配慮、技術革新、グローバル視点を大切にし、すべてのステークホルダーとの信頼関係を構築する。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={containerRef} className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            経営チーム
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                ref={(el) => {
                  if (el) membersRef.current[index] = el;
                }}
                className="bg-card rounded-lg p-6 border border-border text-center hover:border-primary transition-colors"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-2">
                  {member.position}
                </p>
                <p className="text-xs text-muted-foreground">
                  {member.department}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            施設・設備
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/sustainable-production-WdoMK7xuQ3t3Sss9PU4j93.webp"
                alt="Facilities"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  最先端の製造設備
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  自動化された最新の織機、染色設備、縫製機械を導入し、効率性と品質を両立させています。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  品質管理センター
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  先端的な検査機器と専門技術者により、国際基準に基づいた厳格な品質管理を実施しています。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  研究開発施設
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  新素材開発とサステナブルな製造プロセスの研究に専念する、最新のR&D施設を完備しています。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  物流センター
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  効率的な在庫管理と迅速な配送を実現する、最新の物流システムを導入しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
