
import { CheckCircle2, Clock, LineChart, TrendingUp } from "lucide-react";
import CTAButtons from "./CTAButtons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const programBenefits = [
    {
      title: "The 90-Day Scale Blueprint",
      icon: <TrendingUp className="h-10 w-10 text-brand-green mb-2" />,
      description: "A tailored roadmap we develop with you, focusing on your specific stage, resources, and goals.",
      benefits: [
        "Custom CS strategy aligned to your growth goals",
        "Clear implementation timeline and milestones",
        "Prioritized action items for maximum impact"
      ],
      outcomes: "A clear path forward that eliminates guesswork and creates immediate momentum.",
      chipText: "Strategy",
      chipClass: "chip-primary",
      gradient: "from-brand-green-light to-white dark:from-brand-green-light/20 dark:to-gray-800/50"
    },
    {
      title: "Plug & Play Process Library",
      icon: <Clock className="h-10 w-10 text-brand-blue mb-2" />,
      description: "Ready-to-implement templates and playbooks for critical CS activities to save you months of development time.",
      benefits: [
        "Customer health scoring framework",
        "Onboarding and QBR templates",
        "Renewal management playbooks"
      ],
      outcomes: "Launch proven CS processes in days instead of months, accelerating your time to value.",
      chipText: "Implementation",
      chipClass: "chip-secondary",
      gradient: "from-brand-blue-light to-white dark:from-brand-blue-light/20 dark:to-gray-800/50"
    },
    {
      title: "Automation & Scaling Support",
      icon: <LineChart className="h-10 w-10 text-brand-pink mb-2" />,
      description: "Expert guidance on implementing the right automations and tools to scale your CS operation efficiently.",
      benefits: [
        "CS tech stack optimization",
        "Key workflow automation",
        "Data-driven decision frameworks"
      ],
      outcomes: "Free up 40% of your team's time from manual tasks for high-value customer interactions.",
      chipText: "Optimization",
      chipClass: "chip-accent",
      gradient: "from-brand-pink-light to-white dark:from-brand-pink-light/20 dark:to-gray-800/50"
    }
  ];

  return (
    <section id="program" className="py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-accent mb-3">Scale Your Success Program</span>
          <h2 className="section-title">Transform Your CS in 90 Days</h2>
          <p className="section-subtitle">
            A proven framework to help early-stage CS leaders build scalable processes that drive retention and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programBenefits.map((benefit, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-0 bg-gradient-to-b ${benefit.gradient} shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <span className={`chip ${benefit.chipClass} mb-2`}>{benefit.chipText}</span>
                </div>
                <div className="mb-2">{benefit.icon}</div>
                <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                <CardDescription className="text-base mt-2">{benefit.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-2">
                <div className="space-y-3 mb-4">
                  {benefit.benefits.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="text-brand-green h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Key Outcome</h4>
                  <p className="text-sm font-medium">{benefit.outcomes}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-center">The "Churn-Buster" Guarantee</h3>
          <p className="text-center mb-6 max-w-3xl mx-auto">
            We're so confident in our approach that if you don't see a measurable improvement in key retention metrics (minimum 10% reduction in churn or 5% increase in NRR) within 6 months of full implementation, we'll provide an additional 3 months of coaching absolutely free.
          </p>
          <div className="text-center">
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
