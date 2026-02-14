import { Gamepad2, House, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
export const Navbar = () => {
  return (
    // Changed bg to brand-dark (#1A1C1E) and border to a subtle cyan tint
    <div className="bg-[#1A1C1E] shadow-lg border-b border-cyan-900/30 w-screen fixed top-0 z-50">
      <nav className="flex justify-around items-center h-16 max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            className="w-12 h-auto logo-animate"
            alt="TRATOPUP Logo"
          />
          <span className="ml-2 text-white font-bold text-xl tracking-tight hidden sm:block">
            TRA<span className="text-[#00D2FF]">TOPUP</span>
          </span>
        </div>

        {/* Search Section */}
        <div className="hidden sm:block">
          <input
            type="search"
            className="bg-[#242729] border border-gray-700 text-white rounded-full px-5 py-1.5 w-64 focus:outline-none focus:ring-2 focus:ring-[#00D2FF] focus:border-transparent transition-all placeholder-gray-500 "
            placeholder="Search games..."
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex space-x-8   c:\Users\traem\Downloads\image-Photoroom.png">
            <li>
              <Link
                to={"./home"}
                className="text-gray-300 flex gap-1 items-center hover:text-[#00D2FF] font-medium transition-colors">
                <House size={16} /> Home
              </Link>
            </li>
            <li>
              <Link
                to={"./games"}
                className="text-gray-300 flex gap-1 items-center hover:text-[#00D2FF] font-medium transition-colors">
                <Gamepad2 size={16} /> Games
              </Link>
            </li>
            <li>
              <Link
                to={"./contact"}
                className="text-gray-300 flex gap-1 items-center hover:text-[#00D2FF] font-medium transition-colors">
                <PhoneCall size={16} /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu & Action */}
        <div className="flex items-center space-x-4">
          {/* Primary Topup Button - Using the Fanny Energy Gradient */}
          <Link
            to={"./Login"}
            className="bg-linear-to-r from-[#00D2FF] to-[#3A7BD5] rounded-sm  text-white px-4 py-2.5  text-sm font-bold hover:opacity-90 transition-opacity">
            LOGIN
          </Link>

          <button className="md:hidden text-gray-300 hover:text-[#00D2FF] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};
