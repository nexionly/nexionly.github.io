
import CTAButtons from "./CTAButtons";

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

        <div className="space-y-8">
          {scenarios.map((scenario, index) => (
            <div 
              key={index} 
              className="glass-card animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-brand-pink/5">
                <h3 className="text-xl font-bold">{scenario.title}</h3>
              </div>
              
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-semibold text-red-500 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">BEFORE</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{scenario.before}</p>
                </div>
                
                <div className="p-6 rounded-lg bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-semibold text-green-500 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">AFTER</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{scenario.after}</p>
                </div>
              </div>
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

export default BeforeAfter;
