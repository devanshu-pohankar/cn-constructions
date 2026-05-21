"use client";
import { motion } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ParallaxSection from "@/components/ParallaxSection"; 
import Gallery from "@/components/Gallery";
import RenovationSlider from "@/components/RenovationSlider";
import Contact from "@/components/Contact";
import Process from "@/components/Process"; 
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// The Reveal Wrapper Component
const Reveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <Hero />
      
      <div className="space-y-0">
        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Gallery />
        </Reveal>

        <ParallaxSection />

        <Reveal>
          <Services />
        </Reveal>

        <Reveal>
          <RenovationSlider />
        </Reveal>

        <Reveal>
          <Process />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}