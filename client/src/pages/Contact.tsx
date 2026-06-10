import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("お問い合わせありがとうございます。確認後、ご連絡させていただきます。");
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            お問い合わせ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-background rounded-lg p-8 border border-border">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                電話
              </h3>
              <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                メール
              </h3>
              <p className="text-muted-foreground">{siteConfig.contact.email}</p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                住所
              </h3>
              <p className="text-muted-foreground">{siteConfig.contact.address}</p>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                営業時間
              </h3>
              <p className="text-muted-foreground mb-1">
                {siteConfig.businessHours.weekdays}
              </p>
              <p className="text-muted-foreground mb-1">
                {siteConfig.businessHours.saturday}
              </p>
              <p className="text-muted-foreground">
                {siteConfig.businessHours.sunday}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              お問い合わせフォーム
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-lg p-8 border border-border space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  お名前 *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田太郎"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  メールアドレス *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="info@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  会社名
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  件名 *
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="お問い合わせ内容"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  メッセージ *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="お問い合わせ内容をご記入ください"
                  required
                  rows={6}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-6"
              >
                送信する
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              ご入力いただいた情報は、お問い合わせへの対応のためにのみ使用いたします。
              詳細はプライバシーポリシーをご覧ください。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
