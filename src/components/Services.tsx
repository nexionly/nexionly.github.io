
import { CheckCircle2, Compass, Users, LineChart } from "lucide-react";
import CTAButtons from "./CTAButtons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "CX Strategy Development",
      icon: <Compass className="h-10 w-10 text-brand-green mb-2" />,
      description: "Create a comprehensive CX roadmap aligned with your business goals and growth trajectory.",
      benefits: [
        "Tailored to your company's growth stage",
        "Frameworks that scale with your business",
        "Integration with your product roadmap"
      ],
      outcomes: "Reduce customer acquisition costs through improved retention and referrals.",
      bestFor: "Startups preparing for growth or companies experiencing retention issues.",
      chipText: "Strategy",
      chipClass: "chip-primary",
      gradient: "from-brand-green-light to-white dark:from-brand-green-light/20 dark:to-gray-800/50"
    },
    {
      title: "Team Building & Transition",
      icon: <Users className="h-10 w-10 text-brand-blue mb-2" />,
      description: "Transform founder-led support into a strategic, customer-focused CX operation.",
      benefits: [
        "Hiring & team structure guidance",
        "Process development & optimization",
        "Leadership training & mentoring"
      ],
      outcomes: "Free up significant founder/executive time previously spent on customer issues.",
      bestFor: "Founders who are currently handling most customer interactions personally.",
      chipText: "Team Building",
      chipClass: "chip-secondary",
      gradient: "from-brand-blue-light to-white dark:from-brand-blue-light/20 dark:to-gray-800/50"
    },
    {
      title: "Customer Experience Optimization",
      icon: <LineChart className="h-10 w-10 text-brand-pink mb-2" />,
      description: "Identify and resolve friction points in your customer journey to boost loyalty and retention.",
      benefits: [
        "Customer journey mapping",
        "Experience audits & recommendations",
        "Metrics definition & analytics setup"
      ],
      outcomes: "Increase customer lifetime value through improved retention and upsells.",
      bestFor: "Companies with a growing customer base but increasing churn or support issues.",
      chipText: "Optimization",
      chipClass: "chip-accent",
      gradient: "from-brand-pink-light to-white dark:from-brand-pink-light/20 dark:to-gray-800/50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-accent mb-3">Services</span>
          <h2 className="section-title">How I Can Help Your Business</h2>
          <p className="section-subtitle">
            Turn customer experience challenges into growth opportunities with specialized consulting tailored for early-stage companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-0 bg-gradient-to-b ${service.gradient} shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <span className={`chip ${service.chipClass} mb-2`}>{service.chipText}</span>
                </div>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-2">
                <div className="space-y-3 mb-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="text-brand-green h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Typical Outcome</h4>
                  <p className="text-sm font-medium">{service.outcomes}</p>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col items-start pt-0">
                <div className="w-full">
                  <h4 className="text-sm font-bold uppercase text-muted-foreground mb-1">Best For</h4>
                  <p className="text-sm">{service.bestFor}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to transform your customer experience from a pain point to a competitive advantage? Let's discuss your specific challenges and build a tailored solution.
          </p>
          <CTAButtons className="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default Services;
