
import { useState, useEffect } from "react";
import NavLogo from "./nav/NavLogo";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";
import { navStructure } from "./nav/navData";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3 dark:bg-gray-900/90"
          : "bg-transparent py-5 dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLogo />
        
        <DesktopNav 
          navStructure={navStructure}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          handleNavItemClick={handleNavItemClick}
        />
        
        <MobileNav 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navStructure={navStructure}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          handleNavItemClick={handleNavItemClick}
        />
      </div>
    </header>
  );
};

export default Navbar;
