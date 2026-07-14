'use client';
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { locales, LOCALE_COOKIE } from "@/i18n/config";

// No URL prefix, so switching locale just rewrites the cookie and asks
// Next.js to re-render the current route's server components — that's
// enough for both Payload-fetched content and next-intl messages to update.
export const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();

  const switchTo = (next: string) => {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className="text-[#dfe5e0]/20">/</span>}
          <button
            onClick={() => switchTo(l)}
            aria-current={l === locale}
            className={`transition-colors duration-300 ${
              l === locale ? "text-[#9be8b8]" : "text-neutral-500 hover:text-foreground"
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
};
