
import React from "react";
import ThemeToggle from "../ThemeToggle";
import NavItem from "./NavItem";
import { X, Menu } from "lucide-react";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  navStructure: Array<{
    name: string;
    href?: string;
    type: "direct" | "dropdown" | "external";
    items?: Array<{ name: string; href: string }>;
  }>;
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  handleNavItemClick: (href: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  navStructure,
  activeDropdown,
  toggleDropdown,
  handleNavItemClick,
}) => {
  return (
    <>
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button
          className="text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 right-0 shadow-md py-4 px-6 animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navStructure.map((item, index) => (
              <div key={index}>
                <NavItem
                  item={item}
                  activeDropdown={activeDropdown}
                  toggleDropdown={toggleDropdown}
                  handleNavItemClick={handleNavItemClick}
                  isMobile={true}
                />
              </div>
            ))}
            <a
              href="https://cal.com/tomas-williams/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm block text-center mt-4 hover:scale-105 transition-transform duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Book 30-Min Call
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
