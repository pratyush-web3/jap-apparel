import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ManufacturingProcessTimeline from "@/components/ManufacturingProcessTimeline";
import { Factory, Zap, CheckCircle, Truck } from "lucide-react";

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            製造工程
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            デザインから出荷まで、一貫した品質管理と革新的な製造プロセス
          </p>
        </div>
      </section>

      {/* Manufacturing Timeline */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              製造工程フロー
            </h2>
            <p className="text-muted-foreground">
              各ステップで厳格な品質管理を実施
            </p>
          </div>
          <ManufacturingProcessTimeline />
        </div>
      </section>

      {/* Factory Operations */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Factory className="w-8 h-8 text-primary" />
              工場運営
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                最新の機械設備
              </h3>
              <p className="text-muted-foreground mb-4">
                自動化された機械と職人技を組み合わせた、高度な製造プロセス
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>自動織機システム</li>
                <li>デジタル染色技術</li>
                <li>自動裁断システム</li>
                <li>ロボット縫製システム</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                環境配慮
              </h3>
              <p className="text-muted-foreground mb-4">
                サステナブルな製造プロセスで、環境への負荷を最小化
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>水の再利用システム</li>
                <li>エネルギー効率化</li>
                <li>廃棄物削減</li>
                <li>再生可能エネルギー利用</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Details */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-secondary" />
              品質管理体制
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                入荷検査
              </h3>
              <p className="text-muted-foreground">
                原材料の到着時に、品質・数量を厳格にチェック。不良品は即座に返却
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                工程管理
              </h3>
              <p className="text-muted-foreground">
                製造中の各ステップで、サンプル検査と品質確認を実施。不良は即座に対応
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                最終検査
              </h3>
              <p className="text-muted-foreground">
                出荷前に全製品を対象に、寸法・色・縫製などを詳細にチェック
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                認証取得
              </h3>
              <p className="text-muted-foreground">
                ISO 9001、OEKO-TEX、GOTS等の国際認証を取得し、品質を保証
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Delivery */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Truck className="w-8 h-8 text-accent" />
              梱包・配送
            </h2>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    環境配慮の梱包
                  </h3>
                  <p className="text-muted-foreground">
                    リサイクル可能な素材を使用し、環境への負荷を最小化。製品の保護と環境配慮を両立
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    配送標準
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>正確な納期管理</li>
                    <li>安全な輸送方法</li>
                    <li>リアルタイム追跡</li>
                    <li>ダメージ保証</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    グローバル配送
                  </h3>
                  <p className="text-muted-foreground">
                    世界中への配送に対応。複数の物流パートナーと連携し、効率的で安全な配送を実現
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
