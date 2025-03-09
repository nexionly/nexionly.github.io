
import React from "react";

const NavLogo: React.FC = () => {
  return (
    <a href="#" className="text-xl font-bold flex items-center">
      <img 
        src="/lovable-uploads/8e624975-e3bc-47af-a999-9f9f79ab165f.png" 
        alt="Tomas Williams" 
        className="w-8 h-8 mr-2 rounded-full object-cover" 
      />
      Tomas Williams
      <span className="text-brand-pink">.</span>
    </a>
  );
};

export default NavLogo;
