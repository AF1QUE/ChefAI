/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1FCC79",
        secondary: "#FF6464",
        text: {
          main: "#2E3E5C",
          secondary: "#9FA5C0",
        },
        outline: "#D0DBEA",
        fomr: "#F4F5F7",
      },
      fontFamily: {
        thin: ["Inter-Thin", "sans-serif"],
        extralight: ["Inter-ExtraLight", "sans-serif"],
        light: ["Inter-Light", "sans-serif"],
        regular: ["Inter-Regular", "sans-serif"],
        medium: ["Inter-Medium", "sans-serif"],
        semibold: ["Inter-SemiBold", "sans-serif"],
        bold: ["Inter-Bold", "sans-serif"],
        extrabold: ["Inter-ExtraBold", "sans-serif"],
        black: ["Inter-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
