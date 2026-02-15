import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    // Use w-full instead of w-screen to prevent horizontal overflow
    <footer className="mt-10 w-full bg-[#1A1C1E] text-white shadow-lg border-t border-cyan-900/30">
      {/* Main Footer Content Container */}
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Branding Area */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              className="w-12 h-12 object-contain"
              alt="TRATOPUP Logo"
            />
            <span className="text-xl font-bold tracking-tight">
              TRA<span className="text-[#00D2FF]">TOPUP</span>
            </span>
          </div>
          <p className="text-sm text-white/60">
            Fast, secure, and simple game top-up.
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-6 text-sm font-medium text-white/80">
            <li>
              <Link to="/" className="hover:text-[#00D2FF] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gamedetail"
                className="hover:text-[#00D2FF] transition-colors">
                Games
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                className="hover:text-[#00D2FF] transition-colors">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 px-4 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} TRATOPUP. All rights reserved.
      </div>
    </footer>
  );
};
