"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] md:h-screen w-full overflow-hidden bg-black">
      
      {/* 1. The Video Background - Fixed to 'Landscape' feel on mobile */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60 md:opacity-50"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 flex h-full min-h-[70vh] md:min-h-screen flex-col items-center justify-center px-6 text-center pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          <span className="mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-orange-500">
            Er. Akshay Sagale | M-TECH (Civil)
          </span>
          
          <h1 className="flex flex-col md:flex-row items-center gap-0 md:gap-4 text-4xl sm:text-7xl md:text-7xl lg:text-9xl tracking-tighter leading-none">
            <span className="font-thin text-white uppercase italic">CN</span>
            <span className="font-black text-white uppercase">CONSTRUCTIONS</span>
          </h1>

          <div className="mt-8 h-[1px] w-24 bg-orange-600 md:w-48"></div>

          <p className="mt-8 max-w-lg text-sm font-light uppercase tracking-[0.2em] text-gray-300 md:max-w-2xl md:text-base px-4">
            Engineering luxury homes with Vastu precision <br className="hidden md:block" /> 
            & photorealistic 3D elevations.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-row gap-4 md:gap-6 items-center justify-center">
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden border border-white px-6 md:px-10 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white transition-all hover:text-black"
            >
              <span className="relative z-10">Portfolio</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
            
            <button 
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
               className="bg-orange-600 px-6 md:px-10 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-orange-700 shadow-xl"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </div>

      {/* 3. Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-4 md:flex">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="h-12 w-[1px] overflow-hidden bg-gray-800">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1/2 w-full bg-orange-600"
          />
        </div>
      </div>
    </section>
  );
}