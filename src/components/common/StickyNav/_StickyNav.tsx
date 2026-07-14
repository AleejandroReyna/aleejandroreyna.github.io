'use client';
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const hrefs = ["#about", "#portfolio", "#skills", "#experience", "#contact"] as const;
const labelKeys = ["philosophy", "portfolio", "expertise", "journey", "contact"] as const;

// In-page section nav for the home screen. It scrolls with the page until it
// reaches the main header, then docks flush beneath it (top = measured
// header height, kept in sync via a CSS var set by Navbar).
export const StickyNav = () => {
  const t = useTranslations('stickyNav');
  const navRef = useRef<HTMLDivElement>(null);
  const [activeHref, setActiveHref] = useState<string>(hrefs[0]);

  // Expose our own height so section scroll-margin can account for both the
  // fixed header and this docked bar — otherwise anchored sections land
  // partially hidden underneath.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const setHeightVar = () => {
      document.documentElement.style.setProperty('--subnav-height', `${nav.offsetHeight}px`);
    };
    setHeightVar();
    const observer = new ResizeObserver(setHeightVar);
    observer.observe(nav);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--subnav-height');
    };
  }, []);

  // Track which section is currently in view to light up its dot.
  useEffect(() => {
    const sections = hrefs
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={navRef}
      className="sticky z-40 border-y border-[#9be8b8]/8 bg-[#0a0d0b]/80 backdrop-blur-md"
      style={{ top: 'var(--header-height, 88px)' }}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center gap-8 overflow-x-auto py-4 no-scrollbar">
        {hrefs.map((href, i) => {
          const isActive = activeHref === href;
          return (
            <a
              key={href}
              href={href}
              className={`flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-300 whitespace-nowrap shrink-0 ${
                isActive ? 'text-foreground' : 'text-neutral-400 hover:text-foreground'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  isActive ? 'bg-[#46d386]' : 'bg-transparent'
                }`}
              />
              {t(labelKeys[i])}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
