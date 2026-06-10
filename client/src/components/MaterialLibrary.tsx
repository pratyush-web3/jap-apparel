import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Material {
  id: string;
  name: string;
  description: string;
  properties: string[];
  color: string;
}

const materials: Material[] = [
  {
    id: "cotton",
    name: "オーガニックコットン",
    description: "肌に優しく、通気性に優れた天然素材。",
    properties: ["通気性", "吸湿性", "肌に優しい"],
    color: "bg-orange-100"
  },
  {
    id: "polyester",
    name: "ポリエステル",
    description: "耐久性と速乾性に優れた合成繊維。",
    properties: ["耐久性", "速乾性", "シワになりにくい"],
    color: "bg-blue-100"
  },
  {
    id: "wool",
    name: "ウール",
    description: "保温性と調湿機能を備えた天然繊維。",
    properties: ["保温性", "調湿機能", "弾力性"],
    color: "bg-amber-100"
  },
  {
    id: "recycled",
    name: "リサイクル素材",
    description: "環境に配慮した持続可能な素材。",
    properties: ["環境配慮", "耐久性", "品質"],
    color: "bg-green-100"
  },
  {
    id: "silk",
    name: "シルク",
    description: "光沢感と肌触りが特徴の高級素材。",
    properties: ["光沢感", "肌触り", "高級感"],
    color: "bg-purple-100"
  },
  {
    id: "linen",
    name: "リネン",
    description: "涼しさと上品な質感を持つ天然繊維。",
    properties: ["涼しさ", "上品", "吸湿性"],
    color: "bg-yellow-100"
  }
];

export default function MaterialLibrary() {
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
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.08,
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
        {materials.map((material, index) => (
          <div
            key={material.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="group"
          >
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg h-full">
              {/* Material Color Preview */}
              <div className={`h-24 ${material.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary to-secondary"></div>
              </div>

              {/* Material Info */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {material.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {material.description}
                </p>

                {/* Properties */}
                <div className="flex flex-wrap gap-2">
                  {material.properties.map((prop) => (
                    <span
                      key={prop}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground"
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
