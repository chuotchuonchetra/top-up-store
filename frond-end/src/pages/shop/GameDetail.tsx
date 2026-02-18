import { PackageCard } from "../../components/client/PackageCard";
import type { Package } from "../../types/package";
import { useParams } from "react-router-dom";
import { Payment } from "../../components/client/Payment";
import QRModal from "../../components/client/QRModal";
import axios from "axios";
import { InputId } from "./InputId";
import { useEffect, useState } from "react";

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

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
          <InputId gameName={params.gameSlug} />

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
