
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5 bg-[url('/lovable-uploads/f900e5ec-e738-4bac-8a21-386440272f42.png')] bg-center bg-no-repeat bg-contain" />
      <div className="section-container flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="mb-4">
            <span className="chip chip-primary mb-3">CX Consultancy & Advisory</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Building Exceptional <span className="text-brand-pink">Customer Experiences</span> for Series-A Founders
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            I help post Series-A founders lay the foundation for CX teams that deliver sustainable growth and long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Book a Call
            </a>
            <a href="#services" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-brand-pink transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
