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
        window: "url('../src/windows11st.jpg')",
      }),
      backgroundColor: {
        'blue-gray': '#eceff1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
