"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin, CheckCircle, X } from "lucide-react";

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    // Simulate form submission delay
    setTimeout(() => {
      setPending(false);
      setShowSuccess(true);
      // Auto-hide notification after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white px-6 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px]">Get in Touch</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-2 tracking-tighter italic uppercase">
            LET'S BUILD <span className="text-gray-400">TOGETHER</span>
          </h2>
        </div>

        {/* The Grid Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-gray-200">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-4 bg-gray-50 p-10 md:p-12 space-y-10 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Contact Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Phone size={16} />
                  </div>
                  <span className="text-lg font-black text-gray-900 tracking-tight">
                    <a href="tel:+919172370355">+91 9172370355</a>
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm font-bold text-gray-900 lowercase">
                    <a href="mailto:contact@cnconstructions.com">contact@cnconstructions.com</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 hidden md:block">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">Location</h4>
              <p className="text-sm font-bold text-gray-900 leading-relaxed">
                CN Constructions Office, <br />
                Morshi Road, Amravati, MH.
              </p>

              <p className="text-black mt-8 text-sm italic leading-relaxed">
                Connect with <strong>Er. Akshay Sagale</strong> for expert structural consultation and premium 3D home designs in Amravati.
              </p>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-8 p-10 md:p-12 bg-white">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              <div className="flex flex-col gap-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-900">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your full name"
                  className="bg-transparent border-b-2 border-gray-200 py-3 outline-none focus:border-orange-600 transition-all text-gray-900 font-bold placeholder:text-gray-300"
                />
              </div>

              <div className="flex flex-col gap-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-900">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91"
                  className="bg-transparent border-b-2 border-gray-200 py-3 outline-none focus:border-orange-600 transition-all text-gray-900 font-bold placeholder:text-gray-300"
                />
              </div>

              <div className="flex flex-col gap-2 group md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-900">Requirement</label>
                <select className="bg-transparent border-b-2 border-gray-200 py-3 outline-none focus:border-orange-600 transition-all text-gray-900 font-bold appearance-none cursor-pointer">
                  <option>Architectural 3D Design & Vastu</option>
                  <option>Structural RCC Design (M-Tech)</option>
                  <option>Full Construction Management</option>
                  <option>Renovation Service</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-900">Message</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Briefly describe your plot size or project..."
                  className="bg-transparent border-b-2 border-gray-200 py-3 outline-none focus:border-orange-600 transition-all text-gray-900 font-bold placeholder:text-gray-300 resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  disabled={pending}
                  type="submit"
                  className="w-full md:w-auto bg-gray-900 text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-orange-600 transition-all flex items-center justify-center gap-4 group disabled:bg-gray-400"
                >
                  {pending ? "LOGGING INQUIRY..." : "Submit Inquiry"}
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-10 right-10 z-[200] bg-white border-2 border-gray-900 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6 min-w-[320px]"
          >
            <div className="w-12 h-12 bg-orange-600 flex items-center justify-center text-white shrink-0">
              <CheckCircle size={24} strokeWidth={3} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-1">Transmission Verified</p>
              <h4 className="text-sm font-black text-gray-900 uppercase">Inquiry Logged</h4>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Er. Akshay will call you soon</p>
            </div>
            <button onClick={() => setShowSuccess(false)} className="text-gray-400 hover:text-gray-900">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}