import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialLibrary from "@/components/MaterialLibrary";
import QualityControlFlow from "@/components/QualityControlFlow";
import IndustryCertifications from "@/components/IndustryCertifications";
import { Beaker, Shield, Leaf } from "lucide-react";

export default function Materials() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Premium Header with Image */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/fabric-close-up-MroD9WavvyRfTFJC9xsAu9.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            素材と品質
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            革新的な素材開発と国際基準に基づいた品質管理
          </p>
        </div>
      </section>

      {/* Material Library */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              素材ラインアップ
            </h2>
            <p className="text-muted-foreground">
              最高品質の天然素材から革新的なサステナブル素材まで、幅広いラインアップを提供
            </p>
          </div>
          <MaterialLibrary />
        </div>
      </section>

      {/* Sustainable Materials Showcase */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                サステナブル素材
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                環境への負荷を最小化しながら、最高品質を実現。オーガニックコットン、リサイクル素材、バイオベース素材を組み合わせた革新的な素材開発を推進しています。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">オーガニックコットン: 認証済みの最高品質</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">リサイクル素材: 廃棄物を資源に</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">バイオベース素材: 植物由来の革新素材</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/sustainable-materials-K8aQTY8J3SgjdTXEZTMQQN.webp"
                alt="Sustainable materials showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Development */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Beaker className="w-8 h-8 text-primary" />
              生地開発プロセス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                研究開発
              </h3>
              <p className="text-muted-foreground">
                最新の技術と市場トレンドを分析し、革新的な素材を開発
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                試作製作
              </h3>
              <p className="text-muted-foreground">
                小ロット試作で素材の特性と品質を検証
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                量産化
              </h3>
              <p className="text-muted-foreground">
                品質を保ちながら、大量生産体制を構築
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-secondary" />
              品質管理
            </h2>
            <p className="text-muted-foreground">
              国際基準に基づいた厳格な品質管理プロセス
            </p>
          </div>
          <QualityControlFlow />
        </div>
      </section>

      {/* Testing Standards */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              試験基準
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  物理的試験
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>引張強度試験</li>
                  <li>引裂強度試験</li>
                  <li>色牢度試験</li>
                  <li>縮み率試験</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  化学的試験
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>有害物質検査</li>
                  <li>重金属検査</li>
                  <li>pH値測定</li>
                  <li>ホルムアルデヒド検査</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  環境試験
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>洗濯耐久性試験</li>
                  <li>日光堅牢度試験</li>
                  <li>汗堅牢度試験</li>
                  <li>摩擦堅牢度試験</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
              <Leaf className="w-8 h-8 text-accent" />
              国際認証
            </h2>
            <p className="text-muted-foreground">
              世界レベルの品質と環境基準を達成
            </p>
          </div>
          <IndustryCertifications />
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663109586204/4g994veUNWdFQ22MZSLSuc/manufacturing-process-T54yvN26Y8ej9tnvnVhLn2.webp"
                alt="Manufacturing process"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                製造卓越性
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                最新の機械設備と職人技を組み合わせた、高度な製造プロセス。品質と効率を両立させながら、環境への負荷を最小化しています。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">自動化と職人技の融合</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">環境配慮型製造プロセス</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">継続的な品質改善</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

