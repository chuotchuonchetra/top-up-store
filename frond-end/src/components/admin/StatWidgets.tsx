import { ArrowUpRight, ArrowDownRight } from "lucide-react";
interface StatWidgetProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  trend?: {
    value: number;
    isUpward: boolean;
  };
  color: "blue" | "green" | "red" | "yellow";
}
export const StatWidget = ({
  label,
  value,
  icon: Icon,
  trend,
  color,
}: StatWidgetProps) => {
  const colors = {
    blue: "bg-blue-500/10 text-blue-500",
    green: "bg-green-500/10 text-green-500",
    red: "bg-red-500/10 text-red-500",
    yellow: "bg-yellow-500/10 text-yellow-500",
  };

  return (
    <div className="rounded-xl bg-slate-800 p-6 border border-slate-700 shadow-sm">
      <div className="flex items-center justify-between">
        <div className={`rounded-lg p-2 ${colors[color]}`}>
          <Icon size={24} />
        </div>
        {trend && (
          <div
            className={`flex items-center text-xs font-medium ${trend.isUpward ? "text-green-400" : "text-red-400"}`}>
            {trend.isUpward ?
              <ArrowUpRight size={14} />
            : <ArrowDownRight size={14} />}
            {trend.value}%
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-slate-400">{label}</p>
        <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
      </div>
    </div>
  );
};
