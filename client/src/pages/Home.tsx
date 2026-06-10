import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Factory, Leaf, Shield, Globe, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ManufacturingProcessTimeline from "@/components/ManufacturingProcessTimeline";
import MaterialLibrary from "@/components/MaterialLibrary";
import ProductionCapacityDashboard from "@/components/ProductionCapacityDashboard";
import QualityControlFlow from "@/components/QualityControlFlow";
import IndustryCertifications from "@/components/IndustryCertifications";
import { siteConfig } from "@/data/siteConfig";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hero image parallax and fade in
      tl.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        0
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          0.2
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          0.4
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          0.6
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
          0.5
        );

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Premium Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Background Image with Overlay */}
        <div
          ref={heroImageRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/hero-textile-japanese-NYKu53PLjxyEc4RADNgugn.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
            {/* Left: Premium Headline */}
            <div className="max-w-xl">
              <div className="mb-6 inline-block">
                <span className="text-sm font-semibold text-primary/80 uppercase tracking-widest">
                  日本の精密技術
                </span>
              </div>

              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
              >
                革新的な製造技術で、世界のアパレル産業をリード
              </h1>

              <p
                ref={subtitleRef}
                className="text-xl text-white/90 mb-10 leading-relaxed font-light"
              >
                日本の精密技術とサステナブルな素材開発で、グローバルブランドの信頼を獲得。1985年の創業から40年以上、品質と革新を追求し続けています。
              </p>

              <div ref={ctaRef} className="flex gap-4 flex-wrap">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold rounded-lg shadow-lg transition-all duration-300"
                >
                  サービスを見る
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/company"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold rounded-lg transition-all duration-300"
                >
                  会社概要
                </Link>
              </div>
            </div>

            {/* Right: Stats Card */}
            <div ref={statsRef} className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  <div className="border-b border-white/20 pb-8">
                    <p className="text-white/80 text-sm font-medium mb-2">製造能力</p>
                    <p className="text-4xl font-bold text-white">5000万枚/年</p>
                    <p className="text-white/70 text-sm mt-2">高品質なアパレル製造</p>
                  </div>

                  <div className="border-b border-white/20 pb-8">
                    <p className="text-white/80 text-sm font-medium mb-2">サステナブル素材</p>
                    <p className="text-4xl font-bold text-white">6種類以上</p>
                    <p className="text-white/70 text-sm mt-2">環境配慮型素材開発</p>
                  </div>

                  <div>
                    <p className="text-white/80 text-sm font-medium mb-2">グローバル拠点</p>
                    <p className="text-4xl font-bold text-white">45カ国以上</p>
                    <p className="text-white/70 text-sm mt-2">世界中のクライアント</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">会社概要</h2>
            <p className="text-lg text-muted-foreground">
              1985年の創業以来、日本の精密技術とグローバルな視点で、アパレル産業の未来を創造
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border text-center">
              <p className="text-5xl font-bold text-primary mb-3">1985</p>
              <p className="text-lg font-semibold text-foreground mb-2">創業年</p>
              <p className="text-muted-foreground">40年以上の実績</p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border text-center">
              <p className="text-5xl font-bold text-secondary mb-3">850</p>
              <p className="text-lg font-semibold text-foreground mb-2">従業員数</p>
              <p className="text-muted-foreground">グローバルチーム</p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border text-center">
              <p className="text-5xl font-bold text-accent mb-3">6</p>
              <p className="text-lg font-semibold text-foreground mb-2">国際認証</p>
              <p className="text-muted-foreground">品質保証</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">主要な能力</h2>
            <p className="text-lg text-muted-foreground">
              最新技術と職人技を組み合わせた、包括的なアパレル製造ソリューション
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <Factory className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">OEM生産</h3>
              <p className="text-muted-foreground">
                クライアントの仕様に基づいた受託製造サービス
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border hover:border-secondary transition-colors">
              <Leaf className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                サステナブル素材
              </h3>
              <p className="text-muted-foreground">
                環境配慮型の素材開発と製造プロセス
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border hover:border-accent transition-colors">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">品質管理</h3>
              <p className="text-muted-foreground">
                国際基準に基づいた厳格な品質管理
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                グローバルネットワーク
              </h3>
              <p className="text-muted-foreground">
                45カ国以上のクライアントとの取引実績
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">製造能力</h2>
          </div>
          <ProductionCapacityDashboard />
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">製造工程</h2>
            <p className="text-lg text-muted-foreground">
              デザインから出荷まで、一貫した品質管理
            </p>
          </div>
          <ManufacturingProcessTimeline />
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">素材ラインアップ</h2>
            <p className="text-lg text-muted-foreground">
              最高品質の天然素材から革新的なサステナブル素材まで
            </p>
          </div>
          <MaterialLibrary />
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">品質管理</h2>
            <p className="text-lg text-muted-foreground">
              国際基準に基づいた厳格な品質管理プロセス
            </p>
          </div>
          <QualityControlFlow />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">国際認証</h2>
            <p className="text-lg text-muted-foreground">
              世界レベルの品質と環境基準を達成
            </p>
          </div>
          <IndustryCertifications />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            グローバルなアパレル産業のパートナーになりませんか？
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            革新的な製造技術と環境配慮で、あなたのブランドの成功をサポートします
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 font-semibold rounded-lg">
            お問い合わせ
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
