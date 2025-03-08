
import { Phone, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
      
      // Check if footer is visible
      const footer = document.querySelector('footer');
      if (footer) {
        const footerPos = footer.getBoundingClientRect();
        const isFooterInView = footerPos.top < window.innerHeight && footerPos.bottom > 0;
        setIsFooterVisible(isFooterInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://cal.com/tomas-williams"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 btn-primary shadow-lg rounded-full p-4 z-50 transition-all duration-300 
        ${isVisible && !isFooterVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        hover:bg-brand-green-dark hover:scale-110 hover:shadow-xl group`}
      aria-label="Book your CX strategy session with Tomas Williams"
    >
      <span className="flex items-center gap-2">
        <Phone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
        <span className="hidden sm:inline">Get CX Strategy</span>
        <ArrowRight size={14} className="hidden sm:inline transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
};

export default FloatingCallButton;
