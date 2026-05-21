"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // The image moves slower than the scroll, creating the parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Parallax Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
          alt="Modern Architecture"
          className="h-[120%] w-full object-cover grayscale brightness-50"
        />
      </motion.div>

      {/* Static Overlay Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter"
        >
          Precision <span className="text-orange-600">Engineering.</span>
        </motion.h2>
        <p className="text-gray-300 mt-4 max-w-xl uppercase tracking-widest text-xs md:text-sm font-bold">
          From Foundation to Finishes — Every Millimeter Matters.
        </p>
      </div>
    </section>
  );
}