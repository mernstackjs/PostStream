import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./page/auth/LoginPage";
import Dashboard from "./page/Dashboard/page";
import DashboardLayout from "./page/Dashboard/layout";
import CreateNewPost from "./page/post/createNewPost/page";
import ShowPosts from "./page/post/showPosts/page";
import SettingsPage from "./page/Dashboard/settings/page";
import ProfilePage from "./page/profile/page";
import SignupPage from "./page/auth/SignupPage";
import { useUser } from "./context/userContext";
import NotFoundPage from "./page/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PostDetail from "./page/post/showPosts/PostDetail";

export default function App() {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard/profile" /> : <LoginPage />}
        />
        <Route path="/singup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="create-new-post" element={<CreateNewPost />} />

            <Route path="show-posts" element={<ShowPosts />} />
            <Route path=":id" element={<PostDetail />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
