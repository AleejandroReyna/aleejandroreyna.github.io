'use client'

import { useActionState } from 'react'
import { submitContactForm, ContactFormState } from '@/lib/actions/contact'

const initialState: ContactFormState = {
    success: false,
    errors: {},
    message: '',
}

const inputClasses = (hasError?: boolean) =>
    `w-full bg-transparent border ${hasError ? 'border-red-400' : 'border-[#9be8b8]/15'} rounded-sm px-4.5 py-4 font-mono text-xs tracking-[0.1em] text-[#f2f4f0] placeholder:text-[#dfe5e0]/40 placeholder:uppercase focus:outline-none focus:border-[#46d386]/60 transition-colors`

export const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

    if (state.success) {
        return (
            <div className="border border-[#46d386]/40 rounded p-10 text-center">
                <h3 className="font-serif font-medium text-3xl text-[#f2f4f0] mb-3">Message sent<span className="text-[#46d386]">.</span></h3>
                <p className="font-heading text-sm text-[#dfe5e0]/60 mb-8">{state.message}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="font-mono font-medium text-[11px] tracking-[0.16em] uppercase text-[#9be8b8] border border-[#46d386]/50 px-6 py-3.5 rounded-sm hover:bg-[#46d386] hover:text-[#0a0d0b] transition-all duration-300"
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <form action={formAction} className="flex flex-col gap-3.5">
            {state.message && !state.success && (
                <div className="p-4 border border-red-400/40 rounded-sm font-mono text-xs tracking-[0.1em] uppercase text-red-400">
                    {state.message}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        aria-label="Name"
                        className={inputClasses(!!state.errors?.name)}
                        disabled={isPending}
                        required
                    />
                    {state.errors?.name && (
                        <span className="text-red-400 text-xs mt-2 block">{state.errors.name[0]}</span>
                    )}
                </div>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        className={inputClasses(!!state.errors?.email)}
                        disabled={isPending}
                        required
                    />
                    {state.errors?.email && (
                        <span className="text-red-400 text-xs mt-2 block">{state.errors.email[0]}</span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <input
                    name="company"
                    type="text"
                    placeholder="Company (Optional)"
                    aria-label="Company"
                    className={inputClasses()}
                    disabled={isPending}
                />
                <input
                    name="budget"
                    type="text"
                    placeholder="Budget Range"
                    aria-label="Budget Range"
                    className={inputClasses()}
                    disabled={isPending}
                />
            </div>

            <div>
                <input
                    name="subject"
                    type="text"
                    placeholder="What are we building?"
                    aria-label="What are we building?"
                    className={inputClasses(!!state.errors?.subject)}
                    disabled={isPending}
                    required
                />
                {state.errors?.subject && (
                    <span className="text-red-400 text-xs mt-2 block">{state.errors.subject[0]}</span>
                )}
            </div>

            <div>
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about the project — goals, timeline, current state"
                    aria-label="Message"
                    className={`${inputClasses(!!state.errors?.message)} resize-none`}
                    disabled={isPending}
                    required
                ></textarea>
                {state.errors?.message && (
                    <span className="text-red-400 text-xs mt-2 block">{state.errors.message[0]}</span>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-transparent border border-[#46d386]/50 text-[#9be8b8] p-4 font-mono font-medium text-xs tracking-[0.18em] uppercase rounded-sm hover:bg-[#46d386] hover:text-[#0a0d0b] hover:border-[#46d386] transition-all duration-300 disabled:opacity-50"
                disabled={isPending}
            >
                {isPending ? (
                    <span className="animate-pulse">Sending...</span>
                ) : (
                    <span>Send Message →</span>
                )}
            </button>

            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#dfe5e0]/35 text-center mt-1.5">
                Response within 24 hours — usually sooner
            </div>
        </form>
    )
}
