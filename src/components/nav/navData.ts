
export const navStructure = [
  { 
    name: "About", 
    href: "#about",
    type: "direct" as const
  },
  {
    name: "Why Us",
    type: "dropdown" as const,
    items: [
      { name: "Why Now", href: "#why-now" },
      { name: "Before & After", href: "#transformation" },
      { name: "Ideal Client", href: "#ideal-client" }
    ]
  },
  {
    name: "Services & Process",
    type: "dropdown" as const,
    items: [
      { name: "Services", href: "#services" },
      { name: "Process", href: "#process" },
      { name: "Methodology", href: "#methodology" }
    ]
  }
];
