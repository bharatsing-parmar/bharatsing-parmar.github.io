/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
          light: '#6366F1',
        },
        accent: '#14b8a6',
        muted: '#94a3b8',
        surface: '#0f172a',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};