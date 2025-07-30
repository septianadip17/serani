/** @type {import('tailwindcss').Config} */
export default {
  content: [
    /* your files */
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pink-gradient":
          "linear-gradient(-45deg, #fbc2eb, #fcd1d1, #fda085, #ff9a9e)",
      },
      animation: {
        "gradient-move": "gradient 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
