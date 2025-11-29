import { z } from 'zod';

// Schema for login form validation
export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

// TypeScript type inferred from schema
export type LoginFormData = z.infer<typeof LoginFormSchema>;
