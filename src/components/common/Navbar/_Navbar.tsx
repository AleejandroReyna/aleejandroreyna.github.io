'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
            onClick={(e) => handleClick(e, "#home")}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Alejandro Reyna
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};