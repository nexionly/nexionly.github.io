
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
      { name: "Is This You?", href: "#is-this-you" },
      { name: "The Transformation", href: "#transformation" }
    ]
  },
  {
    name: "Our Program",
    type: "dropdown" as const,
    items: [
      { name: "Scale Your Success", href: "#services" },
      { name: "How It Works", href: "#process" }
    ]
  },
  {
    name: "Blog",
    href: "https://tomaswilliamsa.substack.com/",
    type: "external" as const
  }
];
