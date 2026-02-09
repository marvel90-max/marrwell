/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'emerald-deep': '#0F3D2E',
        'charcoal': '#141414',
        'ivory-warm': '#F6F2EC',
        'gold-champagne': '#D6B37C',
        'brown-mocha': '#7A5C45',
        'sage-soft': '#A3B7A5',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
