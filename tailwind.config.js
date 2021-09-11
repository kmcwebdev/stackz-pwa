module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      colors: {
        primary: '#1A3865',
        secondary: '#FFE94F',
      },
      fontFamily: {
        pop: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
