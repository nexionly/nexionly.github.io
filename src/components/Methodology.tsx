
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Methodology = () => {
  const [activeTab, setActiveTab] = useState("customer-centricity");
  
  const principles = [
    {
      id: "customer-centricity",
      title: "Customer-Centricity as the Core",
      agileConnection: "Customer satisfaction through early and continuous delivery of valuable software.",
      description: "The customer is not just a user; they are the central focus of all CS efforts. Every decision, iteration, and improvement should be guided by a deep understanding of customer needs, pain points, and desires.",
      details: [
        "Customer feedback is an integral part of every stage of the CS process",
        "Actively seeking customer input and empathizing with their experiences",
        "Prioritizing solutions that deliver genuine value"
      ],
      icon: "🎯"
    },
    {
      id: "iterative-improvement",
      title: "Iterative and Incremental Improvement",
      agileConnection: "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.",
      description: "Instead of implementing sweeping, monolithic CS changes, focus on making small, incremental improvements that can be tested, validated, and iterated upon quickly.",
      details: [
        "Test and validate changes with real customers",
        "Gather feedback and iterate based on the results",
        "Maintain flexible CS roadmaps that adapt to customer input"
      ],
      icon: "🔄"
    },
    {
      id: "cross-functional",
      title: "Cross-Functional Collaboration",
      agileConnection: "Business people and developers must work together daily throughout the project.",
      description: "Break down silos between departments (e.g., marketing, sales, support, product) and foster a culture of collaboration where teams work together.",
      details: [
        "Establish clear communication channels between teams",
        "Create processes for seamless information sharing",
        "Ensure alignment across all customer touchpoints"
      ],
      icon: "🤝"
    },
    {
      id: "feedback-loops",
      title: "Rapid Feedback Loops",
      agileConnection: "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.",
      description: "Establish mechanisms for gathering customer feedback at every stage of the customer journey and use it to make rapid adjustments.",
      details: [
        "Analyze feedback quickly to identify patterns",
        "Make rapid adjustments to CS processes and services",
        "Implement tools for real-time feedback analysis"
      ],
      icon: "📊"
    },
    {
      id: "empowered-teams",
      title: "Empowered and Self-Organizing Teams",
      agileConnection: "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.",
      description: "Empower CS teams to make decisions and take ownership of their work with the resources and support they need.",
      details: [
        "Foster a culture of trust and autonomy",
        "Provide necessary training and resources",
        "Create a responsive and adaptable CS environment"
      ],
      icon: "💪"
    },
    {
      id: "transparency",
      title: "Transparency and Open Communication",
      agileConnection: "The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.",
      description: "Share customer insights and feedback openly with all stakeholders and communicate CS goals and progress clearly.",
      details: [
        "Make information easily accessible to all teams",
        "Use visual aids and data dashboards",
        "Ensure alignment toward common goals"
      ],
      icon: "🔍"
    },
    {
      id: "data-driven",
      title: "Data-Driven Decision Making",
      agileConnection: "Working software is the primary measure of progress.",
      description: "Use data and analytics to measure the impact of CS initiatives and identify areas for improvement.",
      details: [
        "Track key performance indicators (KPIs)",
        "Prioritize CS investments based on data",
        "Objectively evaluate effectiveness of CS efforts"
      ],
      icon: "📈"
    }
  ];

  return (
    <section id="methodology" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="section-heading-container">
          <span className="chip chip-secondary mb-3">Methodology</span>
          <h2 className="section-title">Agile CS Principles: A Deep Dive</h2>
          <p className="section-subtitle">
            Applying agile methodologies to transform your customer success strategy
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <Tabs defaultValue="customer-centricity" className="w-full" onValueChange={setActiveTab}>
            {/* Mobile-specific horizontal scrollable tabs */}
            <div className="block md:hidden mb-6 overflow-x-auto pb-2 no-scrollbar">
              <TabsList className="inline-flex w-max space-x-2 bg-transparent">
                {principles.map((principle) => (
                  <TabsTrigger 
                    key={principle.id} 
                    value={principle.id}
                    className="flex items-center whitespace-nowrap bg-muted text-xs py-2 px-3"
                  >
                    <span className="mr-1.5">{principle.icon}</span>
                    <span>{principle.title.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {/* Desktop tabs with wrap */}
            <div className="hidden md:block mb-8">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
                {principles.map((principle) => (
                  <TabsTrigger 
                    key={principle.id} 
                    value={principle.id}
                    className="text-sm py-3 px-4 whitespace-nowrap bg-muted"
                  >
                    <span className="mr-2">{principle.icon}</span>
                    {principle.title.split(" ")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {principles.map((principle) => (
              <TabsContent 
                key={principle.id} 
                value={principle.id}
                className="animate-fade-in mt-4 md:mt-6"
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="md:w-2/3">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                        {principle.title}
                      </h3>
                      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-brand-blue">
                        <p className="text-xs md:text-sm font-medium mb-1 text-brand-blue">Agile Principle Connection:</p>
                        <p className="text-sm md:text-base italic">"{principle.agileConnection}"</p>
                        <p className="text-xs text-muted-foreground mt-1">- The Agile Manifesto</p>
                      </div>
                      <p className="text-sm md:text-lg mb-4 md:mb-6">
                        {principle.description}
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <div className="bg-brand-blue-light dark:bg-gray-800 p-4 md:p-6 rounded-lg">
                        <h4 className="font-medium text-brand-blue-dark dark:text-brand-blue mb-3 md:mb-4 text-sm md:text-base">CS Application:</h4>
                        <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                          {principle.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block mr-2 mt-1 text-brand-blue">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
