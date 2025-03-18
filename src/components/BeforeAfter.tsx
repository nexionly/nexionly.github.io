
import CTAButtons from "./CTAButtons";

const BeforeAfter = () => {
  const scenarios = [
    {
      title: "Customer Support & Retention",
      before: "Increasing churn rates, inconsistent responses, no tracking, and overwhelmed team members scrambling to put out fires",
      after: "Stable retention metrics, proactive support processes, clear escalation paths, and continuous improvement driven by data"
    },
    {
      title: "Growth & Scaling",
      before: "Declining ARR growth, missed upsell opportunities, and processes that break down with each new customer cohort",
      after: "Predictable expansion revenue, scalable systems that grow with you, and successful upsell/cross-sell playbooks"
    },
    {
      title: "Product & Engineering",
      before: "Mounting product bugs, developers constantly pulled into support issues, and no clear prioritization of customer-impacting problems",
      after: "Balanced roadmap that addresses both growth and stability, clear bug tracking and prioritization, and reduced support burden on technical teams"
    }
  ];

  return (
    <section id="transformation" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="chip chip-secondary mb-3">The Transformation</span>
          <h2 className="section-title">From Pains to Gains: Your CX Evolution</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            See the concrete differences a strategic CX approach makes to the challenges you're currently facing.
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
