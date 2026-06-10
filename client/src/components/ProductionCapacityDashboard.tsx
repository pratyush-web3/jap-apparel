import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: "production",
    label: "年間生産能力",
    value: 50000000,
    suffix: "枚",
    description: "高品質な衣料品を年間5000万枚生産"
  },
  {
    id: "clients",
    label: "グローバルクライアント",
    value: 45,
    suffix: "カ国",
    description: "世界45カ国以上のブランドをサポート"
  },
  {
    id: "facilities",
    label: "製造施設",
    value: 5,
    suffix: "拠点",
    description: "日本と東南アジアに5つの最新施設"
  },
  {
    id: "employees",
    label: "従業員数",
    value: 850,
    suffix: "名",
    description: "熟練した職人と技術者のチーム"
  }
];

interface CounterProps {
  stat: Stat;
  onComplete?: () => void;
}

function Counter({ stat, onComplete }: CounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      gsap.to(counter, {
        value: stat.value,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counter.value).toLocaleString("ja-JP");
          }
        },
        onComplete
      });
    }, counterRef);

    return () => ctx.revert();
  }, [stat.value, onComplete]);

  return <div ref={counterRef}>0</div>;
}

export default function ProductionCapacityDashboard() {
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
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.12,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-primary-foreground border border-primary/20 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <p className="text-sm font-medium opacity-90">{stat.label}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-bold">
                  <Counter stat={stat} />
                </div>
                <span className="text-xl font-semibold opacity-90">{stat.suffix}</span>
              </div>
            </div>

            <p className="text-sm opacity-80">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
