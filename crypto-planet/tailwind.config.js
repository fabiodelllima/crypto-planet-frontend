/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#2563EB",
        background: "#121318",
        container: "#1A1C20",
        white: "#FFFFFF",
        greyPrimary: "#9CA3AF",
        greySecondary: "#2A2C30",
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
