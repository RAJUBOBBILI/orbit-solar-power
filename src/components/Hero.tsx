import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-solar-1.jpg";
import heroImage2 from "@/assets/hero-solar-2.jpg";
import heroImage3 from "@/assets/hero-solar-3.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Power Your Home with Sustainable Solar Energy",
    subtitle: "Join the clean energy revolution with Orbit Enterprises. We provide reliable, efficient, and affordable solar installation solutions for homes and businesses."
  },
  {
    image: heroImage2,
    title: "Save More with Smart Solar Solutions",
    subtitle: "Reduce your electricity bills and enjoy energy independence with our high-performance solar panels designed for long-term savings and sustainability."
  },
  {
    image: heroImage3,
    title: "Clean Energy for a Brighter Future",
    subtitle: "Switch to renewable energy with Orbit Enterprises. Our expert team delivers end-to-end solar installation services you can trust for your home or business."
  }
];


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToQuotation = () => {
    const element = document.getElementById("quotation");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 z-10" />
          <img
            src={slide.image}
            alt={`Solar installation ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-xl text-muted-foreground mb-8">
                  {slide.subtitle}
                </p>
                <Button 
                  onClick={scrollToQuotation}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-background/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
