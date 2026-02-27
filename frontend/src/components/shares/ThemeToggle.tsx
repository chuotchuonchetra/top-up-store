import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Optional: npm install lucide-react

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      {/* The Toggle Container */}
      <button
        onClick={toggleTheme}
        className="relative flex h-6.75 w-13.75 cursor-pointer items-center rounded-full border-2 border-black bg-gray-200 p-1 transition-colors duration-300 dark:bg-slate-800 dark:border-white">
        {/* The Sliding Circle (Thumb) */}
        <div
          className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "-translate-x-1"
          }`}>
          {theme === "light" ?
            <Sun size={18} className="text-orange-500" />
          : <Moon size={18} className="text-indigo-600" />}
        </div>
      </button>
    </div>
  );
}
