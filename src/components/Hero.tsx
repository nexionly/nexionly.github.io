
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import CTAButtons from "./CTAButtons";

const Hero = () => {
  // Reference to store the navbar height
  const navbarHeightRef = useRef(0);

  // Effect to measure navbar height on component mount and window resize
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('header');
      if (navbar) {
        navbarHeightRef.current = navbar.getBoundingClientRect().height;
      }
    };

    // Initial measurement
    updateNavbarHeight();
    
    // Update on resize
    window.addEventListener('resize', updateNavbarHeight);
    
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  // Enhanced scroll function with offset for fixed header
  const scrollToSection = (sectionId: string) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - navbarHeightRef.current - 20, // Additional 20px for spacing
          behavior: 'smooth'
        });
      } else {
        console.warn(`Section with ID "${sectionId}" not found.`);
      }
    } catch (error) {
      console.error("Error scrolling to section:", error);
    }
  };

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 dark:opacity-30 bg-[url('/lovable-uploads/1a87ec0d-f067-460d-ac76-c28a97e9d984.png')] bg-center bg-no-repeat bg-cover" />
      <div className="section-container flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="mb-4">
            <span className="chip chip-primary mb-3">CS Consultancy & Advisory</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Build a <span className="text-brand-pink">Customer Experience That Scales With You.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            What if you could proactively tackle churn, streamline renewals, and build customer loyalty before they become crises? Get expert guidance designed for early-stage founders navigating the challenges of growth.
          </p>
          <CTAButtons 
            primaryText="Build Scalable CX" 
            className="justify-center" 
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => scrollToSection('why-now')}
          className="text-muted-foreground hover:text-brand-pink transition-colors z-10 relative"
          aria-label="Scroll down to why now section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
