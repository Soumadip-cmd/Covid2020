/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        backgroundcolor: "#f8f5fc",
        heading: "#6f42c1",
        "main-para": "#989898",
        black: "#000",
        darkgray: "#a4a4a4",
        gray: "#808081",
        lavender: "#f0ecf9",
        slateblue: "rgba(111, 66, 193, 0.6)",
      },
      spacing: {},
      fontFamily: {
        paragraph: "Mulish",
        arvo: "Arvo",
      },
      borderRadius: {
        "6xl-8": "25.8px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mini: "15px",
      mid: "17px",
      xs: "12px",
      "11xl": "30px",
      base: "16px",
      lg: "18px",
      "16xl": "35px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
