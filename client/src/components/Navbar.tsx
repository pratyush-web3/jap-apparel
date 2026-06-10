import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between overflow-x-hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity" onClick={handleNavClick}>
          <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
            <span className="text-white font-bold text-lg">日</span>
          </div>
          <div className="hidden sm:block whitespace-nowrap">
            <h1 className="text-base font-bold text-primary group-hover:text-primary/80 transition-colors">
              日本テキスタイル
            </h1>
            <p className="text-xs text-muted-foreground">アパレル工業</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4 flex-shrink-0">
          <Link
            href="/contact"
            onClick={handleNavClick}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
          >
            お問い合わせ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300 hover:text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 text-left py-2 hover:pl-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="w-full bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg py-2 px-4 text-center font-medium"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
