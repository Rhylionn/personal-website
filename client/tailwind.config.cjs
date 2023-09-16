/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          200: "#3E2CAA",
          800: "#130F40",
        },
        zinc: {
          900: "#18181b",
        },
        slate: {
          800: "#101a32",
          900: "#172249",
        },
      },
      height: {
        "17/20": "85%",
        "15/100": "15%",
      },
      fontSize: {
        "9/5xl": ["2.4375rem", "2.625rem"],
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
