import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  autoplay?: boolean;
}

export default function ImageGallery({
  images,
  title,
  autoplay = true
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, images.length]);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  return (
    <div ref={containerRef} className="w-full">
      {title && (
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          {title}
        </h2>
      )}

      <div className="relative bg-muted rounded-lg overflow-hidden shadow-xl">
        {/* Main Image */}
        <div className="relative aspect-video overflow-hidden bg-background">
          <img
            ref={imageRef}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />

          {/* Image Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-white text-xl font-semibold">
              {images[currentIndex].title}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? "border-primary shadow-lg"
                : "border-border hover:border-primary/50"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Autoplay Toggle */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            isAutoplay
              ? "bg-primary text-white"
              : "bg-muted text-foreground hover:bg-primary/10"
          }`}
        >
          {isAutoplay ? "自動再生中" : "自動再生を開始"}
        </button>
      </div>
    </div>
  );
}
