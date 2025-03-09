
export const navStructure = [
  { 
    name: "About", 
    href: "#about",
    type: "direct" as const
  },
  {
    name: "Services & Process",
    type: "dropdown" as const,
    items: [
      { name: "Services", href: "#services" },
      { name: "Before & After", href: "#transformation" },
      { name: "Process", href: "#process" },
      { name: "Methodology", href: "#methodology" }
    ]
  },
  {
    name: "Why Us",
    type: "dropdown" as const,
    items: [
      { name: "Why Now", href: "#why-now" },
      { name: "About Me", href: "#about-me" },
      { name: "Ideal Client", href: "#ideal-client" },
      { name: "Testimonials", href: "#testimonials" }
    ]
  }
];
