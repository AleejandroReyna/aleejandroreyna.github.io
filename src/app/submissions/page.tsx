import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export default async function SubmissionsPage() {
    // Check authentication
    const session = await auth();
    if (!session?.user) {
        redirect('/login');
    }

    // Fetch all submissions, ordered by newest first
    const submissions = await prisma.contactSubmission.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    await prisma.$disconnect();

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Contact Submissions
                        </h1>
                        <p className="text-gray-600">
                            Total submissions: {submissions.length}
                        </p>
                    </div>
                    <Link href="/dashboard" className="btn btn-ghost">
                        ← Back to Dashboard
                    </Link>
                </div>

                {/* Submissions List */}
                {submissions.length === 0 ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
                        <p className="text-gray-500 text-lg">No submissions yet.</p>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {submissions.map((submission) => (
                            <Link
                                key={submission.id}
                                href={`/submissions/${submission.id}`}
                                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h2 className="text-xl font-semibold text-gray-900">
                                                {submission.name}
                                            </h2>
                                            {!submission.read && (
                                                <span className="badge badge-primary badge-sm">New</span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 mb-2">{submission.email}</p>
                                        <p className="text-lg font-medium text-gray-800 mb-2">
                                            {submission.subject}
                                        </p>
                                        <p className="text-gray-600 line-clamp-2">
                                            {submission.message}
                                        </p>
                                    </div>
                                    <div className="text-right ml-4">
                                        <p className="text-sm text-gray-500">
                                            {new Date(submission.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {new Date(submission.createdAt).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
