import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  // Sample post data for demonstration
  const post = {
    1: {
      title: "First Post",
      content: "This is the content of the first post.",
    },
    2: {
      title: "Second Post",
      content: "This is the content of the second post.",
    },
    // Add more posts as needed
  }[id];

  if (!post) return <div className="text-center">Post not found</div>;

  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {post.title}
        </h1>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
}
