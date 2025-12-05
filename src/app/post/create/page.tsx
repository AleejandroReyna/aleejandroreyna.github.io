'use client';

import { createPost } from '../actions';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import TiptapEditor to avoid SSR issues
const TiptapEditor = dynamic(() => import('@/components/TiptapEditor'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

export default function CreatePostPage() {
  const [content, setContent] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form action={createPost} className="max-w-4xl">
        {/* Hidden input to pass content to server action */}
        <input type="hidden" name="content" value={content} />

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Content
          </label>
          <TiptapEditor onChange={setContent} />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Publish Post
        </button>
      </form>
    </div>
  );
}
