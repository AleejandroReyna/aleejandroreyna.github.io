import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    // Get the current session
    const session = await auth();

    // If no session, redirect to login (backup - middleware should handle this)
    if (!session?.user) {
        redirect('/login');
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="max-w-2xl w-full space-y-8">
                {/* Success Message */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-600 mb-4">
                        ✅ Authentication Successful!
                    </h1>
                    <p className="text-xl text-gray-600">
                        You are now logged in to the dashboard.
                    </p>
                </div>

                {/* User Info Card */}
                <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        User Information
                    </h2>
                    <div className="space-y-3">
                        <div>
                            <span className="font-medium text-gray-600">Email:</span>
                            <span className="ml-2 text-gray-900">{session.user.email}</span>
                        </div>
                        <div>
                            <span className="font-medium text-gray-600">Name:</span>
                            <span className="ml-2 text-gray-900">{session.user.name || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-medium text-gray-600">User ID:</span>
                            <span className="ml-2 text-gray-900 font-mono text-sm">{session.user.id}</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Quick Links
                    </h2>
                    <div className="space-y-2">
                        <a
                            href="/submissions"
                            className="block btn btn-primary text-white w-full"
                        >
                            📬 View Contact Submissions
                        </a>
                    </div>
                </div>

                {/* Sign Out Button */}
                <form
                    action={async () => {
                        'use server';
                        await signOut();
                    }}
                    className="text-center"
                >
                    <button
                        type="submit"
                        className="btn btn-error text-white px-8"
                    >
                        Sign Out
                    </button>
                </form>

                {/* Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-900 mb-2">
                        🧪 Test Instructions
                    </h3>
                    <ul className="space-y-2 text-sm text-blue-800">
                        <li>✓ You successfully logged in!</li>
                        <li>✓ This page is protected by middleware</li>
                        <li>✓ Click "Sign Out" to test logout</li>
                        <li>✓ Try accessing this page in incognito mode (should redirect to login)</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
