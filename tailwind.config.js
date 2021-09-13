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
        primary: '#1f447e',
        secondary: '#db9b3a',
        accent: '#3987cd',
        warning: '#ff6e57',
        lightGreen: '#62b999',
        darkGreen: '#2b7068',
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
