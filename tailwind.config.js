/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      epilogue: ["Epilogue", "sans-serif"],
    },
    colors: {
      black: "black",
      white: "white",
      background: "#DFDFDF",
      transparent: "transparent",
      success: "#65A30D",
      warning: "#DC2626",
      main: {
        0: "#ffffff",
        100: "#FFFAF1",
        200: "#FFEFE0",
      },
      primary: {
        300: "#FF5C00",
      },
    },
    extend: {
      fontSize: {
        sm: "15px",
        base: "18px",
        lg: "32px",
        xl: "40px",
        "xl-mobile": "26px",
        "2xl": "48px",
        "2xl-mobile": "36px",
        "3xl": "115px",
        "3xl-mobile": "48px",
      },
    },
  },
  corePlugins: {
    float: false,
  },
};
