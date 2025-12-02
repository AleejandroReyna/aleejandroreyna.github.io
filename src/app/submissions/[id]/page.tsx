import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { auth } from '@/auth';
import { redirect, notFound } from 'next/navigation';


interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function SubmissionDetailPage(props: PageProps) {
    const params = await props.params;

    // Check authentication
    const session = await auth();
    const prisma = new PrismaClient();

    if (!session?.user) {
        redirect('/login');
    }

    // Fetch the specific submission
    const submission = await prisma.contactSubmission.findUnique({
        where: {
            id: params.id,
        },
    });

    // If submission doesn't exist, show 404
    if (!submission) {
        await prisma.$disconnect();
        notFound();
    }

    // Mark as read if it wasn't already
    if (!submission.read) {
        await prisma.contactSubmission.update({
            where: { id: params.id },
            data: { read: true },
        });
    }

    await prisma.$disconnect();

    return (
        <main className="min-h-screen p-32">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/submissions" className="btn btn-ghost mb-4">
                        ← Back to Submissions
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Submission Details
                    </h1>
                    <p className="text-gray-600">
                        Received on {new Date(submission.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </p>
                </div>

                {/* Submission Details Card */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-primary p-6 text-white">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold mb-1">{submission.name}</h2>
                                <a
                                    href={`mailto:${submission.email}`}
                                    className="text-blue-100 hover:text-white underline"
                                >
                                    {submission.email}
                                </a>
                            </div>
                            {submission.read ? (
                                <span className="badge badge-ghost">Read</span>
                            ) : (
                                <span className="badge badge-warning">Unread</span>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-6">
                        {/* Subject */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                Subject
                            </h3>
                            <p className="text-xl font-semibold text-gray-900">
                                {submission.subject}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200"></div>

                        {/* Message */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                Message
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                                    {submission.message}
                                </p>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <h3 className="text-sm font-semibold text-blue-900 mb-3">
                                Submission Information
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-blue-600 font-medium">Submission ID</p>
                                    <p className="text-blue-900 font-mono text-xs">{submission.id}</p>
                                </div>
                                <div>
                                    <p className="text-blue-600 font-medium">Status</p>
                                    <p className="text-blue-900">
                                        {submission.read ? 'Read' : 'Unread'}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-blue-600 font-medium">Received</p>
                                    <p className="text-blue-900">
                                        {new Date(submission.createdAt).toLocaleString('en-US')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex gap-3">
                            <a
                                href={`mailto:${submission.email}?subject=Re: ${submission.subject}`}
                                className="btn btn-primary text-white"
                            >
                                Reply via Email
                            </a>
                            <Link
                                href="/submissions"
                                className="btn btn-ghost"
                            >
                                Back to List
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
