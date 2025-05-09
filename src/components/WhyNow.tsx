
import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import CTAButtons from "./CTAButtons";

const WhyNow = () => {
  const painPoints = [
    {
      icon: <AlertCircle className="h-10 w-10 text-brand-red" />,
      title: "Drowning in Manual Tasks",
      description: "You spend more time on repetitive, manual work than on driving strategic customer outcomes."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-brand-blue" />,
      title: "Reactive Firefighting",
      description: "Your team constantly finds itself reacting to customer issues instead of preventing them."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-brand-red" />,
      title: "Scaling Concerns",
      description: "As your customer base grows, you worry your current processes won't scale without breaking."
    }
  ];

  const idealClientCriteria = [
    "You're an early-stage CS Leader struggling to keep up as your customer base grows",
    "You're worried your current manual processes won't scale effectively",
    "You want to reduce churn and boost retention without burning out your team",
    "You need a systematic approach to demonstrate CS ROI to leadership",
    "You're ready to transition from reactive to proactive customer management"
  ];

  return (
    <section id="is-this-you" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/75 dark:to-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="chip chip-primary mb-3">Is This You?</span>
          <h2 className="section-title">Early-Stage CS Leader Facing Growth Challenges?</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            If you're struggling with these common pain points, our Scale Your Success program was designed specifically for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex justify-center">{point.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center">{point.title}</h3>
              <p className="text-muted-foreground text-center">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 md:p-10 animate-fade-up">
            <h3 className="text-xl font-bold mb-6 border-b pb-4 dark:border-gray-700">You're a Great Fit For Our Program If:</h3>
            <div className="space-y-4">
              {idealClientCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-brand-green h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <p>{criteria}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t dark:border-gray-700">
              <h4 className="font-medium mb-3">Ready to Transform Your CS Approach?</h4>
              <p className="text-muted-foreground mb-6">
                Stop battling churn and manual chaos. Our proven, systematic approach will help you build a scalable CS function that drives measurable outcomes and creates sustainable growth.
              </p>
              <CTAButtons 
                primaryText="Book a Scale Strategy Session" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
