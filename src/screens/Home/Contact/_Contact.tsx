'use client';
import { useActionState, useEffect, useRef } from "react";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Linkedin, Calendar } from "lucide-react";
import { submitContactForm, ContactFormState } from "@/lib/actions/contact";
import { motion, Variants } from "motion/react";
import { useTranslations } from "next-intl";

interface ContactProps {
  contactEmail: string;
  githubUser: string;
  linkedinUser: string;
  calendlyUser: string;
}

const initialState: ContactFormState = {
  success: false,
  errors: {},
  message: '',
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

const inputClasses = (hasError?: boolean) =>
  `w-full bg-transparent border ${hasError ? 'border-red-400' : 'border-[#9be8b8]/15'} rounded-sm px-4.5 py-4 font-mono text-xs tracking-[0.1em] text-[#f2f4f0] placeholder:text-[#dfe5e0]/40 placeholder:uppercase focus:outline-none focus:border-[#46d386]/60 transition-colors`;

export const Contact = ({ contactEmail, githubUser, linkedinUser, calendlyUser }: ContactProps) => {
  const t = useTranslations('home.contact');
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <section className="py-28 relative overflow-hidden border-t border-[#9be8b8]/8" id="contact">
      <div className="mx-auto max-w-7xl px-6 relative z-10">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20"
        >

          {/* Left column — headline + direct contact */}
          <motion.div variants={itemVariants}>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-6">
              {t('label')}
            </div>
            <h2 className="font-serif font-medium text-5xl md:text-[68px] leading-[1.05] text-[#f2f4f0]">
              {t('titleLine1')}<br />
              {t('titleLine2')}<br />
              <span className="italic text-[#9be8b8]">{t('titleEmphasis')}</span>.
            </h2>
            <p className="font-heading text-[15px] leading-[1.7] text-[#dfe5e0]/60 mt-7 max-w-[400px]">
              {t('description')}
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-block mt-9 font-mono font-medium text-[15px] tracking-[0.08em] text-[#dfe5e0] border-b border-[#9be8b8]/40 pb-1.5 hover:text-[#9be8b8] hover:border-[#9be8b8] transition-colors duration-300"
            >
              {contactEmail}
            </a>
            <div className="flex gap-8 mt-9 font-mono text-[11px] tracking-[0.16em] uppercase text-[#dfe5e0]/50">
              <a
                href={`https://github.com/${githubUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#9be8b8] transition-colors duration-300"
              >
                <SiGithub size={13} />
                {t('github')}
              </a>
              <a
                href={`https://linkedin.com/in/${linkedinUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#9be8b8] transition-colors duration-300"
              >
                <Linkedin size={13} />
                {t('linkedin')}
              </a>
              <a
                href={`https://calendly.com/${calendlyUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#9be8b8] transition-colors duration-300"
              >
                <Calendar size={13} />
                {t('calendly')}
              </a>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div variants={itemVariants}>
            <form ref={formRef} action={formAction} className="flex flex-col gap-3.5">

              {/* Status Messages */}
              {state.message && (
                <div className={`p-4 border rounded-sm font-mono text-xs tracking-[0.1em] uppercase ${state.success ? 'border-[#46d386]/40 text-[#9be8b8]' : 'border-red-400/40 text-red-400'}`}>
                  {state.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('namePlaceholder')}
                    aria-label={t('namePlaceholder')}
                    className={inputClasses(!!state.errors?.name)}
                    required
                    disabled={isPending}
                  />
                  {state.errors?.name && <span className="text-red-400 text-xs mt-2 block">{state.errors.name[0]}</span>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('emailPlaceholder')}
                    aria-label={t('emailPlaceholder')}
                    className={inputClasses(!!state.errors?.email)}
                    required
                    disabled={isPending}
                  />
                  {state.errors?.email && <span className="text-red-400 text-xs mt-2 block">{state.errors.email[0]}</span>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder={t('subjectPlaceholder')}
                  aria-label={t('subjectPlaceholder')}
                  className={inputClasses(!!state.errors?.subject)}
                  required
                  disabled={isPending}
                />
                {state.errors?.subject && <span className="text-red-400 text-xs mt-2 block">{state.errors.subject[0]}</span>}
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t('messagePlaceholder')}
                  aria-label={t('messagePlaceholder')}
                  className={`${inputClasses(!!state.errors?.message)} resize-none`}
                  required
                  disabled={isPending}
                ></textarea>
                {state.errors?.message && <span className="text-red-400 text-xs mt-2 block">{state.errors.message[0]}</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-transparent border border-[#46d386]/50 text-[#9be8b8] p-4 font-mono font-medium text-xs tracking-[0.18em] uppercase rounded-sm hover:bg-[#46d386] hover:text-[#0a0d0b] hover:border-[#46d386] transition-all duration-300 disabled:opacity-50"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="animate-pulse">{t('sending')}</span>
                ) : (
                  <span>{t('send')}</span>
                )}
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
