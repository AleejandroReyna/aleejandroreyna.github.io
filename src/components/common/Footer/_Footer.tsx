import Link from "next/link";
import { yearsOfExperience } from "@/utils/yearsOfExperience";
import { currentYear } from "@/utils/currentYear";
import { Mail, Feather } from 'lucide-react';
import { getTranslations } from "next-intl/server";
import { getSiteSettings } from "@/lib/payload";
import { getSocialLinks } from "@/utils/socialLinks";

export const Footer = async () => {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');
  const settings = await getSiteSettings();
  const { email } = settings.social || {};
  const social = getSocialLinks(settings.social);

  // Perfiles principales: se muestran con el identificador visible.
  const namedSocials = [social.github, social.calendly].filter((s) => s !== null);
  return (
    <footer className="border-t border-[#9be8b8]/8 relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-serif font-medium text-3xl text-[#f2f4f0] mb-4 flex items-center gap-3">
              <Feather className="w-4.5 h-4.5 text-white" strokeWidth={1.75} />
              Alejandro Reyna
            </h3>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#9be8b8]/70 mb-6">{t('role')}</p>
            <p className="font-heading text-[13px] leading-[1.7] text-[#dfe5e0]/55">
              {t('tagline', { years: yearsOfExperience() })}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
              {t('quickLinks')}
            </h4>
            <nav className="space-y-4">
              <Link href="/" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">{t('home')}</Link>
              <Link href="/#about" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">{t('about')}</Link>
              <Link href="/portfolio" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">{t('portfolio')}</Link>
              <Link href="/#skills" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">{t('expertise')}</Link>
              <Link href="/blog" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">{tNav('blog')}</Link>
              <Link href="/contact" className="block font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50 hover:text-[#9be8b8] transition-colors duration-300">{t('contact')}</Link>
            </nav>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
              {t('techStack')}
            </h4>
            <ul className="space-y-4 font-mono text-[11px] tracking-[0.16em] uppercase text-[#9be8b8]/55">
              <li>/ Next.js &amp; React</li>
              <li>/ Python &amp; Django</li>
              <li>/ Ruby on Rails</li>
              <li>/ Cloud &amp; CI/CD</li>
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
              {t('network')}
            </h4>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.08em] text-[#dfe5e0] border-b border-[#9be8b8]/40 pb-1.5 mb-8 hover:text-[#9be8b8] hover:border-[#9be8b8] transition-colors duration-300"
            >
              <Mail size={13} />
              {email}
            </a>

            <div className="flex flex-col gap-4 font-mono text-[11px] tracking-[0.06em] text-[#dfe5e0]/50">
              {namedSocials.map(({ key, Icon, display, url }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(key)}
                  className="flex items-center gap-3 whitespace-nowrap hover:text-[#9be8b8] transition-colors duration-300"
                >
                  <Icon size={13} className="shrink-0" />
                  {display}
                </a>
              ))}
            </div>

            {social.icons.length > 0 && (
              <div className="flex items-center gap-3 mt-8">
                {social.icons.map(({ key, Icon, url }) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(key)}
                    title={t(key)}
                    className="flex items-center justify-center w-9 h-9 border border-[#9be8b8]/15 text-[#dfe5e0]/50 hover:text-[#9be8b8] hover:border-[#9be8b8]/40 transition-colors duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#9be8b8]/8 relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] tracking-[0.14em] uppercase text-[#dfe5e0]/35">
            <span>{t('copyright', { year: currentYear() })}</span>
            <a
              href="https://zen-of-python.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9be8b8] transition-colors duration-300"
            >
              {t('quote')}
            </a>
            <span>{t('location')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
