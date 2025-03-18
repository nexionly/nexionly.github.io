
import { CheckCircle2 } from "lucide-react";
import CTAButtons from "./CTAButtons";

const IdealClient = () => {
  const clientCriteria = [
    "Founders and co-founders of B2B SaaS organizations at the early stages of growth.",
    "Have secured initial funding or are bootstrapping with a focus on scaling their operations and customer base.",
    "Experiencing challenges like increasing customer churn, declining renewal rates, or difficulties in driving upsells.",
    "Finding that support tickets and customer issues are piling up faster than your team can resolve them.",
    "Have relied on ad-hoc customer support or founder-led customer success, and recognize you're outgrowing this model.",
    "Lack internal expertise in building and leading CX teams and need external guidance to avoid costly mistakes."
  ];

  return (
    <section id="ideal-client" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="chip chip-secondary mb-3">Ideal Client</span>
            <h2 className="section-title">Is This You?</h2>
            <p className="section-subtitle">
              My expertise is most valuable to companies facing specific growth challenges.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 md:p-10 animate-fade-up">
            <h3 className="text-xl font-bold mb-6 border-b pb-4 dark:border-gray-700">You're a Great Fit If:</h3>
            <div className="space-y-4">
              {clientCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="text-brand-green h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <p>{criteria}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t dark:border-gray-700">
              <h4 className="font-medium mb-3">Ready to Address These Challenges?</h4>
              <p className="text-muted-foreground mb-6">
                If your company is facing these growing pains, my specialized expertise can help you build a customer experience function that resolves current issues and creates sustainable growth.
              </p>
              <CTAButtons 
                primaryText="Book a 30-Min Consultation" 
                secondaryText="Get CX Essentials Checklist"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealClient;
