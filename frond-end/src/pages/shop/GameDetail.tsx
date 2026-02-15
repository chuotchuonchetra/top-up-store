import { useEffect, useState, type ChangeEvent } from "react";
import { PackageCard } from "../../components/client/PackageCard";
import type { Package } from "../../types/package";
import { useParams } from "react-router-dom";
import { Payment } from "../../components/client/Payment";
import QRModal from "../../components/client/QRModal";
import axios from "axios";

const GameDetail = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  const params = useParams<{ gameSlug: string; gameId: string }>();
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/packages",
          {
            params: {
              gameId: params.gameId,
            },
          },
        );
        setPackages(response.data);
        console.log("Fetched packages:", response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchPackages();
  }, [params.gameSlug, params.gameId]);
  const [gameId, setGameId] = useState<string>("");
  const [zoneId, setZoneId] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
                <PackageCard
                  pkg={pkg}
                  key={pkg.id}
                  isSelected={selectedId === pkg.id.toString()}
                  onSelect={setSelectedId}
                />
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
          <Payment />

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#00D2FF] hover:bg-[#00b8e6] text-slate-900 font-extrabold py-4 rounded-xl transition-all shadow-lg shadow-[#00D2FF]/20">
            BUY NOW
          </button>
          <QRModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            amount={100}
            packageName={"Monthly Epic Bundle"}
          />
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
