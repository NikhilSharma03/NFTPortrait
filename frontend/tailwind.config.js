/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      minWidth: {
        sm: "20rem",
      },
      zIndex: {
        2000: "2000",
      },
      gridTemplateRows: {
        5: "repeat(8, minmax(0, 20rem))",
      },
    },
  },
  plugins: [require("daisyui")],
};
