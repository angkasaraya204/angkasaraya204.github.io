/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./view/**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      // animation: {
      //   "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      // },
      // keyframes: {
      //   pulse: {
      //     "0%, 100%": {
      //       opacity: 100,
      //       "background": "linear-gradient(to right, #e2e2e2 25%, #d5d5d5 50%, #e2e2e2 100%)"
      //     },
      //     "50%": {
      //       opacity: 0,
      //       "background": "linear-gradient(to right, #e2e2e2 25%, #d5d5d5 50%, #e2e2e2 100%)"
      //     },
      //   },
      // },
    },
  },
  plugins: [],
  darkMode: 'class',
}
