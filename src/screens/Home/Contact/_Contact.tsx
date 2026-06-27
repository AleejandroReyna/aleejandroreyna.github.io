'use client';
import { useActionState, useEffect, useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Terminal } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { submitContactForm, ContactFormState } from "@/lib/actions/contact";

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

export const Contact = ({ contactEmail, githubUser, linkedinUser, calendlyUser }: ContactProps) => {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="contact">
      <div className="mx-auto max-w-7xl px-6 relative z-10 reveal">
        
        {/* Heading */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-secondary/50 pb-8">
          <div>
            <span className="text-neutral-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
              <Terminal size={14} /> Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight uppercase">
              Let's <span className="text-white">Connect</span>
            </h2>
          </div>
          <div className="w-16 h-1 bg-[#092e20] shadow-[0_0_10px_#092e20]"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro */}
            <div className="bg-secondary/15 border border-secondary p-8 hover:border-[#092e20] transition-colors duration-300 relative group">
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#092e20] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-base font-medium leading-relaxed text-neutral-400 mb-8">
                I'm currently accepting new projects. Whether you need system architecture or full-stack development, feel free to reach out.
              </p>
              <div className="inline-flex items-center gap-3 text-[10px] tracking-widest text-foreground uppercase font-bold bg-secondary/30 px-4 py-2 border border-[#092e20]">
                <div className="w-2 h-2 bg-[#092e20] shadow-[0_0_8px_#092e20] animate-pulse"></div>
                Status: Available
              </div>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6">
              <a href={`mailto:${contactEmail}`} className="group flex items-center gap-6 bg-secondary/15 border border-secondary p-6 hover:border-[#092e20] transition-colors duration-300 relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#092e20] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="w-12 h-12 bg-secondary/40 flex items-center justify-center text-white group-hover:bg-[#092e20] transition-colors duration-300 border border-[#092e20]/30 group-hover:border-[#092e20]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Email</p>
                  <p className="text-sm md:text-base font-bold tracking-tight text-foreground group-hover:text-white transition-colors duration-300">{contactEmail}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-6 bg-secondary/15 border border-secondary p-6">
                <div className="w-12 h-12 bg-secondary/40 flex items-center justify-center text-neutral-400 border border-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Location</p>
                  <p className="text-sm md:text-base font-bold tracking-tight text-foreground uppercase">Guatemala, GTM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-secondary/50">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#092e20]"></span> Social Profiles
              </p>
              <div className="flex gap-4">
                <a
                  href={`https://github.com/${githubUser}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary/15 border border-secondary flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#092e20] transition-colors duration-300 hover:bg-[#092e20]/20"
                >
                  <Github size={20} />
                </a>
                <a
                  href={`https://linkedin.com/in/${linkedinUser}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary/15 border border-secondary flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#092e20] transition-colors duration-300 hover:bg-[#092e20]/20"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`https://calendly.com/${calendlyUser}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary/15 border border-secondary flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#092e20] transition-colors duration-300 hover:bg-[#092e20]/20"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-secondary/15 border border-secondary p-8 sm:p-12 relative group">
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#092e20] opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#092e20] opacity-50"></div>
              
              <form ref={formRef} action={formAction} className="space-y-8 relative z-10">
                
                {/* Status Messages */}
                {state.message && (
                  <div className={`p-4 border text-sm font-bold tracking-widest uppercase ${state.success ? 'bg-secondary/40 border-[#092e20] text-white' : 'bg-red-500/10 border-red-500 text-red-400'}`}>
                    {state.message}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="form-control">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name..."
                      className={`w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors placeholder:text-neutral-500 focus:bg-[#092e20]/10 ${state.errors?.name ? 'border-red-400' : ''}`}
                      required
                      disabled={isPending}
                    />
                    {state.errors?.name && <span className="text-red-400 text-xs mt-2 block">{state.errors.name[0]}</span>}
                  </div>

                  <div className="form-control">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email..."
                      className={`w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors placeholder:text-neutral-500 focus:bg-[#092e20]/10 ${state.errors?.email ? 'border-red-400' : ''}`}
                      required
                      disabled={isPending}
                    />
                    {state.errors?.email && <span className="text-red-400 text-xs mt-2 block">{state.errors.email[0]}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="form-control">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject..."
                      className={`w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors placeholder:text-neutral-500 focus:bg-[#092e20]/10 ${state.errors?.subject ? 'border-red-400' : ''}`}
                      required
                      disabled={isPending}
                    />
                    {state.errors?.subject && <span className="text-red-400 text-xs mt-2 block">{state.errors.subject[0]}</span>}
                  </div>

                  <div className="form-control">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter phone..."
                      className="w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors placeholder:text-neutral-500 focus:bg-[#092e20]/10"
                      disabled={isPending}
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className={`w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors resize-none placeholder:text-neutral-500 focus:bg-[#092e20]/10 ${state.errors?.message ? 'border-red-400' : ''}`}
                    required
                    disabled={isPending}
                  ></textarea>
                  {state.errors?.message && <span className="text-red-400 text-xs mt-2 block">{state.errors.message[0]}</span>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#092e20] text-white border border-[#092e20] p-4 font-bold tracking-widest uppercase text-sm hover:bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
