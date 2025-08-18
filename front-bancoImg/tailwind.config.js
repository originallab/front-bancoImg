/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#48b7ff',
          500: '#1b96ff',
          600: '#0d77db',
        },
        ink: {
          700: '#18203a',
          800: '#11182a',
          900: '#0b1221',
        }
      },
      boxShadow: {
        glow: '0 8px 24px rgba(27,150,255,0.35)'
      }
    }
  },
  plugins: []
}