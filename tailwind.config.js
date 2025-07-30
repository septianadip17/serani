/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#ffe4e6",
        pinky: "#fbcfe8",
        rose: "#fda4af",
      },
      fontFamily: {
        script: ['"Dancing Script"', "cursive"],
        body: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
