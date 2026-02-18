import { Gamepad2, LayoutDashboardIcon, Wallet2 } from "lucide-react";

export const AdminSidebar = () => {
  return (
    <div className=" ">
      <div className="p-3">
        <div className="flex items-center cursor-pointer">
          <img
            src="/logo.png"
            className="w-12 h-auto logo-animate"
            alt="TRATOPUP Logo"
          />
          <span className="ml-2 text-black font-bold text-xl tracking-tight hidden sm:block">
            TRA<span className="text-[#00D2FF]">TOPUP</span>
          </span>
        </div>
        <ul className="list mt-3 w-30 flex flex-col gap-2">
          <li className="list-item border active text-white bg-[#415a77] p-1  rounded-md ">
            <div className="flex items-center justify-center gap-1">
              <LayoutDashboardIcon size={16} /> Dashboard
            </div>
          </li>
          <li className="list-item border  p-1  rounded-md ">
            <div className="flex items-center justify-center gap-1">
              <Gamepad2 size={16} /> Game
            </div>
          </li>

          <li className="list-item border p-1 rounded-md">
            <div className="flex items-center justify-center gap-1">
              <Wallet2 size={16} /> Wallet
            </div>
          </li>
          <li className="list-item border p-1 rounded-md">
            <div className="flex items-center justify-center gap-1">
              <Gamepad2 size={16} /> Dashboard
            </div>
          </li>
        </ul>
      </div>
      <h1>Sidebar</h1>
    </div>
  );
};
