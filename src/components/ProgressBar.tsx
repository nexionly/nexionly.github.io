
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScrollPos / scrollHeight) * 100);
      }
    };

    // Initial calculation
    updateScrollProgress();
    
    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress);
    
    // Clean up
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 w-full">
      <div 
        className="h-full bg-brand-pink transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;
