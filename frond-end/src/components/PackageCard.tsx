import type { Package } from "../types/Package.type";

export const PackageCard = ({ pkg }: { pkg: Package }) => {
  return (
    <button
      key={pkg.id}
      className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex flex-col gap-1 hover:border-[#00D2FF] transition-all text-left">
      <div className="text-orange-400 font-bold">{pkg.price}</div>
      <div className="flex items-center gap-2 text-xs text-slate-300">
        <img src={pkg.icon} className="w-6 h-6" alt={pkg.type} /> {pkg.type}
      </div>
    </button>
  );
};
