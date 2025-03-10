
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Visibility logic
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Circle styling with progress indicator
  const circleSize = 48; // Size in pixels
  const strokeWidth = 3;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-md
        transition-all duration-300 hover:bg-brand-pink hover:text-white hover:scale-110 flex items-center justify-center
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
      style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
      aria-label="Back to top"
    >
      {/* SVG for progress circle */}
      <svg 
        className="absolute top-0 left-0 -rotate-90"
        width={circleSize} 
        height={circleSize}
      >
        {/* Background circle */}
        <circle
          cx={circleSize/2}
          cy={circleSize/2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeOpacity="0.2"
        />
        {/* Progress circle */}
        <circle
          cx={circleSize/2}
          cy={circleSize/2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Arrow icon */}
      <ArrowUp size={20} className="relative z-10" />
    </button>
  );
};

export default BackToTop;
