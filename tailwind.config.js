const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "p-black": {
          light: "#525B6C",
          DEFAULT: "#262A32",
          dark: "#292B35",
        },
        "p-purple": {
          light: "#6C6C9F",
          DEFAULT: "#414164",
          dark: "#191926",
        },
        "p-blue": {
          light: "#BFDBF0",
          DEFAULT: "#4496D2",
          dark: "#184465",
        },
        "p-green": {
          light: "#C1ECF1",
          DEFAULT: "#45C7D4",
          dark: "#186168",
        },
        "p-yellow": {
          light: "#FCDE6E",
          DEFAULT: "#FAC80A",
          dark: "#CDA304",
        },
      },
      screens: {
        xs: { min: "280px", max: "640px" },
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
