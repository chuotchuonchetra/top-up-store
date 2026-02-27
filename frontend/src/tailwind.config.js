/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector", // This allows us to trigger dark mode using a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
