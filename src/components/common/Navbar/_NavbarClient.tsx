'use client';
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Feather, Linkedin } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";

const BG_THRESHOLD = 100;

interface NavbarClientProps {
  github?: string | null;
  linkedin?: string | null;
}

export const NavbarClient = ({ github, linkedin }: NavbarClientProps) => {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > BG_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exposed as a CSS var so the in-page StickyNav can dock itself flush
  // against the header regardless of its measured height.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const setHeightVar = () => {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    };
    setHeightVar();
    const observer = new ResizeObserver(setHeightVar);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Prevent the page from scrolling behind the fullscreen mobile menu —
  // its backdrop blur is meant to show the page frozen where it was, not
  // keep scrolling underneath.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
    { href: "/", label: t('home') },
    { href: "/portfolio", label: t('portfolio') },
    { href: "/blog", label: t('blog') },
  ];

  return (
    <>
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      // While the menu is open the header stays transparent: the fullscreen
      // overlay below already covers the full viewport, and its blur can only
      // show through if the header doesn't paint its own backdrop-filter on top.
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-colors duration-500 ${
        scrolled && !isOpen ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => { goHome(e); setIsOpen(false); }}
            className="flex items-center gap-2.5 group relative z-10"
            aria-label="Alejandro Reyna"
          >
            <Feather className="w-5 h-5 text-white shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" strokeWidth={1.75} />
            <motion.span
              initial={false}
              animate={{ opacity: scrolled || isOpen ? 1 : 0, width: scrolled || isOpen ? "auto" : 0, marginLeft: scrolled || isOpen ? 0 : -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[13px] tracking-[0.12em] uppercase text-white whitespace-nowrap overflow-hidden"
            >
              Alejandro Reyna
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === "/" ? goHome : undefined}
                className="font-mono text-[11px] tracking-[0.16em] uppercase text-neutral-400 hover:text-foreground transition-colors duration-300 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#092e20] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <LanguageSwitcher />
            <Link href="/contact" className="font-mono text-[11px] tracking-[0.16em] uppercase px-5 py-2.5 border border-white/10 hover:border-[#092e20] font-medium hover:bg-[#092e20] hover:text-white transition-all duration-300">
              {t('letsTalk')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2 text-foreground hover:text-white transition-colors cursor-pointer border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </motion.header>

      {/* Mobile Navigation — fullscreen overlay, blurred over whatever was
          scrolled behind it, rather than a dropdown pinned under the header.
          Kept as a sibling of the header (not a child): an ancestor with its
          own backdrop-filter becomes a backdrop root, which would clip this
          blur to the header's own box instead of the page behind it. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-[#060907]/80 backdrop-blur-2xl"
          >
            <div className="h-full flex flex-col px-8 pb-10" style={{ paddingTop: 'var(--header-height, 88px)' }}>
              {/* Center — nav links */}
              <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "/") goHome(e);
                        setIsOpen(false);
                      }}
                      className="font-serif font-medium text-4xl text-[#f2f4f0] hover:text-[#9be8b8] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + links.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 inline-block px-7 py-3.5 border border-[#9be8b8]/30 font-mono text-xs tracking-[0.16em] uppercase text-[#9be8b8] hover:bg-[#46d386] hover:text-[#0a0d0b] hover:border-[#46d386] transition-all duration-300"
                  >
                    {t('letsTalk')}
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom — socials + language */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center gap-6 pt-6 border-t border-[#9be8b8]/10"
              >
                <div className="flex items-center gap-6">
                  {github && (
                    <a
                      href={`https://github.com/${github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-[#dfe5e0]/60 hover:text-[#9be8b8] transition-colors duration-300"
                    >
                      <SiGithub size={18} />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={`https://linkedin.com/in/${linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-[#dfe5e0]/60 hover:text-[#9be8b8] transition-colors duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
                <LanguageSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
