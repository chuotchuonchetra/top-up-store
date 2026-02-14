import type { Package } from "../types/Package.type";

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean; // Parent tells the card if it's selected
  onSelect: (id: string) => void; // Parent handles the click logic
}

export const PackageCard = ({
  pkg,
  isSelected,
  onSelect,
}: PackageCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(pkg.id.toString())}
      className={`relative bg-slate-800/50 border p-4 rounded-xl flex flex-col gap-1 transition-all text-left w-full
       hover:border-[#00D2FF] 
       ${isSelected ? "border-[#00D2FF] ring-1 ring-[#00D2FF]" : "border-slate-700"}
      `}>
      {/* Verification Checkmark Icon */}
      {isSelected && (
        <div className="absolute top-2 right-2 text-[#00D2FF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
      )}

      <div className="text-orange-400 font-bold">{pkg.price}</div>
      <div className="flex items-center gap-2 text-xs text-slate-300">
        <img src={pkg.icon} className="w-6 h-6 object-contain" alt={pkg.type} />
        <span>{pkg.type}</span>
      </div>
    </button>
  );
};
