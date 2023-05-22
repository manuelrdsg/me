/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      // Light mode
      primary: '#2D2D2D',
      secondary: '#4F4F4F',
      'accent-1': '#FF7A59',
      'accent-2': '#007AFF',
      'heading-text': '#2D2D2D',
      'secondary-text': '#8C8C8C',

      // Dark mode
      'dark-bg': '#1C1C1E',
      'dark-primary': '#FFFFFF',
      'dark-secondary': '#EFEFF4',
      'dark-heading-text': '#9B9B9B',
      'dark-secondary-text': '#BFBFBF',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
