
import { useState } from "react";
import CTAButtons from "./CTAButtons";
import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState("support");
  
  const scenarios = [
    {
      id: "support",
      title: "Customer Support & Retention",
      icon: <TrendingUp className="h-6 w-6 text-brand-green" />,
      before: {
        title: "Reactive and Overwhelmed",
        description: "Support is seen as a cost center draining resources",
        points: [
          "Increasing customer churn with no clear retention strategy",
          "Inconsistent responses causing customer frustration",
          "No tracking system for recurring issues or feedback",
          "Team constantly putting out fires with no time for prevention",
          "Customer issues reaching executives and causing distractions"
        ],
        timeImpact: "Constant daily interruptions"
      },
      after: {
        title: "Proactive and Strategic",
        description: "Support becomes a growth driver and competitive advantage",
        points: [
          "Stable retention metrics with clear early warning systems",
          "Standardized response frameworks for consistency",
          "Data-driven improvement based on issue tracking",
          "Proactive outreach preventing problems before they occur",
          "Clear escalation paths protecting executive focus"
        ],
        timeImpact: "Fewer critical escalations"
      }
    },
    {
      id: "growth",
      title: "Growth & Scaling",
      icon: <TrendingUp className="h-6 w-6 text-brand-blue" />,
      before: {
        title: "Stalled and Inefficient",
        description: "Growth hampered by poor processes and missed opportunities",
        points: [
          "Declining ARR growth with no clear path to improvement",
          "Missed upsell and cross-sell opportunities",
          "Systems breaking down with each new customer cohort",
          "Inconsistent onboarding creating future support burden",
          "No clear visibility into customer health or expansion potential"
        ],
        timeImpact: "Extended sales cycles and slow growth"
      },
      after: {
        title: "Systematic and Predictable",
        description: "Scalable processes driving consistent expansion",
        points: [
          "Predictable expansion revenue with clear growth drivers",
          "Successful upsell/cross-sell playbooks driving revenue",
          "Scalable systems that grow with your customer base",
          "Streamlined onboarding creating advocates from day one",
          "Customer health scoring identifying expansion opportunities"
        ],
        timeImpact: "Revenue growth acceleration"
      }
    },
    {
      id: "product",
      title: "Product & Engineering",
      icon: <TrendingUp className="h-6 w-6 text-brand-pink" />,
      before: {
        title: "Reactive and Diverted",
        description: "Technical teams distracted by support instead of building",
        points: [
          "Mounting product bugs with no prioritization system",
          "Developers constantly pulled into customer support issues",
          "Feature development delayed by urgent fixes",
          "No structured feedback loop from customers to product",
          "Customer complaints driving roadmap rather than strategy"
        ],
        timeImpact: "Development velocity declining quarter over quarter"
      },
      after: {
        title: "Balanced and Focused",
        description: "Engineering team focused on strategic priorities",
        points: [
          "Balanced roadmap addressing both growth and stability",
          "Clear bug tracking and prioritization process",
          "Reduced support burden on technical teams",
          "Structured customer feedback informing product decisions",
          "Data-driven roadmap balancing innovation and improvements"
        ],
        timeImpact: "Increased development velocity"
      }
    }
  ];

  const activeScenario = scenarios.find(s => s.id === activeTab) || scenarios[0];

  return (
    <section id="transformation" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="chip chip-secondary mb-3">The Transformation</span>
          <h2 className="section-title">From Pains to Gains: Your CS Evolution</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            See the concrete differences a strategic CS approach makes to the challenges you're currently facing.
          </p>
        </div>

        {/* Scenario tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap flex items-center gap-2 transition-colors ${
                  activeTab === scenario.id
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => setActiveTab(scenario.id)}
              >
                {scenario.icon}
                {scenario.title}
              </button>
            ))}
          </div>
        </div>

        {/* Before/After cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
          {/* "Before" card */}
          <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-b from-red-50/80 to-white dark:from-red-900/10 dark:to-gray-800/50 border border-red-100/50 dark:border-red-900/20">
            <div className="p-6 flex items-center gap-3 border-b border-red-100 dark:border-red-900/20">
              <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/20">
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-600 dark:text-red-400">BEFORE</h3>
                <p className="text-sm font-medium text-red-700/70 dark:text-red-400/70">{activeScenario.before.title}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">{activeScenario.before.description}</p>
              
              <ul className="space-y-3 mb-6">
                {activeScenario.before.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <TrendingDown className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">{point}</p>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 mt-4 p-3 bg-red-50 dark:bg-red-900/10 rounded-md border border-red-100 dark:border-red-900/20">
                <Clock className="h-5 w-5 text-red-500" />
                <p className="text-sm font-medium text-red-700 dark:text-red-400">{activeScenario.before.timeImpact}</p>
              </div>
            </div>
          </Card>
          
          {/* "After" card */}
          <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-b from-green-50/80 to-white dark:from-green-900/10 dark:to-gray-800/50 border border-green-100/50 dark:border-green-900/20">
            <div className="p-6 flex items-center gap-3 border-b border-green-100 dark:border-green-900/20">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/20">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600 dark:text-green-400">AFTER</h3>
                <p className="text-sm font-medium text-green-700/70 dark:text-green-400/70">{activeScenario.after.title}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">{activeScenario.after.description}</p>
              
              <ul className="space-y-3 mb-6">
                {activeScenario.after.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">{point}</p>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 mt-4 p-3 bg-green-50 dark:bg-green-900/10 rounded-md border border-green-100 dark:border-green-900/20">
                <Clock className="h-5 w-5 text-green-500" />
                <p className="text-sm font-medium text-green-700 dark:text-green-400">{activeScenario.after.timeImpact}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <CTAButtons className="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
