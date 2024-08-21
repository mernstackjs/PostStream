import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  const [open, setOpen] = useState(false);
  function OnopenClone() {
    setOpen(!open);
  }
  return (
    <div className="flex  justify-between items-center p-4 bg-slate-600 sticky top-0">
      <button
        onClick={OnopenClone}
        className="flex justify-end cursor-pointer w-full text-white"
      >
        <FaUserAlt />
      </button>
      {open && (
        <div className="relative ">
          <div
            className={`absolute right-0 top-5 mt-2 w-64 p-5 bg-slate-800 text-white rounded shadow-lg transition-transform transform ${
              open ? "scale-100" : "scale-95"
            } origin-top-right`}
          >
            user profile
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  onClick={OnopenClone}
                  to="profile"
                  className="block p-2 hover:bg-slate-700 rounded"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  onClick={OnopenClone}
                  to="settings"
                  className="block p-2 hover:bg-slate-700 rounded"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
