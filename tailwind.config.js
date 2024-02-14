/** @type {import('tailwindcss').Config} */
modeul.exports = {
  content: ['./node_modules/flowbite/**/*.{js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
