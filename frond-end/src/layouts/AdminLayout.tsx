import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/admin/AdminSidebar";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-900">
      <div className="">
        <div className="flex ">
          <div className="">
            <AdminSidebar />
          </div>
          <div className="flex-1 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
