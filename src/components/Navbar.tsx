
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleNavItemClick = (href: string) => {
    setIsMenuOpen(false);
    closeDropdowns();
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight - 20,
        behavior: 'smooth'
      });
    }
  };

  // Group navigation items into logical categories
  const navStructure = [
    { 
      name: "About", 
      href: "#about",
      type: "direct"
    },
    {
      name: "Services & Process",
      type: "dropdown",
      items: [
        { name: "Services", href: "#services" },
        { name: "Before & After", href: "#transformation" },
        { name: "Process", href: "#process" },
        { name: "Methodology", href: "#methodology" }
      ]
    },
    {
      name: "Why Us",
      type: "dropdown",
      items: [
        { name: "Why Now", href: "#why-now" },
        { name: "About Me", href: "#about-me" },
        { name: "Ideal Client", href: "#ideal-client" },
        { name: "Testimonials", href: "#testimonials" }
      ]
    },
    { 
      name: "Newsletter", 
      href: "#newsletter",
      type: "direct"
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3 dark:bg-gray-900/90"
          : "bg-transparent py-5 dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold flex items-center">
          <img src="/lovable-uploads/8e624975-e3bc-47af-a999-9f9f79ab165f.png" alt="Tomas Williams" className="w-8 h-8 mr-2 rounded-full object-cover" />
          Tomas Williams
          <span className="text-brand-pink">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navStructure.map((item, index) => (
            <div key={index} className="relative">
              {item.type === "direct" ? (
                <a
                  href={item.href}
                  className="text-sm font-medium hover:text-brand-pink transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item.href!);
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <div className="relative">
                  <button
                    className="text-sm font-medium hover:text-brand-pink transition-colors duration-300 flex items-center gap-1"
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                  >
                    {item.name}
                    {activeDropdown === item.name ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 border border-gray-100 dark:border-gray-700">
                      {item.items?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-brand-pink transition-colors duration-300"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavItemClick(subItem.href);
                          }}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <ThemeToggle />
          <a
            href="https://cal.com/tomas-williams"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm hover:scale-105 transition-transform duration-300 group"
          >
            Get Your CX Strategy Session
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 right-0 shadow-md py-4 px-6 animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navStructure.map((item, index) => (
              <div key={index}>
                {item.type === "direct" ? (
                  <a
                    href={item.href}
                    className="py-3 block text-sm font-medium hover:text-brand-pink transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavItemClick(item.href!);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <div>
                    <button
                      className="py-3 w-full flex items-center justify-between text-sm font-medium hover:text-brand-pink transition-colors duration-300"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                    >
                      {item.name}
                      {activeDropdown === item.name ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="pl-4 border-l border-gray-200 dark:border-gray-700 ml-2 my-1">
                        {item.items?.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="py-2 block text-sm hover:text-brand-pink transition-colors duration-300"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavItemClick(subItem.href);
                            }}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://cal.com/tomas-williams"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm block text-center mt-4 hover:scale-105 transition-transform duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Your CX Strategy Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
