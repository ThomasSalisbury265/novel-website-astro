/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./src/content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Example theme color
        secondary: '#6B7280',
        accent: '#D97706',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
