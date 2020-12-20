module.exports = {
  purge: [
    './public/**/*.html',
    './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
