/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode support
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A1931",  // Navy Blue
        accent: "#F4A71D",   // Gold
        background: "#F8F9FA", // Soft White
        darkBackground: "#121212", // Dark mode background
        darkText: "#E0E0E0", // Dark mode text
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
