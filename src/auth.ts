import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { LoginFormSchema } from '@/lib/definitions';

const prisma = new PrismaClient();

// Helper function to fetch user from database
async function getUser(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

// Initialize NextAuth with our configuration
export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig, // Spread the edge-compatible config
    providers: [
        Credentials({
            // This function runs when user submits login form
            async authorize(credentials) {
                // Step 1: Validate input with Zod
                const parsedCredentials = LoginFormSchema.safeParse(credentials);

                if (!parsedCredentials.success) {
                    console.log('Invalid input format');
                    return null; // Return null = login failed
                }

                // Step 2: Extract validated data
                const { email, password } = parsedCredentials.data;

                // Step 3: Fetch user from database
                const user = await getUser(email);
                if (!user) {
                    console.log('User not found');
                    return null;
                }

                // Step 4: Check if user has a password (might be OAuth-only user)
                if (!user.password) {
                    console.log('User has no password set');
                    return null;
                }

                // Step 5: Compare submitted password with hashed password in DB
                const passwordsMatch = await bcrypt.compare(password, user.password);

                if (passwordsMatch) {
                    // Success! Return user object (without password!)
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        image: user.image,
                    };
                }

                console.log('Invalid password');
                return null;
            },
        }),
    ],
});
