import { Link } from "react-router-dom";

export default function ShowPosts() {
  // Sample posts data
  const posts = [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
    },
    // Add more posts as needed
  ];

  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Posts</h1>

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.content}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
