import { createPost } from '../actions';

export default function CreatePostPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form action={createPost} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={5}
            className="textarea textarea-bordered w-full"
            placeholder="Write your blog post here..."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Publish Post
        </button>
      </form>
    </div>
  );
}
