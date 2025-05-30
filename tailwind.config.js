/** @type {import('tailwindcss').Config} */
export default {
  // Configure dark mode to work with your existing `data-theme` attribute
  darkMode: ['attr', 'data-theme'],

  // Specify the paths to all of your template files
  content: [
    "./index.html",                     
    "./public/index.html",              
    "./src/**/*.{js,jsx,ts,tsx}",      
  ],

  // Extend Tailwind's default theme (optional)
  theme: {
    extend: {
      // Example: If you want to use colors from your src/styles/variables.css
      // colors: {
      //   'custom-blue': 'var(--color-linguistica)', // Make sure CSS var is defined in a global CSS file
      //   primary: {
      //     50: 'var(--color-primary-50)',
      //     100: 'var(--color-primary-100)',
      //     // ... add other shades
      //   },
      // },
    },
  },

  // Add any Tailwind plugins here (optional)
  plugins: [],
}