
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

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
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5 dark:opacity-10 bg-[url('/lovable-uploads/1a87ec0d-f067-460d-ac76-c28a97e9d984.png')] bg-center bg-no-repeat bg-cover" />
      <div className="section-container flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="mb-4">
            <span className="chip chip-primary mb-3">CX Consultancy & Advisory</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Building Exceptional <span className="text-brand-pink">Customer Experiences</span> for Series-A Founders
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            I help post Series-A founders lay the foundation for CX teams that deliver sustainable growth and long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://cal.com/tomas-williams" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary transition-transform duration-300 hover:scale-105 z-10 relative"
              role="button"
              aria-label="Book a call with Tomas Williams"
            >
              Book a Call
            </a>
            <button 
              onClick={() => scrollToSection('services')}
              className="btn-outline transition-transform duration-300 hover:scale-105 z-10 relative"
              aria-label="Learn more about our services"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-brand-pink transition-colors z-10 relative"
          aria-label="Scroll down to about section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
