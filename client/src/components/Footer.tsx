import { siteConfig } from "@/data/siteConfig";
import { Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">日</span>
              </div>
              <div>
                <h3 className="font-bold">{siteConfig.companyName}</h3>
              </div>
            </div>
            <p className="text-sm opacity-90">{siteConfig.tagline}</p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">会社</h4>
            <ul className="space-y-2">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              {siteConfig.footerLinks.services.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability Links */}
          <div>
            <h4 className="font-semibold mb-4">サステナビリティ</h4>
            <ul className="space-y-2">
              {siteConfig.footerLinks.sustainability.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="opacity-80">{siteConfig.contact.phone}</p>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <p className="opacity-80">{siteConfig.contact.address}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            {siteConfig.footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {siteConfig.socialLinks.linkedin && (
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {siteConfig.socialLinks.youtube && (
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            )}
            {siteConfig.socialLinks.instagram && (
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {siteConfig.socialLinks.x && (
              <a
                href={siteConfig.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-70 mt-8">
          <p>
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
