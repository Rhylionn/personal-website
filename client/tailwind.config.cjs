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
      maxWidth: {
        "1/2": "50%",
      },
      minHeight: {
        "4/5": "80%",
      },
    },
  },
  plugins: [],
};
