/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,tsx}",
    "./components/**/*.{html,js}",
    "./constants/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./sections/**/*.{html,js}",
    "./styles/**/*.{html,js}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1600px",
      xxxl: "2400px",
    },
    extend: {
      colors: {
        lightIndigo: "#0c0422",
        darkIndigo: "#090311",
        veryDarkIndigo: "#060211",
        white: "#ffffff",
        snowWhite: "#fcfcfc",
        darkWhite: "#fffafa",
        veryDarkWhite: "f5f5f5",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
