
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import IdealClient from "@/components/IdealClient";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`min-h-screen overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <IdealClient />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
