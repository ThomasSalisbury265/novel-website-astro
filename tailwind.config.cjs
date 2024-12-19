/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./src/content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
