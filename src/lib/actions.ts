'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// Server Action called by the login form
// This runs on the server, so credentials are never exposed to the client
export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        // Call Auth.js signIn with credentials provider
        // This will trigger our authorize() function in auth.ts
        await signIn('credentials', formData);
    } catch (error) {
        // Auth.js throws AuthError for authentication failures
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        // Re-throw other errors (like redirect errors, which are expected)
        throw error;
    }
}
