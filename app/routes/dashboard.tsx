import { Outlet } from "@remix-run/react";
import { useLoadAuth } from "hooks/useAuth";
import Sidebar from "~/features/Dashboard/Sidebar";

export default function DashboardLayout() {
  const loadingSession = useLoadAuth();

  if (loadingSession) return null;

  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
