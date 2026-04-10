/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1a3a2a',
        'accent-light': '#2d5a3f',
        warm: {
          50: '#faf8f5',
          100: '#f3f0ea',
          200: '#e8e2d8',
          300: '#d4cbbe',
          400: '#b8a99a',
          500: '#9c8b7a',
          600: '#7a6b5d',
          700: '#5c5044',
          800: '#3d352d',
          900: '#1e1a16',
        }
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
