
import { useState } from "react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: "01",
      title: "Pain Point Identification",
      description: "We begin by diagnosing the specific CX issues impacting your growth, from rising churn to missed upsell opportunities and support backlogs.",
      details: "This phase includes reviewing your customer data, examining support tickets, analyzing churn reasons, conducting stakeholder interviews, and mapping the current customer journey to identify friction points."
    },
    {
      number: "02",
      title: "Solution Architecture",
      description: "Based on the assessment, we develop a tailored CX strategy that addresses your specific pain points and aligns with your growth goals and resources.",
      details: "This includes designing scalable support workflows, creating renewal playbooks, establishing upsell frameworks, and outlining the team structure and tools needed to execute effectively."
    },
    {
      number: "03",
      title: "Implementation & Transition",
      description: "I work alongside your team to implement solutions that immediately address your most pressing CX issues while building for long-term scalability.",
      details: "This can include setting up ticket management systems, creating response templates, establishing escalation paths, implementing customer health scores, and training team members on new processes."
    },
    {
      number: "04",
      title: "Measurement & Refinement",
      description: "We establish clear metrics to track improvements in retention, support efficiency, and revenue expansion, making adjustments to optimize results.",
      details: "Regular reviews track progress against baseline metrics, identify new challenges that emerge during growth, and continuously refine your CX approach to maintain high performance as you scale."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-primary mb-3">Process</span>
          <h2 className="section-title">From Pain to Performance</h2>
          <p className="section-subtitle">
            A structured approach to solving your customer experience challenges and driving growth
          </p>
        </div>

        <div className="grid md:grid-cols-7 gap-8">
          <div className="md:col-span-2">
            <div className="sticky top-24 space-y-6">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeStep === index
                      ? "bg-brand-green-light border-l-4 border-brand-green"
                      : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <span className={`text-sm font-medium ${
                    activeStep === index
                      ? "text-brand-green"
                      : "text-muted-foreground"
                  }`}>
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-medium mt-1">{step.title}</h3>
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 animate-fade-in">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 h-full">
              <div className="mb-6">
                <span className="text-6xl font-bold text-brand-green opacity-20">
                  {steps[activeStep].number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {steps[activeStep].title}
                </h3>
              </div>
              <p className="text-lg mb-6">
                {steps[activeStep].description}
              </p>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <h4 className="font-medium mb-2">What this includes:</h4>
                <p className="text-muted-foreground">
                  {steps[activeStep].details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
