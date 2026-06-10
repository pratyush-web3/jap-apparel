import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-lg text-muted-foreground">
            個人情報の保護に関する当社の方針
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Introduction Box */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12 shadow-sm">
            <p className="text-foreground leading-relaxed text-lg">
              日本テキスタイル・アパレル工業（以下「当社」）は、お客様の個人情報を大切な資産として扱い、その保護と適切な管理を最優先事項としています。本プライバシーポリシーは、当社のウェブサイト及びサービスにおける個人情報の取扱いについて定めたものです。
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">適用範囲</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    本プライバシーポリシーは、当社が運営するウェブサイト及び当社が提供するすべてのサービスに適用されます。第三者が運営するウェブサイトについては、本ポリシーの適用外です。
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">収集する個人情報</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    当社は、以下の場合に個人情報を収集します：
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">お問い合わせフォームからのご連絡時</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">採用応募時</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">ニュースレター登録時</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">当社のサービス利用時</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    具体的には、氏名、会社名、部署名、メールアドレス、電話番号、住所、その他当社が必要と判断する情報を収集することがあります。
                  </p>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">個人情報の利用目的</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    収集した個人情報は、以下の目的でのみ利用いたします：
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">お問い合わせへのご回答及びサービス提供</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">採用選考プロセスの実施及び人材評価</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">ニュースレター及び情報提供（ご希望の場合）</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">ウェブサイトの利用状況分析及びサービス改善</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">法令で定められた義務の履行</span>
                    </div>
                  </div>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">個人情報の保護</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当社は、お客様の個人情報を安全に管理するため、以下のセキュリティ対策を実施しています：
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 mt-4 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">SSL/TLS暗号化通信の導入</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">アクセス権限の制限及び管理</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">定期的なセキュリティ監査の実施</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">従業員への個人情報保護教育</span>
                    </div>
                  </div>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">個人情報の第三者提供</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当社は、法令で定められた場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。業務委託先に情報を提供する場合は、適切な秘密保持契約を締結し、情報の安全管理を確保しています。
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cookie（クッキー）の使用</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当社のウェブサイトは、ユーザー体験の向上及びアクセス解析のためにクッキーを使用しています。クッキーには個人を特定する情報は含まれておらず、ブラウザの設定で無効にすることができます。
                  </p>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">お客様の権利</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    お客様は、当社が保有する個人情報について、以下の権利を有しています：
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">個人情報の開示請求権</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">不正確な情報の訂正請求権</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">個人情報の削除請求権</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-foreground">個人情報の利用停止請求権</span>
                    </div>
                  </div>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">ポリシーの変更</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    当社は、法令の改正やサービスの変更に伴い、本プライバシーポリシーを随時変更することがあります。変更内容は、当社ウェブサイトに掲載いたします。重要な変更の場合は、メール等でお知らせさせていただきます。
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">お問い合わせ</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    本プライバシーポリシーに関するご質問、ご不明な点、または個人情報に関するご要望がございましたら、以下までお問い合わせください。
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
              本プライバシーポリシーは日本の個人情報保護法及び関連法令に基づいて作成されています。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
