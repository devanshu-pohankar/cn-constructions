"use client";
import { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";

export default function RenovationSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="renovation" className="py-12 md:py-16 bg-white px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Technical Header */}
        <div className="mb-8">
          <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Transformation</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 tracking-tighter italic uppercase leading-none">
            Expert <span className="text-gray-400">Renovations</span>
          </h2>
        </div>

        {/* Controlled Height Slider Container */}
        <div 
          ref={containerRef}
          className="relative h-100 md:h-125 w-full overflow-hidden border border-gray-900 cursor-col-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* AFTER IMAGE */}
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale-[0.2]"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')` }}
          >
            <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1.5 text-[9px] font-black uppercase tracking-widest italic shadow-xl">
              Modern Masterpiece
            </div>
          </div>

          {/* BEFORE IMAGE (Clipped) */}
          <div 
            className="absolute inset-0 bg-cover bg-center border-r-2 border-white/50 grayscale"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070')`,
              width: `${sliderPos}%`,
              transition: 'none'
            }}
          >
            <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1.5 text-[9px] font-black uppercase tracking-widest italic">
              Original Structure
            </div>
          </div>

          {/* THE TECHNICAL HANDLE */}
          <div 
            className="absolute inset-y-0 w-0.5 bg-white z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 border-2 border-orange-600 flex items-center justify-center text-white">
              <MoveHorizontal size={18} className="text-orange-500" />
            </div>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-1.5 py-3 text-[7px] font-black uppercase tracking-tighter [writing-mode:vertical-lr]">
              SLIDE
            </div>
          </div>
        </div>

        {/* Compact Footer Note */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
           <div className="flex gap-3">
              <div className="h-1.5 w-1.5 bg-gray-900"></div>
              <div className="h-1.5 w-1.5 bg-orange-600"></div>
           </div>
           <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 italic">
             M-Tech Level Restoration • Amravati
           </p>
        </div>
      </div>
    </section>
  );
}