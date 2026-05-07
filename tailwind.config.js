/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        indie: ['"Indie Flower"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f1f0f',
          card: '#1a2b1a',
          muted: '#a8baa8',
          accent: '#4caf50',
        }
      }
    },
  },
  plugins: [],
}
