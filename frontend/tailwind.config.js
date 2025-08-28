/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", //  enables manual dark mode via `class`
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e63946",          // main accent color
        "primary-dark": "#d62828",   // darker variant for hover
        secondary: "#000000",        // optional secondary
        background: "#ffffff",       // light mode background
        darkBackground: "#111827",   // dark mode background
        darkText: "#f9fafb",         // dark mode text
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"], // for titles
        body: ["Inter", "sans-serif"],          // for body text
      },
    },
  },
  plugins: [],
};
