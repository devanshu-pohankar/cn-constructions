"use client";
import { motion } from "framer-motion";
import { Compass, Building2, Zap, Landmark, ArrowUpRight } from "lucide-react";

const services = [
  { 
    number: "01",
    title: "Vastu Planning", 
    desc: "Merging ancient Vastu science with modern architectural layouts for positive living spaces.",
    icon: <Compass className="w-10 h-10" />,
    color: "bg-orange-50"
  },
  { 
    number: "02",
    title: "Structural RCC", 
    desc: "M-Tech certified structural designs ensuring earthquake resistance and lifelong stability.",
    icon: <Building2 className="w-10 h-10" />,
    color: "bg-blue-50"
  },
  { 
    number: "03",
    title: "3D Visuals", 
    desc: "High-end photorealistic 3D elevations that allow you to walk through your home before construction.",
    icon: <Zap className="w-10 h-10" />,
    color: "bg-yellow-50"
  },
  { 
    number: "04",
    title: "Liaisoning", 
    desc: "Seamless management of AMC sanctions, building permits, and government documentation.",
    icon: <Landmark className="w-10 h-10" />,
    color: "bg-green-50"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.4em] mb-4 italic">
              Professional Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Engineering Your <span className="text-gray-400">Vision</span> To Reality.
            </h3>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
              Available in Amravati
            </p>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
              className="group relative p-10 md:p-16 bg-white flex flex-col justify-between transition-all duration-500 overflow-hidden"
            >
              {/* Background Large Number */}
              <span className="absolute -bottom-4 -right-4 text-9xl font-black text-gray-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                {s.number}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                    {s.icon}
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="text-orange-600 w-6 h-6" />
                  </motion.div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">
                  {s.title}
                </h4>
                <p className="text-gray-500 leading-relaxed max-w-sm">
                  {s.desc}
                </p>
              </div>

              {/* Decorative line that expands on hover */}
              <div className="mt-12 h-[2px] w-12 bg-gray-200 group-hover:w-full group-hover:bg-orange-600 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}