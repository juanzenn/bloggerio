import { Outlet } from "@remix-run/react";
import Sidebar from "~/features/Dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
