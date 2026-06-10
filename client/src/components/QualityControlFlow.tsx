import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, AlertCircle, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface QCStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const qcSteps: QCStep[] = [
  {
    id: "incoming",
    title: "入荷検査",
    description: "原材料の品質を厳格にチェック",
    icon: <AlertCircle className="w-8 h-8" />
  },
  {
    id: "process",
    title: "工程管理",
    description: "製造中の品質を継続的に監視",
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: "final",
    title: "最終検査",
    description: "国際基準に基づいた検査を実施",
    icon: <CheckCircle className="w-8 h-8" />
  },
  {
    id: "certification",
    title: "認証取得",
    description: "ISO、OEKO-TEXなどの認証を取得",
    icon: <CheckCircle className="w-8 h-8" />
  }
];

export default function QualityControlFlow() {
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
            x: -30
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.15,
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
      <div className="space-y-6">
        {qcSteps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => {
              if (el) stepsRef.current[index] = el;
            }}
            className="flex gap-6 items-start"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground">
              {step.icon}
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>

            {/* Step Number */}
            <div className="flex-shrink-0 text-right">
              <div className="text-3xl font-bold text-primary opacity-20">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
