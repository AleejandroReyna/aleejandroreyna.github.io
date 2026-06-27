'use client'

import { useActionState } from 'react'
import { submitContactForm, ContactFormState } from '@/lib/actions/contact'

const initialState: ContactFormState = {
    success: false,
    errors: {},
    message: '',
}

export const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

    if (state.success) {
        return (
            <div className="bg-secondary/40 border border-[#092e20] p-8 text-center text-white relative group">
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#092e20]"></div>
                <h3 className="text-2xl font-heading font-bold mb-4 uppercase tracking-tight">Message Sent!</h3>
                <p className="text-neutral-400 text-sm font-medium mb-6">{state.message}</p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="bg-transparent border border-secondary text-neutral-400 px-6 py-3 font-bold tracking-widest uppercase text-xs hover:border-[#092e20] hover:bg-[#092e20] hover:text-white transition-all duration-300"
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <form action={formAction} className="space-y-8">
            {state.message && !state.success && (
                <div className="p-4 bg-red-500/10 border border-red-500 text-red-400 text-sm font-bold tracking-widest uppercase">
                    {state.message}
                </div>
            )}

            <div className="grid sm:grid-cols-2 gap-8">
                <div className="form-control">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        User_Name
                    </label>
                    <input 
                        name="name"
                        type="text" 
                        className={`w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors placeholder:text-neutral-500 focus:bg-[#092e20]/10 ${state.errors?.name ? 'border-red-400' : ''}`} 
                        placeholder="Enter name..." 
                        disabled={isPending}
                        required
                    />
                    {state.errors?.name && (
                        <span className="text-red-400 text-xs mt-2 block">{state.errors.name[0]}</span>
                    )}
                </div>

                <div className="form-control">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        User_Email
                    </label>
                    <input 
                        name="email"
                        type="email" 
                        className={`w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors placeholder:text-neutral-500 focus:bg-[#092e20]/10 ${state.errors?.email ? 'border-red-400' : ''}`} 
                        placeholder="Enter email..." 
                        disabled={isPending}
                        required
                    />
                    {state.errors?.email && (
                        <span className="text-red-400 text-xs mt-2 block">{state.errors.email[0]}</span>
                    )}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
                <div className="form-control">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        Topic
                    </label>
                    <input 
                        name="subject"
                        type="text" 
                        className={`w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors placeholder:text-neutral-500 focus:bg-[#092e20]/10 ${state.errors?.subject ? 'border-red-400' : ''}`} 
                        placeholder="Enter topic..." 
                        disabled={isPending}
                        required
                    />
                    {state.errors?.subject && (
                        <span className="text-red-400 text-xs mt-2 block">{state.errors.subject[0]}</span>
                    )}
                </div>

                <div className="form-control">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        Comm_Link (Optional)
                    </label>
                    <input 
                        name="phone"
                        type="text" 
                        className="w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors placeholder:text-neutral-500 focus:bg-[#092e20]/10" 
                        placeholder="Enter phone..." 
                        disabled={isPending}
                    />
                </div>
            </div>

            <div className="form-control">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                    Payload
                </label>
                <textarea 
                    name="message"
                    rows={6} 
                    className={`w-full bg-background border border-secondary p-4 text-foreground font-medium focus:outline-none focus:border-[#092e20] transition-colors resize-none placeholder:text-neutral-500 focus:bg-[#092e20]/10 ${state.errors?.message ? 'border-red-400' : ''}`} 
                    placeholder="Enter payload data..."
                    disabled={isPending}
                    required
                ></textarea>
                {state.errors?.message && (
                    <span className="text-red-400 text-xs mt-2 block">{state.errors.message[0]}</span>
                )}
            </div>

            <div className="pt-4">
                <button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full bg-[#092e20] text-white border border-[#092e20] p-4 font-bold tracking-widest uppercase text-sm hover:bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                    {isPending ? (
                      <span className="animate-pulse">Transmitting...</span>
                    ) : (
                      <>
                        <span>Execute Submit</span>
                      </>
                    )}
                </button>
            </div>
        </form>
    )
}
