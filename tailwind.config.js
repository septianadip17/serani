/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pink-gradient":
          "linear-gradient(-45deg, #fbc2eb, #fcd1d1, #fda085, #ff9a9e)",
      },
    },
  },
  plugins: [],
};
