import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            利用規約
          </h1>
          <p className="text-lg text-muted-foreground">
            ウェブサイト及びサービスのご利用条件
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Introduction Box */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12 shadow-sm">
            <p className="text-foreground leading-relaxed text-lg">
              本利用規約は、日本テキスタイル・アパレル工業（以下「当社」）が運営するウェブサイト及び提供するサービスのご利用に関する条件を定めています。本ウェブサイトにアクセスされた時点で、本規約に同意いただいたものと判断させていただきます。
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">規約の適用範囲</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    本利用規約は、当社が運営するウェブサイト（https://japanapparel-4g994veu.manus.space）及び当社が提供するすべてのサービスに適用されます。本ウェブサイトをご利用になられた場合、本規約に同意いただいたものと判断させていただきます。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">利用者の義務</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    利用者は、本ウェブサイトを適切に利用し、以下の行為を行わないことに同意します：
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">違法行為または違法行為に該当する可能性のある行為</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">他の利用者の権利を侵害する行為</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">当社の知的財産権を侵害する行為</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">不正アクセスまたはシステムへの攻撃</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">その他当社が不適切と判断する行為</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">知的財産権</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    本ウェブサイトに掲載されるテキスト、画像、ロゴ、デザイン、その他すべてのコンテンツの知的財産権は、当社またはその権利者に帰属しています。これらのコンテンツを、当社の事前承認なく複製、改変、配布、転売することは禁止されています。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">お問い合わせフォーム</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    お問い合わせフォームを通じてご提供いただいた情報は、当社のプライバシーポリシーに基づいて適切に管理されます。虚偽の情報を入力したり、不適切な目的で利用することはできません。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  5
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">外部リンク</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当社ウェブサイトから外部サイトへのリンクは、利便性のために提供されています。外部サイトの内容、正確性、安全性については、当社は一切の責任を負いません。外部サイトのご利用は、自己の判断と責任において行ってください。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  6
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">免責事項</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    当社は、以下の事項について一切の保証を行いません：
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">本ウェブサイトの内容の正確性、完全性、有用性</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">本ウェブサイトが特定の目的に適合すること</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">本ウェブサイトの中断や停止がないこと</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  7
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">サービスの中断・停止</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当社は、メンテナンス、技術的問題、セキュリティ上の理由、その他やむを得ない事由により、予告なくサービスを中断、停止、または変更することがあります。これに伴う損害や不便について、当社は責任を負いません。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  8
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">規約の変更</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当社は、法令の改正やサービスの変更に伴い、本規約を随時変更することがあります。変更内容は、当社ウェブサイトに掲載いたします。変更後も本ウェブサイトをご利用になられた場合は、変更内容に同意いただいたものと判断させていただきます。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  9
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">損害賠償の制限</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    本ウェブサイトの利用に起因して生じた損害、データの喪失、利益の喪失、その他いかなる損害についても、当社は一切の責任を負いません。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  10
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">準拠法と管轄</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    本規約は、日本法に準拠し、日本の法律に基づいて解釈されます。本規約に関する紛争については、東京地方裁判所を第一審の専属的管轄裁判所とします。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  11
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">規約の分割</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    本規約のいずれかの条項が法律上無効と判断された場合でも、その他の条項は有効に存続するものとします。
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  12
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">お問い合わせ</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    本利用規約に関するご質問、ご不明な点、またはご意見がございましたら、以下までお問い合わせください。
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="font-semibold text-foreground mb-3">日本テキスタイル・アパレル工業</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="font-semibold text-foreground">メール:</span> info@japan-textile-apparel.jp</p>
                      <p><span className="font-semibold text-foreground">電話:</span> +81-3-XXXX-XXXX</p>
                      <p><span className="font-semibold text-foreground">住所:</span> 東京都渋谷区道玄坂1-2-3 テキスタイルビル 5階</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">最終更新日:</span> 2026年6月9日
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              本利用規約は日本の法律に基づいて作成されています。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
