
import { Phone, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);
  const { toast } = useToast();

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

  // Function to trigger the ConvertKit popup
  const triggerChecklist = (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      // Check if the window object exists (for SSR compatibility)
      if (typeof window !== 'undefined') {
        // Direct DOM approach to trigger ConvertKit form
        const formToggle = document.createElement('a');
        formToggle.setAttribute('data-formkit-toggle', '3666d9f307');
        formToggle.href = 'https://mattegreenmedia.kit.com/3666d9f307';
        document.body.appendChild(formToggle);
        formToggle.click();
        document.body.removeChild(formToggle);
      }
    } catch (error) {
      console.error("Error triggering form:", error);
      toast({
        title: "Unable to open form",
        description: "Please try again in a moment",
        variant: "destructive",
      });
    }
  };

  // Toggle button for showing the secondary CTA
  const toggleCTA = () => {
    setShowSecondary(!showSecondary);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-300 
      ${isVisible && !isFooterVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      
      {/* Secondary CTA - Checklist */}
      <button
        onClick={triggerChecklist}
        className={`btn-secondary shadow-lg rounded-full p-4 transition-all duration-300
          ${showSecondary ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        aria-label="Get CS Essentials Checklist"
      >
        <span className="flex items-center gap-2">
          <CheckCircle size={18} />
          <span className="hidden sm:inline">Get Checklist</span>
        </span>
      </button>
      
      {/* Primary CTA - Book Call */}
      <div className="relative">
        <a
          href="https://cal.com/tomas-williams/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shadow-lg rounded-full p-4 transition-all duration-300
            hover:bg-brand-green-dark hover:scale-110 hover:shadow-xl group"
          aria-label="Book your CS strategy session with Tomas Williams"
          onClick={toggleCTA}
        >
          <span className="flex items-center gap-2">
            <Phone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
            <span className="hidden sm:inline">Book Scale Strategy Session</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingCallButton;
