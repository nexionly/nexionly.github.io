
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "One of Tomas' key strengths is his leadership ability. He has a natural talent for guiding teams and inspiring collaboration, always keeping a customer-first mindset.",
      name: "Matteo Perretta",
      title: "Sr. Sales Enablement Leader",
    },
    {
      quote: "Tomas was someone I could always rely on—whether it was for problem-solving, big-picture strategy, or just keeping everything (and everyone) moving forward. He was the glue for our culture, keeping the team connected and motivated.",
      name: "Marie Yatco",
      title: "VP, Customer Experience, Kindsight",
    },
    {
      quote: "He has an exceptional ability to connect with people across all levels and departments, using these relationships to really understand challenges before crafting solutions.",
      name: "Sherman Hui",
      title: "Software Engineer, Procurify",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-brand-pink-light dark:bg-brand-pink-light/10">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-accent mb-3">Testimonials</span>
          <h2 className="section-title">What People Say About Tomas</h2>
          <p className="section-subtitle">
            Perspectives from colleagues and professionals I've worked with
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
