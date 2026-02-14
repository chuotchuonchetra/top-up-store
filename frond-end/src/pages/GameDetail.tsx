import { useState, type ChangeEvent } from "react";
import { PackageCard } from "../components/PackageCard";
import type { Package } from "../types/Package.type";
import { useParams } from "react-router-dom";
import { packages } from "../assets/data/mlbb/package";

const GameDetail = () => {
  const [gameId, setGameId] = useState<string>("");
  const [zoneId, setZoneId] = useState<string>("");
  const params = useParams<{ gameSlug: string }>();

  const handleNumericChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void,
  ) => {
    const { value } = e.target;

    // Strict Filter: Only allow a string of digits from start to end
    // The empty string '' check allows the user to backspace/clear the field
    if (value === "" || /^\d+$/.test(value)) {
      setter(value);
    }
  };

  const savingPackages: Package[] = [
    {
      id: 6,
      type: "Monthly Epic Bundle",
      price: "$4.09",
      icon: "../../public/assets/montlypackage.png",
    },
    {
      id: 7,
      type: "42 Diamonds",
      price: "$0.85",
      icon: "../../public/assets/diamond.png",
    },
    {
      id: 8,
      type: "14 Diamonds",
      price: "$0.30",
      icon: "../../public/assets/diamond.png",
    },
    {
      id: 9,
      type: "70 Diamonds",
      price: "$1.29",
      icon: "../../public/assets/diamond.png",
    },
    // ... add more as needed
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] p-4 md:p-8 text-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: ITEM SELECTION */}
        <div className="lg:col-span-2 space-y-10">
          {/* Best Selling Section */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#00D2FF] font-bold uppercase tracking-wider">
              <span className="p-1 bg-[#00D2FF]/20 rounded-full">
                <img
                  className="w-6"
                  src="https://cdn-icons-png.flaticon.com/512/10760/10760660.png"
                  alt=""
                />
              </span>
              BEST SELLING {params.gameSlug}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {packages.map((pkg) => (
                <PackageCard pkg={pkg} key={pkg.id} />
              ))}
            </div>
          </section>

          {/* Saving Packages Section */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#00D2FF] font-bold uppercase tracking-wider">
              <span className="p-1 bg-[#00D2FF]/20 rounded-full">💎</span>
              SAVING PACKAGES
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {savingPackages.map((pkg) => (
                <PackageCard pkg={pkg} key={pkg.id} />
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: FORMS & PAYMENT */}
        <div className="space-y-6">
          {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-700">
            <img
              src="../../public/assets/welcome.png"
              alt="Promo"
              className="w-full object-cover"
            />
          </div>

          {/* Input Information */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
            <h3 className="flex items-center gap-2 font-bold mb-4">
              <span className="text-[#00D2FF]">👤</span> Enter Your Information
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="e.g. 12345678"
                inputMode="numeric"
                value={gameId}
                onChange={(e) => handleNumericChange(e, setGameId)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 outline-none focus:border-[#00D2FF] transition"
              />
              <input
                type="text"
                placeholder="Server ID"
                value={zoneId}
                onChange={(e) => handleNumericChange(e, setZoneId)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 outline-none focus:border-[#00D2FF] transition"
              />
              <div className="flex justify-between items-center text-sm px-1">
                <span className="text-slate-400">Player</span>
                <span className="text-red-500 font-semibold">Invalid</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
            <h3 className="flex items-center gap-2 font-bold mb-4">
              <span className="text-[#00D2FF]">💳</span> Payment Method
            </h3>
            <div className="border-2 border-[#00D2FF] bg-slate-900 p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center font-bold text-[10px]">
                  ABA
                </div>
                <div>
                  <div className="text-xs font-bold uppercase">ABA KHQR</div>
                  <div className="text-[10px] text-slate-400">
                    Scan to pay with any banking app
                  </div>
                </div>
              </div>
              <div className="bg-[#00D2FF] text-white rounded-full p-1 text-[10px]">
                ✔
              </div>
            </div>
          </div>

          <button className="w-full bg-[#00D2FF] hover:bg-[#00b8e6] text-slate-900 font-extrabold py-4 rounded-xl transition-all shadow-lg shadow-[#00D2FF]/20">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
