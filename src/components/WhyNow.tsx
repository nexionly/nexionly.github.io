
import { TrendingDown, AlertCircle, DollarSign } from "lucide-react";
import CTAButtons from "./CTAButtons";

const WhyNow = () => {
  const reasons = [
    {
      icon: <TrendingDown className="h-10 w-10 text-brand-pink" />,
      title: "The Churn Crisis",
      description: "Early-stage companies often face sudden spikes in churn when their ad-hoc support systems fail to deliver measurable business outcomes. Each lost customer represents vital revenue and future growth potential."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-brand-blue" />,
      title: "The Scale-Up Squeeze",
      description: "As your customer base grows, measuring and ensuring customer outcomes becomes increasingly complex. Without proper success metrics, developer resources get drained on reactive firefighting instead of building value-driving features."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-brand-green" />,
      title: "The Revenue Risk",
      description: "Without proper CS systems, renewals become uncertain and upsell opportunities are missed. Investors scrutinize metrics like adoption, health scores, and ROI closely, impacting your next funding round."
    }
  ];

  return (
    <section id="why-now" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/75 dark:to-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="chip chip-primary mb-3">Why Now?</span>
          <h2 className="section-title">The Urgent Need for Early-Stage CS Strategy</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Empowering early-stage founders to fix churn, drive adoption, and grow revenue by focusing on customer outcomes, not just experiences.
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
