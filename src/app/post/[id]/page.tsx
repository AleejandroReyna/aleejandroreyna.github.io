import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostDetailPage(props: PageProps) {
  const params = await props.params;
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <article className="prose lg:prose-xl">
        <h1>Post Details</h1>
        <p className="text-sm text-gray-500">
          Created at: {post.createdAt.toLocaleDateString()}
        </p>
        <div className="mt-4 whitespace-pre-wrap">{post.content}</div>
      </article>
    </div>
  );
}
