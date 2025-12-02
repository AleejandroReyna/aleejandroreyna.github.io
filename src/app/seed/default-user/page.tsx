import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export default async function SeedPage() {
    // Get default user credentials from environment variables
    const defaultEmail = process.env.DEFAULT_EMAIL;
    const defaultName = process.env.DEFAULT_NAME;
    const defaultPassword = process.env.DEFAULT_PASSWORD;

    // Check if environment variables are set
    if (!defaultEmail || !defaultPassword) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <div className="max-w-2xl w-full space-y-8">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">
                            ❌ Missing Environment Variables
                        </h1>
                        <p className="text-red-800 mb-4">
                            Please add the following to your <code className="bg-red-100 px-2 py-1 rounded">.env.local</code> file:
                        </p>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                            {`DEFAULT_EMAIL="your.email@example.com"
DEFAULT_NAME="Your Name"
DEFAULT_PASSWORD="your-secure-password"`}
                        </pre>
                    </div>
                </div>
            </main>
        );
    }

    let userExists = false;
    let userCreated = false;
    let error = null;

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: defaultEmail },
        });

        if (existingUser) {
            userExists = true;
        } else {
            // Hash the password
            const hashedPassword = await bcrypt.hash(defaultPassword, 10);

            // Create the user
            await prisma.user.create({
                data: {
                    email: defaultEmail,
                    name: defaultName || 'Default User',
                    password: hashedPassword,
                },
            });

            userCreated = true;
        }
    } catch (e) {
        error = e instanceof Error ? e.message : 'Unknown error occurred';
    } finally {
        await prisma.$disconnect();
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="max-w-2xl w-full space-y-8">
                {/* Success - User Already Exists */}
                {userExists && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                        <h1 className="text-2xl font-bold text-blue-600 mb-4">
                            ℹ️ User Already Exists
                        </h1>
                        <p className="text-blue-800 mb-4">
                            The default user already exists in the database.
                        </p>
                        <div className="bg-white rounded-lg p-4 border border-blue-100">
                            <p className="font-medium text-gray-700">Email:</p>
                            <p className="text-gray-900 font-mono">{defaultEmail}</p>
                        </div>
                        <div className="mt-6">
                            <a
                                href="/login"
                                className="btn btn-primary text-white"
                            >
                                Go to Login
                            </a>
                        </div>
                    </div>
                )}

                {/* Success - User Created */}
                {userCreated && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                        <h1 className="text-2xl font-bold text-green-600 mb-4">
                            ✅ Default User Created Successfully!
                        </h1>
                        <p className="text-green-800 mb-4">
                            You can now log in with these credentials:
                        </p>
                        <div className="bg-white rounded-lg p-4 border border-green-100 space-y-2">
                            <div>
                                <p className="font-medium text-gray-700">Email:</p>
                                <p className="text-gray-900 font-mono">{defaultEmail}</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-700">Name:</p>
                                <p className="text-gray-900">{defaultName || 'Default User'}</p>
                            </div>
                        </div>
                        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p className="text-sm text-yellow-800">
                                <strong>⚠️ Security Note:</strong> Make sure your <code className="bg-yellow-100 px-1 rounded">.env.local</code> file is in <code className="bg-yellow-100 px-1 rounded">.gitignore</code> and never commit it to your repository.
                            </p>
                        </div>
                        <div className="mt-6">
                            <a
                                href="/login"
                                className="btn btn-primary text-white"
                            >
                                Go to Login
                            </a>
                        </div>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">
                            ❌ Error Creating User
                        </h1>
                        <p className="text-red-800 mb-4">
                            An error occurred while creating the default user:
                        </p>
                        <pre className="bg-gray-900 text-red-400 p-4 rounded-lg overflow-x-auto">
                            {error}
                        </pre>
                    </div>
                )}
            </div>
        </main>
    );
}
