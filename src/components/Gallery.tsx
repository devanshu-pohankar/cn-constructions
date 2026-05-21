"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Maximize2 } from "lucide-react";

const projects = [
  { id: 1, title: "Modern Villa", loc: "Sai Nagar", cat: "Real Site", img: "/projects/site-1-3d.jpg" },
  { id: 2, title: "Luxury Duplex", loc: "Rajapeth", cat: "3D View", img: "/projects/site-1-real.jpg" },
  { id: 3, title: "Commercial Hub", loc: "Morshi Road", cat: "Real Site", img: "/projects/site-2-rcc.jpg" },
  { id: 4, title: "Smart Home", loc: "Rahatgaon", cat: "3D View", img: "/projects/site-2-rcc.jpg" },
];

const categories = ["All", "Real Site", "3D View"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

  return (
    <section id="gallery" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-2 tracking-tighter italic uppercase leading-none">
              Featured <span className="text-gray-400">Works</span>
            </h2>
          </div>
          
          {/* Filter Pills */}
          <div className="flex bg-gray-100 p-1 border border-gray-200">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat ? "bg-gray-900 text-white shadow-lg" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[3/2] overflow-hidden bg-gray-50 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedImg(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" 
                />
                
                {/* Overlay: Technical & Bold */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                      <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.cat}</p>
                      <h4 className="text-white text-2xl font-black tracking-tighter uppercase mb-1">{item.title}</h4>
                      <div className="flex items-center gap-2 text-gray-400 text-xs font-bold italic">
                        <ArrowUpRight size={14} className="text-orange-600" />
                        {item.loc}, Amravati
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-3 text-white border border-white/20 group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Fullscreen Image View */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-orange-600 transition-colors">
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg} 
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}