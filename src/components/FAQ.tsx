import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly will I see results from the CS transformation?",
      answer: "Most clients see initial improvements in customer engagement within the first 30 days. The full transformation typically delivers measurable results in customer retention and team efficiency within 90 days. We track specific KPIs like response times, customer satisfaction scores, and churn reduction to ensure tangible progress."
    },
    {
      question: "What if my team is already overwhelmed? Can they handle this program?",
      answer: "This program is specifically designed for overwhelmed teams. We focus on automation and process optimization to reduce your team's workload, not increase it. The goal is to free up 40-60% of their time spent on manual tasks so they can focus on high-impact customer success activities."
    },
    {
      question: "Do I need to hire new people to implement these strategies?",
      answer: "No. The entire program is built around maximizing your existing team's potential. We focus on smart automation, better processes, and strategic delegation rather than adding headcount. Many clients actually find they can handle more customers with their current team size."
    },
    {
      question: "What's included in the free 30-minute strategy session?",
      answer: "In our call, we'll audit your current CS operations, identify your biggest bottlenecks, and create a custom roadmap for your 90-day transformation. You'll leave with at least 3 actionable strategies you can implement immediately, regardless of whether you work with us."
    },
    {
      question: "How is this different from other CS consulting services?",
      answer: "Most consultants give you theory and leave you to figure out implementation. We provide hands-on guidance with proven frameworks, templates, and systems that have worked for 100+ early-stage companies. Plus, we focus specifically on the unique challenges of scaling CS at early-stage startups."
    },
    {
      question: "What size companies do you work with?",
      answer: "We specialize in early-stage startups and scale-ups with 10-500 customers who are looking to professionalize their customer success function. If you're feeling the pain of manual processes and want to scale without burning out your team, you're our ideal client."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-primary mb-3">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about transforming your customer success
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? Let's discuss your specific situation.
          </p>
          <a
            href="https://cal.com/tomas-williams/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hover:scale-105 transition-transform duration-300"
          >
            Book Your Free Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;