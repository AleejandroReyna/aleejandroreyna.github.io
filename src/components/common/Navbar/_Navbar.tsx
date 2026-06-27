'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Philosophy" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#skills", label: "Expertise" },
    { href: "#experience", label: "Journey" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-background/90 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-heading font-bold text-foreground tracking-tight flex items-center gap-2 group"
          >
            <div className="w-3 h-3 bg-cta group-hover:shadow-[0_0_15px_#092e20] transition-shadow duration-300"></div>
            Alejandro Reyna
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-neutral-400 hover:text-foreground transition-colors duration-300 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#092e20] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 border border-white/10 hover:border-[#092e20] text-sm font-medium hover:bg-[#092e20] hover:text-white transition-all duration-300">
              LET'S TALK
            </a>
          </nav>
 
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-white transition-colors cursor-pointer border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
 
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <nav className="py-6 border-t border-white/5 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium tracking-wide text-foreground hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 px-5 py-3 border border-white/10 hover:border-[#092e20] text-sm font-medium bg-white/5 hover:bg-[#092e20] hover:text-white transition-all duration-300 text-center">
              LET'S TALK
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
