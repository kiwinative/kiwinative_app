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
        lightIndigo: "#140E3A",
        darkIndigo: "#050023",
        veryLightGreen: "rgba(196,253,138, 0.57)",
        lightGreen: "#6C8726",
        darkGreen: "rgba(108, 135, 38, 0.41)",
        white: "#ffffff",
        lightWhite: "rgba(255,255,255, 0.18)",
        snowWhite: "#fcfcfc",
        darkWhite: "#fffafa",
        veryDarkWhite: "f5f5f5",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
