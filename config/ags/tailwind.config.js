/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./js/**/*.js"],
  theme: {
    fontSize: {
      // Remove line height
      lg: ["1.125rem"],
      xl: ["1.25rem"],
      "2xl": ["1.5rem"],
    },
    extend: {},
  },
  plugins: [],
  // disable stuff with properties that don't work
  corePlugins: {
    preflight: false,
    visibility: false,
    display: false,
    overflow: false,
    whitespace: false,
    transform: false,
    textOverflow: false,
    position: false,
    lineHeight: false,
  },
};
