
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NavItemProps {
  item: {
    name: string;
    href?: string;
    type: "direct" | "dropdown" | "external";
    items?: Array<{ name: string; href: string }>;
  };
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  handleNavItemClick: (href: string) => void;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  activeDropdown,
  toggleDropdown,
  handleNavItemClick,
  isMobile = false,
}) => {
  if (item.type === "direct") {
    return (
      <a
        href={item.href}
        className={`${
          isMobile
            ? "py-3 block text-sm font-medium hover:text-brand-pink transition-colors duration-300"
            : "text-sm font-medium hover:text-brand-pink transition-colors duration-300"
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleNavItemClick(item.href!);
        }}
      >
        {item.name}
      </a>
    );
  }

  if (item.type === "external") {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isMobile
            ? "py-3 block text-sm font-medium hover:text-brand-pink transition-colors duration-300"
            : "text-sm font-medium hover:text-brand-pink transition-colors duration-300"
        }`}
      >
        {item.name}
      </a>
    );
  }

  return (
    <div>
      <button
        className={`${
          isMobile
            ? "py-3 w-full flex items-center justify-between text-sm font-medium hover:text-brand-pink transition-colors duration-300"
            : "text-sm font-medium hover:text-brand-pink transition-colors duration-300 flex items-center gap-1"
        }`}
        onClick={() => toggleDropdown(item.name)}
        aria-expanded={activeDropdown === item.name}
      >
        {item.name}
        {activeDropdown === item.name ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {activeDropdown === item.name && (
        <div
          className={
            isMobile
              ? "pl-4 border-l border-gray-200 dark:border-gray-700 ml-2 my-1"
              : "absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 border border-gray-100 dark:border-gray-700"
          }
        >
          {item.items?.map((subItem, subIndex) => (
            <a
              key={subIndex}
              href={subItem.href}
              className={
                isMobile
                  ? "py-2 block text-sm hover:text-brand-pink transition-colors duration-300"
                  : "block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-brand-pink transition-colors duration-300"
              }
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
  );
};

export default NavItem;
