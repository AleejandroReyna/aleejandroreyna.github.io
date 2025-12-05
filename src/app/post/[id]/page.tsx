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

  // Very basic JSON rendering for now, as we are storing JSON blocks
  // In a real app, you would parse the blocks and render HTML
  let renderedContent;
  try {
    const blocks = JSON.parse(post.content);
    renderedContent = (
      <div className="space-y-4">
        {blocks.map((block: any, index: number) => {
             // Simple renderer for demonstration
             if (block.name === 'core/paragraph') {
                 return <p key={index} dangerouslySetInnerHTML={{ __html: block.attributes.content }} />;
             }
             if (block.name === 'core/heading') {
                 const Tag = `h${block.attributes.level}` as keyof JSX.IntrinsicElements;
                 return <Tag key={index} dangerouslySetInnerHTML={{ __html: block.attributes.content }} />;
             }
             return <div key={index}>[Unsupported Block: {block.name}]</div>
        })}
      </div>
    );
  } catch (e) {
    // Fallback if it's plain text or invalid JSON
    renderedContent = <div className="whitespace-pre-wrap">{post.content}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <article className="prose lg:prose-xl">
        <h1>Post Details</h1>
        <p className="text-sm text-gray-500">
          Created at: {post.createdAt.toLocaleDateString()}
        </p>
        <div className="mt-4">{renderedContent}</div>
      </article>
    </div>
  );
}
