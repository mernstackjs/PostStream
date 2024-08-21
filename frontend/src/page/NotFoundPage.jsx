import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/login" className="text-blue-500 hover:underline text-lg">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
