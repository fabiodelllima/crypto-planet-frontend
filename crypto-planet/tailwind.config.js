/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueAccent: "#4F46E5",
        background: "#121318",
        container: "#1A1C20",
        textPrimary: "#FFFFFF",
        textSecondary: "#A1A1A6",
        inputBackground: "#1A1C20",
        borderGray: "#A1A1A6",
        positive: "#00FF85",
        borderGray: "#2A2C30",
        textGray: "#A1A1A6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
