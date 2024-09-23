/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'line-gradient': 'linear-gradient(to right, #E0E1E2 0%, #E0E1E2 16%, #E0E1E2 50%, #E0E1E2 100%)',
      // },
    },
    screens: {
      'desktop-large': '1920px',
      'desktop-medium': '1440px',
      'desktop': '1152px',
      'tablet': '768px',
      'mobile': '320px'
    },
  },
  plugins: [],
}

