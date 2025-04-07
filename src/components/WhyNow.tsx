
import { TrendingDown, AlertCircle, DollarSign } from "lucide-react";
import CTAButtons from "./CTAButtons";

const WhyNow = () => {
  const reasons = [
    {
      icon: <TrendingDown className="h-10 w-10 text-brand-pink" />,
      title: "The Churn Crisis",
      description: "Early-stage companies often face sudden spikes in churn when their ad-hoc support systems break under the weight of scaling. Each lost customer represents vital revenue and future growth potential."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-brand-blue" />,
      title: "The Scale-Up Squeeze",
      description: "As your customer base grows, bugs and support tickets pile up faster than your team can handle them. This drains developer resources and creates a cycle of reactive firefighting instead of proactive growth."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-brand-green" />,
      title: "The Revenue Risk",
      description: "Without proper CX systems, renewals become uncertain and upsell opportunities are missed. Investors scrutinize these metrics closely, and poor performance can impact your next funding round."
    }
  ];

  return (
    <section id="why-now" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/75 dark:to-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="chip chip-primary mb-3">Why Now?</span>
          <h2 className="section-title">The Urgent Need for Early-Stage CX Strategy</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Empowering early-stage founders to fix churn, stabilize product, and grow revenue by solving hurdles like bugs, renewals, and missed upsells.
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
