import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/userContext";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return <Outlet />; // Ensure it renders children correctly
}
