"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // compass rotation on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [-330, 360]);

  return (
    <section ref={containerRef} id="about" className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="lg:col-span-5 relative group">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-4/5 border border-gray-200 p-4"
            >
              <img 
                src="/team/akshay-sagale.jpg" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Er. Akshay Sagale" 
              />
              <div className="absolute top-10 -right-6 bg-orange-600 text-white p-4 shadow-2xl">
                <p className="text-2xl font-black italic leading-none">M-TECH</p>
              </div>
            </motion.div>
          </div>

          {/* Right: about Technical Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px]">The Principal Engineer</span>
              
              <div className="flex items-start justify-between relative max-w-fit md:max-w-none">
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mt-4 tracking-tighter italic uppercase leading-[0.9]">
                  ER. AKSHAY <br /> <span className="text-gray-400">SAGALE</span>
                </h2>

                <motion.div 
                  style={{ rotate }}
                  className="hidden md:block ml-8 mt-4 shrink-0"
                >
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-gray-900 opacity-80">
                    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M50 5 L55 45 L50 40 L45 45 L50 5Z" fill="#ea580c" />
                    <text x="45" y="10" fill="currentColor" className="text-[10px] font-black italic">N</text>
                    <circle cx="50" cy="50" r="2" stroke="currentColor" strokeWidth="0.5" fill="white" />
                  </svg>
                </motion.div>
              </div>
              <p className="mt-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
                DCE • BE • M-TECH (CIVIL & STRUCTURAL)
              </p>
            </motion.div>

            <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-orange-600 pl-6 pt-2">
              "Structural stability is not an option; it is a science. At CN Constructions, 
              we combine Master's level engineering with Vastu-centric design to create 
              homes that stand the test of time."
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-50">
              <div>
                <h4 className="font-black uppercase text-[10px] tracking-widest mb-2 text-orange-600">Specialization</h4>
                <p className="text-gray-500 text-xs font-bold uppercase">RCC Structures & Heavy Foundation Design</p>
              </div>
              <div>
                <h4 className="font-black uppercase text-[10px] tracking-widest mb-2 text-orange-600">Experience</h4>
                <p className="text-gray-500 text-xs font-bold uppercase">Leading 150+ Projects in Amravati Region</p>
              </div>
            </div>
                          {/* --- DRAFTING LINE WITH RULER SCALE --- */}
              <div className="relative w-full mt-8 mb-4">
                {/* The Animated Line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  style={{ originX: 0 }}
                  className="h-[2.5px] w-full bg-gray-900"
                />

                {/* Ruler Markings (Dots/Lines) */}
                <div className="absolute top-0 left-0 w-full flex justify-between px-[2.5px]">
                  {[...Array(21)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-[1.1px] transition-colors duration-500 ${
                        i % 5 === 0 ? 'h-3 bg-orange-600' : 'h-1.5 bg-gray-300'
                      }`} 
                    />
                  ))}
                </div>

                {/* Label */}
                <div className="absolute -top-5 right-0">
                  <span className="text-[7px] font-black text-gray-300 uppercase tracking-widest">Scale 1:100 @ A3</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}