
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Matte helped us transform our chaotic customer support into a strategic CX operation that's now one of our key competitive advantages.",
      name: "Sarah Johnson",
      title: "Co-founder & CEO, CloudStack",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Our customer retention has increased by 32% since implementing the CX strategy that Matte developed for us. The ROI has been incredible.",
      name: "Michael Chang",
      title: "Founder, DataSync",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "What sets Matte apart is his ability to create systems that scale with your business. He doesn't just solve today's problems – he prepares you for tomorrow's growth.",
      name: "Rachel Torres",
      title: "CTO, TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-brand-pink-light">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-accent mb-3">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Results and perspectives from founders I've worked with
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 left-0 text-brand-pink opacity-20">
            <Quote size={80} />
          </div>

          <div className="overflow-hidden relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center items-center p-8 text-center ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand-pink w-6"
                    : "bg-brand-pink/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
