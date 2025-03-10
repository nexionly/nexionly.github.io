
import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CTAButtonsProps {
  primaryText?: string;
  secondaryText?: string;
  className?: string;
  arrangement?: "horizontal" | "vertical";
}

const CTAButtons: React.FC<CTAButtonsProps> = ({
  primaryText = "Book a 30-Min Call",
  secondaryText = "Get CX Essentials Checklist",
  className = "",
  arrangement = "horizontal"
}) => {
  const { toast } = useToast();

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

  return (
    <div className={`flex ${arrangement === "vertical" ? "flex-col" : "flex-row flex-wrap"} gap-4 ${className}`}>
      <a
        href="https://cal.com/tomas-williams/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary transition-all duration-300 hover:scale-105 z-10 relative group"
        role="button"
        aria-label="Book a 30-minute consultation with Tomas Williams"
      >
        <span className="flex items-center justify-center">
          {primaryText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </a>
      
      <button
        onClick={triggerChecklist}
        className="btn-outline transition-all duration-300 hover:scale-105 z-10 relative group"
        aria-label="Get CX Essentials Checklist"
      >
        <span className="flex items-center justify-center">
          {secondaryText}
          <CheckCircle className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        </span>
      </button>
    </div>
  );
};

export default CTAButtons;
