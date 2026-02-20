import { Wallet2, Gamepad2, Users, Clock } from "lucide-react";
import { StatsCard } from "../../components/admin/StatsCard";

export const Dashboard = () => {
  return (
    <div className="p-8 space-y-8 bg-[#0f172a] min-h-screen text-white">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$4,250.00"
          icon={<Wallet2 size={24} />}
          trend={{ value: "12%", isPositive: true }}
        />
        <StatsCard
          title="Pending Orders"
          value="14"
          icon={<Clock size={24} />}
          trend={{ value: "Action Needed", isPositive: false }}
        />
        <StatsCard
          title="Total Games"
          value="8"
          icon={<Gamepad2 size={24} />}
        />
        <StatsCard
          title="New Users"
          value="124"
          icon={<Users size={24} />}
          trend={{ value: "5%", isPositive: true }}
        />
      </div>

      {/* Chart Placeholder */}
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 h-80 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-slate-700 rounded-full animate-pulse mb-4 flex items-center justify-center">
          <Wallet2 className="text-slate-500" />
        </div>
        <p className="text-slate-400 font-medium text-lg">Revenue Analytics</p>
        <p className="text-slate-500 text-sm">
          Visual data will appear here once connected to Recharts.
        </p>
      </div>
    </div>
  );
};
