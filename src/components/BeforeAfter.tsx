
import { ArrowRight } from "lucide-react";

const BeforeAfter = () => {
  const scenarios = [
    {
      title: "Customer Support",
      before: "Founder-led, reactive firefighting with inconsistent responses and no tracking",
      after: "Proactive team with clear processes, templates, and metrics driving continuous improvement"
    },
    {
      title: "Onboarding Experience",
      before: "High-touch, manual process that doesn't scale and varies based on who's available",
      after: "Structured, repeatable system that delights customers while requiring less time per account"
    },
    {
      title: "Customer Feedback",
      before: "Ad-hoc collection with no systematic way to prioritize and address issues",
      after: "Integrated voice-of-customer program that informs product roadmap and prevents churn"
    }
  ];

  return (
    <section id="transformation" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="chip chip-secondary mb-3">The Transformation</span>
          <h2 className="section-title">Before & After: Your CX Evolution</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            See the concrete differences a strategic CX approach makes in your day-to-day operations.
          </p>
        </div>

        <div className="space-y-12">
          {scenarios.map((scenario, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-brand-pink/10 dark:bg-brand-pink/5 p-6 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold">{scenario.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 divide-x divide-gray-100 dark:divide-gray-800">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-semibold text-red-500 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">BEFORE</span>
                  </div>
                  <p className="text-muted-foreground">{scenario.before}</p>
                </div>
                <div className="p-6 md:p-8 bg-brand-green-light/20 dark:bg-brand-green/5">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-semibold text-green-500 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">AFTER</span>
                  </div>
                  <p className="text-muted-foreground">{scenario.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://cal.com/tomas-williams" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center gap-2 group transition-all duration-300 hover:scale-105"
          >
            <span>Transform Your CX Today</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
