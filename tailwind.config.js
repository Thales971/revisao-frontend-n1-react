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
        navy: {
          50: '#f4f7fb',
          100: '#e8eef6',
          700: '#1f2833',
          800: '#171e27',
          900: '#0f1419',
        },
        mint: {
          400: '#3dd6c6',
          500: '#0f8f84',
        },
      },
    },
  },
  plugins: [],
}
