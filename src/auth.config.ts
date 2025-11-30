import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login', // Redirect here when user tries to access protected route
    },
    callbacks: {
        // This runs on EVERY request to check if user can access the page
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user; // Check if session exists
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            if (isOnDashboard) {
                if (isLoggedIn) return true; // Allow access
                return false; // Redirect to login
            }

            return true; // Allow access to all other pages
        },
    },
    providers: [], // We'll add the Credentials provider in auth.ts
} satisfies NextAuthConfig;
