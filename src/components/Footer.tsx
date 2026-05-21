"use client";
import { Mail, MapPin, Phone, Instagram, Facebook, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 border-t border-gray-900 relative overflow-hidden">
      
      {/* Grid bg points */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.18] z-0" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #555555 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Top Section:Brand & CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="space-y-2">
            <h4 className="text-3xl md:text-6xl font-black tracking-tighter italic uppercase">
              CN <span className="text-orange-600">CONSTRUCTIONS</span>
            </h4>
            <div className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              <p>M-Tech Engineered Structural Excellence</p>
              <p className="mt-2 tracking-[0.2em]">Er. Akshay Sagale - Principal Engineer</p>
            </div>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 bg-gray-900 px-8 py-4 border border-gray-800 hover:border-orange-600 transition-all shadow-lg"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Back to Top</span>
            <ArrowUpRight className="text-orange-600 group-hover:rotate-45 transition-transform" size={18} />
          </button>
        </div>

        {/* Middle Grid: Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Credentials */}
          <div className="space-y-6 border-l border-gray-800 pl-6">
            <h5 className="text-orange-600 font-bold uppercase tracking-widest text-[10px]">Certification</h5>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-orange-600 shrink-0" size={20} />
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Licensed Structural Engineer & <br /> 
                Govt. Approved Contractor <br />
                <span className="text-white italic">Amravati Municipal Corp.</span>
              </p>
            </div>
          </div>

          {/* Column 2: Reach Out */}
          <div className="space-y-6 border-l border-gray-800 pl-6">
            <h5 className="text-orange-600 font-bold uppercase tracking-widest text-[10px]">Office</h5>
            <div className="space-y-4">
              <a href="tel:+919172370355" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <Phone size={16} className="text-orange-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 9172370355</span>
              </a>
              <a href="mailto:contact@cnconstructions.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <Mail size={16} className="text-orange-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm">contact@cnconstructions.com</span>
              </a>
              <div className="flex items-start gap-4 text-gray-400">
                <MapPin size={16} className="text-orange-600 shrink-0" />
                <span className="text-sm leading-tight uppercase tracking-wider">Shankar Nagar, Amravati.</span>
              </div>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-6 border-l border-gray-800 pl-6">
            <h5 className="text-orange-600 font-bold uppercase tracking-widest text-[10px]">Social Media</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">
                <Instagram size={18}/>
              </a>
              <a href="https://www.facebook.com/akshay.sagale" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all">
                <Facebook size={18}/>
              </a>
            </div>
          </div>

          {/* Column 4: Map Location */}
          <div className="relative group grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden border border-gray-800">
            <iframe 
              title="Office Location"
              src="https://maps.app.goo.gl/nTp1jwEQjdMsPd4e7" 
              className="w-full h-40 opacity-50 group-hover:opacity-100 transition-opacity border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] text-center md:text-left">
            © {new Date().getFullYear()} CN CONSTRUCTIONS • ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em]">
            DEVELOPED BY <span className="text-white tracking-[0.2em]"><a href="mailto:codevansh200@gmail.com" className="hover:text-orange-500 transition-colors">codevansh200@gmail.com</a></span>
          </p>
        </div>

      </div>
    </footer>
  );
}