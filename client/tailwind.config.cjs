/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#130F40",
        zinc: {
          900: "#18181b",
        },
        slate: {
          800: "#1e293b",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
}
