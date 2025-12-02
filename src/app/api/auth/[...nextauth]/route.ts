import { handlers } from "@/auth";

// Export the GET and POST handlers from Auth.js
// These handle all authentication requests:
// - POST /api/auth/signin - Login
// - POST /api/auth/signout - Logout
// - GET /api/auth/session - Get current session
// - GET /api/auth/csrf - Get CSRF token
export const { GET, POST } = handlers;
