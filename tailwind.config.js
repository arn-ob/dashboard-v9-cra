module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s',
      },
      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: (theme) => ({
        'window-image': "url('../src/assets/windows11.jpg')",
      }),
      backgroundColor: {
        'blue-gray': '#cfd8dc',
        'blue-gray-light': '#eceff1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
