module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'midnight': '#130F40',
        'zinc': {
          900: '#18181b'
        },
        'slate': {
          800: '#1e293b',
          900: '#0f172a'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
