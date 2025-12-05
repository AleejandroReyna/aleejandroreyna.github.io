'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
  const content = formData.get('content') as string;

  if (!content) {
    throw new Error('Content is required');
  }

  await prisma.post.create({
    data: {
      content,
    },
  });

  revalidatePath('/post/create');
  redirect('/post/create'); // Or redirect to the post detail if preferred
}
