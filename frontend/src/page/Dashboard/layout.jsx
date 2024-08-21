import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SidebarDashboard from "./sidebar/SidebarDashboard";

export default function DashboardLayout() {
  return (
    <div className="flex max-h-screen">
      <SidebarDashboard />
      <main className=" flex-1  overflow-auto">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
