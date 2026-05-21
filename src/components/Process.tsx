"use client";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, FileCheck, HardHat, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <MessageSquare size={24} />,
    title: "Consultation",
    desc: "Personal assessment with Er. Akshay to align vision, budget, and plot requirements."
  },
  {
    id: "02",
    icon: <PenTool size={24} />,
    title: "Vastu & 3D Design",
    desc: "Engineering scientific Vastu plans and photorealistic 3D elevations of your project."
  },
  {
    id: "03",
    icon: <FileCheck size={24} />,
    title: "Permit & Sanctions",
    desc: "Streamlining municipal corporation (AMC) paperwork and building plan approvals."
  },
  {
    id: "04",
    icon: <HardHat size={24} />,
    title: "M-Tech Execution",
    desc: "RCC structural work and finishes under direct M-Tech level site supervision."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Technical Header */}
        <div className="mb-16">
          <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Workflow</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-2 tracking-tighter italic uppercase leading-none">
            The Building <span className="text-gray-400">Journey</span>
          </h2>
        </div>

        {/* The Precision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-10 border-b md:border-b-0 md:border-r border-gray-200 last:border-0 bg-white hover:bg-gray-50 transition-colors"
            >
              {/* Step Number & Icon */}
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-black text-gray-100 group-hover:text-orange-100 transition-colors duration-500 italic">
                  {step.id}
                </span>
                <div className="text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs font-bold leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[10px] border-r-[10px] border-transparent group-hover:border-b-orange-600 group-hover:border-r-orange-600 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}