
import React from "react";
import ThemeToggle from "../ThemeToggle";
import NavItem from "./NavItem";

interface DesktopNavProps {
  navStructure: Array<{
    name: string;
    href?: string;
    type: "direct" | "dropdown";
    items?: Array<{ name: string; href: string }>;
  }>;
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  handleNavItemClick: (href: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  navStructure,
  activeDropdown,
  toggleDropdown,
  handleNavItemClick,
}) => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navStructure.map((item, index) => (
        <div key={index} className="relative">
          <NavItem
            item={item}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            handleNavItemClick={handleNavItemClick}
          />
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
  );
};

export default DesktopNav;
