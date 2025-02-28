
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "CX Strategy Development",
      description: "Create a comprehensive CX roadmap aligned with your business goals and growth trajectory.",
      benefits: [
        "Tailored to your company's growth stage",
        "Frameworks that scale with your business",
        "Integration with your product roadmap"
      ],
      chipText: "Strategy",
      chipClass: "chip-primary"
    },
    {
      title: "Team Building & Transition",
      description: "Transform founder-led support into a strategic, customer-focused CX operation.",
      benefits: [
        "Hiring & team structure guidance",
        "Process development & optimization",
        "Leadership training & mentoring"
      ],
      chipText: "Team Building",
      chipClass: "chip-secondary"
    },
    {
      title: "Customer Experience Optimization",
      description: "Identify and resolve friction points in your customer journey to boost loyalty and retention.",
      benefits: [
        "Customer journey mapping",
        "Experience audits & recommendations",
        "Metrics definition & analytics setup"
      ],
      chipText: "Optimization",
      chipClass: "chip-accent"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-accent mb-3">Services</span>
          <h2 className="section-title">How I Can Help Your Business</h2>
          <p className="section-subtitle">
            Specialized consulting services designed to help Series-A companies scale their customer experience operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 transition-all duration-300 hover:shadow-md animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className={`chip ${service.chipClass} mb-4`}>{service.chipText}</span>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="text-brand-green h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
