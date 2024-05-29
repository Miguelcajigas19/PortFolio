/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: {
          "100": "#eeffff",
          "200": "#eefffe",
          "300": "#ecffff",
          "400": "#ecfeff",
          "500": "#ebfffc",
          "600": "#ebfefe",
          "700": "#eafbfb",
        },
        gray: "rgba(0, 0, 0, 0.8)",
        black: "#000",
        "actionable-item": "#18a0fb",
        white: "#fff",
        mediumblue: "#2d11d7",
      },
      spacing: {},
      fontFamily: {
        "body-p": "Montserrat",
        montaga: "Montaga",
      },
    },
    fontSize: {
      lg: "18px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      mini: "15px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
