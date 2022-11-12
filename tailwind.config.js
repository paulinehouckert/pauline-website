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
      prompt: ["Epilogue", "sans-serif"],
    },
    colors: {
      black: "black",
      white: "white",
      transparent: "transparent",
      success: "#65A30D",
      warning: "#DC2626",
      main: {
        0: "#ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#F2F2F2",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        1000: "#000000",
      },
      primary: {
        500: "#EBB300",
      },
    },
  },
  corePlugins: {
    float: false,
  },
};
