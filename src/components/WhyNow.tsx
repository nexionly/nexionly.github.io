
import { Clock, TrendingUp, AlertCircle } from "lucide-react";
import CTAButtons from "./CTAButtons";

const WhyNow = () => {
  const reasons = [
    {
      icon: <Clock className="h-10 w-10 text-brand-pink" />,
      title: "The Series-A Critical Window",
      description: "Post-funding is the optimal time to establish CX systems that scale. Waiting too long creates technical debt and customer friction that becomes harder to resolve."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-brand-green" />,
      title: "Scalability is a Make-or-Break Factor",
      description: "Series-A companies are expected to demonstrate rapid growth. CX issues that were manageable with a small customer base can quickly become overwhelming as you scale."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-brand-blue" />,
      title: "Investor Confidence Relies on CX Metrics",
      description: "Series-B investors scrutinize retention, NPS, and customer health metrics. Building these systems now directly impacts your next fundraising round."
    }
  ];

  return (
    <section id="why-now" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/75 dark:to-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="chip chip-primary mb-3">Why Now?</span>
          <h2 className="section-title">The Critical Timing for Series-A CX Strategy</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Series-A is the perfect moment to invest in customer experience—not too early and certainly not too late.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center">{reason.title}</h3>
              <p className="text-muted-foreground text-center">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButtons className="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
