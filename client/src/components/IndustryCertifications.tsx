import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  id: string;
  name: string;
  description: string;
  year: string;
}

const certifications: Certification[] = [
  {
    id: "iso9001",
    name: "ISO 9001",
    description: "品質マネジメントシステムの国際規格",
    year: "2010年取得"
  },
  {
    id: "iso14001",
    name: "ISO 14001",
    description: "環境マネジメントシステムの国際規格",
    year: "2012年取得"
  },
  {
    id: "oeko",
    name: "OEKO-TEX",
    description: "テキスタイルの安全性と環境配慮を認証",
    year: "2015年取得"
  },
  {
    id: "gots",
    name: "GOTS認証",
    description: "オーガニックコットンの国際基準",
    year: "2016年取得"
  },
  {
    id: "fairtrade",
    name: "Fair Trade Certified",
    description: "公正な取引と労働環境を保証",
    year: "2018年取得"
  },
  {
    id: "carbon",
    name: "カーボンニュートラル認証",
    description: "CO2排出量の削減と相殺を実現",
    year: "2022年取得"
  }
];

export default function IndustryCertifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.9
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                <p className="text-xs font-medium text-accent">{cert.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
