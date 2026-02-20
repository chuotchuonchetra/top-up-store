import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const StatsCard = ({ title, value, icon, trend }: StatsCardProps) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl flex items-center justify-between hover:border-[#00D2FF]/50 transition-all group">
      <div>
        <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
        {trend && (
          <p
            className={`text-xs font-semibold ${trend.isPositive ? "text-emerald-400" : "text-red-400"}`}>
            {trend.isPositive ? "↑" : "↓"} {trend.value}
            <span className="text-slate-500 font-normal ml-1">
              vs last month
            </span>
          </p>
        )}
      </div>
      <div className="p-3 bg-slate-900 rounded-xl text-[#00D2FF] group-hover:bg-[#00D2FF] group-hover:text-slate-900 transition-colors">
        {icon}
      </div>
    </div>
  );
};
