import { Outlet } from "react-router-dom";
import { Footer } from "../components/shares/Footer";
import { Navbar } from "../components/shares/Navbar";

const MainLayout = () => {
  return (
    // Changed min-w-screen to w-full to prevent horizontal scrollbars
    // Added min-h-screen to ensure the footer stays at the bottom
    <div className="flex min-h-screen w-full flex-col bg-slate-900">
      <Navbar />

      {/* Main content area */}
      {/* Changed pt-12.5 to pt-16 (standard Tailwind spacing) */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
