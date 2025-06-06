
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="text-xl font-bold mb-2">
              Tomas Williams<span className="text-brand-pink">.</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              CS Consultancy & Advisory for Early-Stage Founders
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Tomas Williams. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/tomaswilliamsa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-brand-pink transition-colors cursor-pointer relative z-10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
