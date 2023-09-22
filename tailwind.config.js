/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        card: "rgba(255, 255, 255, 0.002)",
      },
      backgroundImage: {
        "spe-gradient": "linear-gradient(to right, #000, #111, #222)",

        "spe-alternate":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.05))",
        "card-gradiant":
          "linear-gradient(to bottom left,rgba(255, 255, 255, 0.1),transparent)",
      },
      fontFamily: {
        "main-font": "'Inter', sans-serif",
      },
      colors: {
        myBlue: "#6fd1d0",
        myGrey: "#9f9f9f",
      },
      boxShadow: {
        myshadow:
          "0 8px 10px rgba(255, 255, 255, 0.2), -8px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
