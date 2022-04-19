module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        common: "0px 5px 10px 0px rgba(204, 204, 204, 0.5)",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      accent: "rgb(253, 98, 98)",
      dark: "#000",
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
