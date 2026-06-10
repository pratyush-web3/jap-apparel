import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: TimelineStep[] = [
  {
    id: "design",
    title: "デザイン・企画",
    description: "クライアントの要件に基づいて、詳細な仕様書を作成します。",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    id: "sourcing",
    title: "原材料調達",
    description: "最高品質の素材を厳選し、サステナブルな調達を実現します。",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    id: "production",
    title: "生産",
    description: "最新の機械と職人技を組み合わせた製造プロセス。",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    id: "quality",
    title: "品質検査",
    description: "国際基準に基づいた厳格な品質管理を実施します。",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    id: "packaging",
    title: "梱包・出荷",
    description: "環境に配慮した梱包で、安全に配送します。",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

export default function ManufacturingProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        gsap.fromTo(
          step,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => {
              if (el) stepsRef.current[index] = el;
            }}
            className="relative"
          >
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors h-full">
              <div className="flex flex-col items-center text-center">
                <div className="text-primary mb-4">{step.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
