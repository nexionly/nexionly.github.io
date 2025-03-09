
import React from "react";

const NavLogo: React.FC = () => {
  return (
    <a href="#" className="text-xl font-bold flex items-center">
      <img 
        src="/lovable-uploads/c70dc170-3220-44d9-a3b1-fcbbea7c82bb.png" 
        alt="Tomas Williams" 
        className="w-8 h-8 mr-2 rounded-full object-cover" 
      />
      Tomas Williams
      <span className="text-brand-pink">.</span>
    </a>
  );
};

export default NavLogo;
