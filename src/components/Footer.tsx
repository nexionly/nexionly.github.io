
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
    <footer className="bg-white border-t border-gray-100">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="text-xl font-bold mb-2">
              Matte Green<span className="text-brand-pink">.</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              CX Consultancy & Advisory for Series-A Founders
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Matte Green Media. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-pink transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-pink transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-brand-pink transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
