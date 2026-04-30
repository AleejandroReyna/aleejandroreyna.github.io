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
            <div className="bg-success text-success-content p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p>{state.message}</p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="btn btn-sm btn-ghost mt-4 border-white"
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <form action={formAction} className="space-y-6">
            <div className="space-y-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-400 font-semibold">Your Name</span>
                    </label>
                    <input 
                        name="name"
                        type="text" 
                        className={`input input-bordered bg-gray-800 border-gray-700 text-white focus:border-primary focus:bg-gray-800 w-full ${state.errors?.name ? 'border-error' : ''}`} 
                        placeholder="John Doe" 
                        disabled={isPending}
                    />
                    {state.errors?.name && (
                        <span className="text-error text-xs mt-1">{state.errors.name[0]}</span>
                    )}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-400 font-semibold">Your Email</span>
                    </label>
                    <input 
                        name="email"
                        type="email" 
                        className={`input input-bordered bg-gray-800 border-gray-700 text-white focus:border-primary focus:bg-gray-800 w-full ${state.errors?.email ? 'border-error' : ''}`} 
                        placeholder="john@example.com" 
                        disabled={isPending}
                    />
                    {state.errors?.email && (
                        <span className="text-error text-xs mt-1">{state.errors.email[0]}</span>
                    )}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-400 font-semibold">Your Phone (Optional)</span>
                    </label>
                    <input 
                        name="phone"
                        type="text" 
                        className="input input-bordered bg-gray-800 border-gray-700 text-white focus:border-primary focus:bg-gray-800 w-full" 
                        placeholder="+502 1234 5678" 
                        disabled={isPending}
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-400 font-semibold">Message</span>
                    </label>
                    <textarea 
                        name="message"
                        rows={6} 
                        className={`textarea textarea-bordered bg-gray-800 border-gray-700 text-white focus:border-primary focus:bg-gray-800 w-full resize-none ${state.errors?.message ? 'border-error' : ''}`} 
                        placeholder="Tell me about your project or idea..."
                        disabled={isPending}
                    ></textarea>
                    {state.errors?.message && (
                        <span className="text-error text-xs mt-1">{state.errors.message[0]}</span>
                    )}
                </div>
            </div>

            {state.message && !state.success && (
                <div className="alert alert-error bg-red-900/30 border-2 border-red-700 text-red-400">
                    <span>{state.message}</span>
                </div>
            )}

            <button 
                type="submit" 
                disabled={isPending}
                className="btn btn-primary w-full text-white gap-2 text-lg"
            >
                {isPending ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
            </button>
        </form>
    )
}
