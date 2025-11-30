import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Export the auth middleware
// This uses the authConfig we created (which has the 'authorized' callback)
export default NextAuth(authConfig).auth;

// Configure which routes this middleware should run on
export const config = {
    // This regex matches all routes EXCEPT:
    // - /api (API routes)
    // - /_next/static (Next.js static files)
    // - /_next/image (Next.js image optimization)
    // - .png files (and other static assets)
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
