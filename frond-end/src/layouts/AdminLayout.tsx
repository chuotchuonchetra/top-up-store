import { AdminSidebar } from "../components/admin/AdminSidebar";
import { StatWidgets } from "../components/admin/StatWidgets";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-900">
      <div className="">
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        <div className="flex ">
          <div className="w-70 bg-white min-h-[calc(100vh-32px)]">
            <AdminSidebar />
          </div>
          <div className="flex-1 ">
            <StatWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};
