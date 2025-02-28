
import { useState } from "react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We begin with a comprehensive analysis of your current CX operations, team structure, and customer journey. This helps identify key challenges and opportunities.",
      details: "This phase typically involves stakeholder interviews, data analysis, and reviews of existing processes and customer feedback."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Based on the assessment, we develop a tailored CX strategy and roadmap that aligns with your business goals and addresses identified gaps.",
      details: "This includes recommendations for team structure, processes, tools, and metrics to track success, all presented in a comprehensive action plan."
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "I work closely with your team to implement the recommended changes, providing guidance and hands-on support throughout the transition.",
      details: "This can include assisting with hiring, training team members, establishing workflows, and implementing new tools and processes."
    },
    {
      number: "04",
      title: "Evaluation & Refinement",
      description: "We continuously monitor and evaluate the performance of your CX operations, making adjustments as needed to ensure optimal results.",
      details: "Regular check-ins and data analysis help track progress and identify areas for further improvement to ensure your CX function drives sustainable growth."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-primary mb-3">Process</span>
          <h2 className="section-title">How We'll Work Together</h2>
          <p className="section-subtitle">
            A structured approach to transforming your customer experience operations
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
