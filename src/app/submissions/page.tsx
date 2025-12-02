import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Eye } from 'lucide-react';

const prisma = new PrismaClient();

interface PageProps {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function SubmissionsPage(props: PageProps) {
    const searchParams = await props.searchParams;
    const page = Number(searchParams.page) || 1;
    const pageSize = 10;
    const skip = (page - 1) * pageSize;

    // Check authentication
    const session = await auth();
    if (!session?.user) {
        redirect('/login');
    }

    // Fetch total count
    const totalCount = await prisma.contactSubmission.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    // Fetch paginated submissions, ordered by newest first
    const submissions = await prisma.contactSubmission.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        skip,
        take: pageSize,
    });

    await prisma.$disconnect();

    return (
        <main className="min-h-screen p-32">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Contact Submissions
                        </h1>
                        <p className="text-gray-600">
                            Total submissions: {totalCount} (Page {page} of {totalPages})
                        </p>
                    </div>
                    <Link href="/dashboard" className="btn btn-ghost">
                        ← Back to Dashboard
                    </Link>
                </div>

                {/* Submissions List */}
                {submissions.length === 0 ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
                        <p className="text-gray-500 text-lg">No submissions found.</p>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {submissions.map((submission) => (
                            <article key={submission.id} className='card bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                                <div className="flex justify-between items-stretch">
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
                                    <div className="text-right ml-4 flex flex-col">
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


                                        <Link
                                            key={submission.id}
                                            href={`/submissions/${submission.id}`}
                                            className="btn btn-primary mt-auto btn-sm"
                                            aria-label="View submission"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </Link>
                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-8 gap-2">
                        <Link
                            href={`/submissions?page=${page - 1}`}
                            className={`btn ${page <= 1 ? 'btn-disabled' : 'btn-outline'}`}
                            aria-disabled={page <= 1}
                            tabIndex={page <= 1 ? -1 : undefined}
                        >
                            Previous
                        </Link>
                        <div className="join">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <Link
                                    key={p}
                                    href={`/submissions?page=${p}`}
                                    className={`join-item btn ${p === page ? 'btn-primary' : 'btn-outline'}`}
                                >
                                    {p}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href={`/submissions?page=${page + 1}`}
                            className={`btn ${page >= totalPages ? 'btn-disabled' : 'btn-outline'}`}
                            aria-disabled={page >= totalPages}
                            tabIndex={page >= totalPages ? -1 : undefined}
                        >
                            Next
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}
