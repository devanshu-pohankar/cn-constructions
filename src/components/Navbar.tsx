"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "gallery" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled || isOpen ? "backdrop-blur-lg bg-white/80 py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
  className={`flex items-center gap-2 text-xl md:text-2xl font-black tracking-tighter transition-colors ${
    isScrolled || isOpen ? "text-black" : "text-white"
  }`}
>
  <img
    src="/logo-cn.png"
    alt="CN Constructions Logo"
    className="h-9 w-auto"
  />

  <span>
    CN <span className="text-orange-600">CONSTRUCTIONS</span>
  </span>
</div>

        {/* Desktop Links */}
        <div className={`hidden md:flex space-x-8 font-bold text-sm uppercase tracking-widest ${isScrolled ? "text-gray-800" : "text-white"}`}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-orange-600 transition">
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-orange-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white h-screen w-full absolute top-full left-0 p-6 flex flex-col gap-8 text-2xl font-bold text-black border-t">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => { setIsOpen(false); document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' }); }}>
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}