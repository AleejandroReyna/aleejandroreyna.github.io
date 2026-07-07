'use client';
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Feather } from "lucide-react";
import { motion } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the home page, "/" is the same URL we're already on, so a plain
  // Link click triggers no navigation and no scroll. Scroll manually in
  // that case; otherwise let the router navigate to "/" as usual.
  const goHome = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "Philosophy" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#skills", label: "Expertise" },
    { href: "#experience", label: "Journey" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={goHome}
            className="flex items-center gap-2 group"
            aria-label="Alejandro Reyna"
          >
            <Feather className="w-5 h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" strokeWidth={1.75} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.href === "/" ? goHome : undefined}
                className="font-mono text-[11px] tracking-[0.16em] uppercase text-neutral-400 hover:text-foreground transition-colors duration-300 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#092e20] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="font-mono text-[11px] tracking-[0.16em] uppercase px-5 py-2.5 border border-white/10 hover:border-[#092e20] font-medium hover:bg-[#092e20] hover:text-white transition-all duration-300">
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
                onClick={(e) => {
                  if (link.href === "/") goHome(e);
                  setIsOpen(false);
                }}
                className="block font-mono text-xs tracking-[0.16em] uppercase text-foreground hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 px-5 py-3 border border-white/10 hover:border-[#092e20] font-mono text-xs tracking-[0.16em] uppercase bg-white/5 hover:bg-[#092e20] hover:text-white transition-all duration-300 text-center">
              LET'S TALK
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
