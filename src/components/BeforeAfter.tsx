
import { useState } from "react";
import CTAButtons from "./CTAButtons";
import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState("retention");
  
  const transformations = [
    {
      id: "retention",
      title: "Retention & Customer Health",
      icon: <TrendingUp className="h-6 w-6 text-brand-green" />,
      before: {
        title: "Manual & Reactive",
        description: "Customers leaving without warning",
        points: [
          "Surprised by sudden customer departures",
          "No systematic way to identify at-risk accounts",
          "Reactive firefighting when issues arise",
          "Inconsistent customer experiences",
          "Limited visibility into customer health"
        ],
        timeImpact: "25%+ churn rate affecting growth"
      },
      after: {
        title: "Proactive & Systematic",
        description: "Predictable retention and expansion",
        points: [
          "Early warning system identifies at-risk accounts",
          "Structured health scoring guides interventions",
          "Proactive outreach prevents issues",
          "Consistent playbooks for key touchpoints",
          "Clear visibility into customer health trends"
        ],
        timeImpact: "10-25% reduction in churn within 6 months"
      }
    },
    {
      id: "efficiency",
      title: "Team Efficiency & Capacity",
      icon: <TrendingUp className="h-6 w-6 text-brand-blue" />,
      before: {
        title: "Overwhelmed & Manual",
        description: "Team drowning in repetitive tasks",
        points: [
          "CSMs spending 70%+ time on manual tasks",
          "Limited capacity for strategic customer work",
          "Inconsistent processes between team members",
          "No time for proactive customer engagement",
          "Team constantly feels behind and reactive"
        ],
        timeImpact: "Decreasing capacity as customer base grows"
      },
      after: {
        title: "Automated & Strategic",
        description: "Team focused on high-value activities",
        points: [
          "40%+ reduction in manual task workload",
          "Increased capacity for strategic initiatives",
          "Standardized processes across the team",
          "Regular proactive customer engagement",
          "Team focused on driving customer outcomes"
        ],
        timeImpact: "Double proactive customer engagement capacity"
      }
    },
    {
      id: "growth",
      title: "Revenue Retention & Growth",
      icon: <TrendingUp className="h-6 w-6 text-brand-pink" />,
      before: {
        title: "Unpredictable & Declining",
        description: "Fluctuating renewal rates threaten growth",
        points: [
          "Unpredictable renewal forecasting",
          "Missed expansion opportunities",
          "No systematic approach to upsells",
          "Inconsistent ROI demonstration to customers",
          "Revenue retention below industry benchmarks"
        ],
        timeImpact: "Net Revenue Retention under 100%"
      },
      after: {
        title: "Predictable & Expanding",
        description: "Revenue engine driving company growth",
        points: [
          "Accurate renewal forecasting",
          "Systematic expansion opportunity identification",
          "Structured approach to upsell conversations",
          "Regular ROI demonstration to customers",
          "Revenue retention exceeding industry benchmarks"
        ],
        timeImpact: "5-15% increase in Net Revenue Retention"
      }
    }
  ];

  const activeTransformation = transformations.find(t => t.id === activeTab) || transformations[0];

  return (
    <section id="transformation" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="chip chip-secondary mb-3">The Transformation</span>
          <h2 className="section-title">From Manual Chaos to Scalable Success</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            See the measurable differences our 90-day program delivers across key areas of your CS operation.
          </p>
        </div>

        {/* Scenario tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg">
            {transformations.map((transformation) => (
              <button
                key={transformation.id}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap flex items-center gap-2 transition-colors ${
                  activeTab === transformation.id
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
                onClick={() => setActiveTab(transformation.id)}
              >
                {transformation.icon}
                {transformation.title}
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
                <p className="text-sm font-medium text-red-700/70 dark:text-red-400/70">{activeTransformation.before.title}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">{activeTransformation.before.description}</p>
              
              <ul className="space-y-3 mb-6">
                {activeTransformation.before.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <TrendingDown className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">{point}</p>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 mt-4 p-3 bg-red-50 dark:bg-red-900/10 rounded-md border border-red-100 dark:border-red-900/20">
                <Clock className="h-5 w-5 text-red-500" />
                <p className="text-sm font-medium text-red-700 dark:text-red-400">{activeTransformation.before.timeImpact}</p>
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
                <p className="text-sm font-medium text-green-700/70 dark:text-green-400/70">{activeTransformation.after.title}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">{activeTransformation.after.description}</p>
              
              <ul className="space-y-3 mb-6">
                {activeTransformation.after.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">{point}</p>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 mt-4 p-3 bg-green-50 dark:bg-green-900/10 rounded-md border border-green-100 dark:border-green-900/20">
                <Clock className="h-5 w-5 text-green-500" />
                <p className="text-sm font-medium text-green-700 dark:text-green-400">{activeTransformation.after.timeImpact}</p>
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
