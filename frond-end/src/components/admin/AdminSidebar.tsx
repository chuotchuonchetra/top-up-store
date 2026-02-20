import {
  Gamepad2,
  LayoutDashboard,
  Wallet2,
  ShoppingCart,
  LogOut,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export const AdminSidebar = () => {
  // Navigation items array for cleaner code
  const navItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingCart size={20} /> },
    {
      name: "Game Management",
      path: "/admin/games",
      icon: <Gamepad2 size={20} />,
    },
    {
      name: "Wallet/Balance",
      path: "/admin/wallet",
      icon: <Wallet2 size={20} />,
    },
  ];

  return (
    <div className="w-64 bg-[#0f172a] border-r border-slate-800 h-screen flex flex-col">
      {/* LOGO SECTION */}
      <Link
        to={"/admin/dashboard"}
        className="p-6 flex items-center border-b border-slate-800">
        <img
          src="/logo.png"
          className="w-10 h-auto logo-animate"
          alt="TRATOPUP Logo"
        />
        <span className="ml-3 text-white font-bold text-xl tracking-tight">
          TRA<span className="text-[#00D2FF]">TOPUP</span>
        </span>
      </Link>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1 p-4 mt-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive ?
                      "bg-[#00D2FF] text-slate-900 font-bold shadow-lg shadow-[#00D2FF]/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`
                }>
                <span className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* FOOTER / LOGOUT */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
