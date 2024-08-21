export default function CreateNewPost() {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        Create New Post
      </h1>

      <main className="flex-grow">
        <form className="max-w-3xl mx-auto bg-white p-10 shadow-xl rounded-lg border border-gray-200">
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter the post title"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md p-3 transition-colors duration-300 ease-in-out hover:border-blue-400 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Enter the post content"
              rows="6"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md p-3 transition-colors duration-300 ease-in-out hover:border-blue-400 focus:outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            >
              Save Post
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
