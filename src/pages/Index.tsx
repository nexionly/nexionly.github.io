
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import BackToTop from "@/components/BackToTop";
import WhyNow from "@/components/WhyNow";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Update document title to reflect Customer Success focus
    document.title = "Scale Your CS | 90-Day CS Transformation Program";
  }, []);

  return (
    <main className={`min-h-screen overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 dark:bg-gray-900 dark:text-white`}>
      <Navbar />
      <Hero />
      <WhyNow />
      <BeforeAfter />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCallButton />
      <BackToTop />
    </main>
  );
};

export default Index;
