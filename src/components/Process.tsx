
import { useState } from "react";
import CTAButtons from "./CTAButtons";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const timeline = [
    {
      number: "01",
      title: "First 30 Days: Foundation",
      description: "We lay the groundwork for your CS transformation with quick wins and a clear roadmap.",
      details: "This phase includes a comprehensive assessment of your current CS operations, creating your tailored 90-day Scale Blueprint, implementing 1-2 immediate process improvements for quick wins, and setting up initial automation to free team capacity right away."
    },
    {
      number: "02",
      title: "Days 30-60: Implementation",
      description: "Your core CS playbooks and processes come to life, creating a structured approach to customer success.",
      details: "During this critical phase, we implement your customer health scoring framework, develop standardized playbooks for key customer touchpoints, integrate your first CS tech tools, and train your team on the new processes while monitoring early results."
    },
    {
      number: "03",
      title: "Days 60-90: Optimization",
      description: "We refine and optimize the new systems based on real-world feedback and data.",
      details: "We'll analyze initial results, make necessary adjustments to your processes and automations, implement additional efficiency improvements based on team feedback, and develop advanced segmentation for more targeted customer engagement."
    },
    {
      number: "04",
      title: "Beyond 90 Days: Scale & Grow",
      description: "Your new CS engine continues to evolve and deliver increasing returns over time.",
      details: "You'll see measurable improvements in key metrics, have a fully operational CS framework that can scale with your growth, access ongoing optimization support for continuous improvement, and have established a data-driven foundation for strategic decisions."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-primary mb-3">How It Works</span>
          <h2 className="section-title">Your 90-Day Journey to Scalable CS</h2>
          <p className="section-subtitle">
            A structured timeline that delivers measurable results at each milestone
          </p>
        </div>

        <div className="grid md:grid-cols-7 gap-8">
          <div className="md:col-span-2">
            <div className="sticky top-24 space-y-6">
              {timeline.map((phase, index) => (
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
                    Phase {phase.number}
                  </span>
                  <h3 className="text-lg font-medium mt-1">{phase.title}</h3>
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 animate-fade-in">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 h-full">
              <div className="mb-6">
                <span className="text-6xl font-bold text-brand-green opacity-20">
                  {timeline[activeStep].number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {timeline[activeStep].title}
                </h3>
              </div>
              <p className="text-lg mb-6">
                {timeline[activeStep].description}
              </p>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <h4 className="font-medium mb-2">What happens during this phase:</h4>
                <p className="text-muted-foreground">
                  {timeline[activeStep].details}
                </p>
              </div>
              
              {activeStep === timeline.length - 1 && (
                <div className="mt-8">
                  <CTAButtons primaryText="Start Your 90-Day Transformation" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
