/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        darkBg: '#1A0B0C',
        primary: '#ffc001',
        secondary: '#ff9c01',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem'
        }
      }

    },

  },
  plugins: [],
}

