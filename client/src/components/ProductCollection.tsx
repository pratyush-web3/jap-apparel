import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

interface ProductCollectionProps {
  products: Product[];
  title?: string;
}

export default function ProductCollection({
  products,
  title = "製品コレクション"
}: ProductCollectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      productsRef.current.forEach((product, index) => {
        gsap.fromTo(
          product,
          {
            opacity: 0,
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: product,
              start: "top 80%",
              end: "top 20%",
              scrub: false
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {title && (
        <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => {
              if (el) productsRef.current[index] = el;
            }}
            className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <button className="w-full bg-primary text-white hover:bg-primary/90 py-2 rounded-lg font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                詳しく見る
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
