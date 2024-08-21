import { Link } from "react-router-dom";
import { useUser } from "../../../context/userContext";

export default function SidebarDashboard() {
  const { logout } = useUser();
  const onLogout = () => {
    logout();
  };
  return (
    <div className="bg-[#34495e] w-64 h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-[#ecf0f1] text-xl font-bold p-5">Dashboard</h2>
        <ul className="m-5 space-y-4">
          <li>
            <Link
              to="create-new-post"
              className="text-[#ecf0f1] hover:bg-[#16a085] p-2 rounded block"
            >
              Add New Post
            </Link>
          </li>
          <li>
            <Link
              to="show-posts"
              className="text-[#ecf0f1] hover:bg-[#16a085] p-2 rounded block"
            >
              Show Posts
            </Link>
          </li>
          <li>
            <Link
              to="view-analytics"
              className="text-[#ecf0f1] hover:bg-[#16a085] p-2 rounded block"
            >
              View Analytics
            </Link>
          </li>
          <li>
            <Link
              to="manage-users"
              className="text-[#ecf0f1] hover:bg-[#16a085] p-2 rounded block"
            >
              Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="settings"
              className="text-[#ecf0f1] hover:bg-[#16a085] p-2 rounded block"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="m-5">
        <button
          onClick={onLogout}
          className="bg-[#e74c3c] text-white w-full p-2 rounded hover:bg-[#c0392b]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
