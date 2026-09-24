/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Dark blue
        secondary: "#f97316", // Orange
        accent: "#fbbf24" // Amber/Yellow
      }
    },
  },
  plugins: [],
}
