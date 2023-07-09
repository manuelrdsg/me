/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*'],
  theme: {
    extend: {
      backgroundImage: () => ({
        'dark-grain-texture': "url('/textures/less_noise2.png')",
        'light-grain-texture': "url('/textures/light_noise.png')",
      }),
      screens: {
        xs: '320px',
      },
    },
    colors: {
      transparent: 'transparent',
      // Light mode
      primary: '#2D2D2D',
      secondary: '#4F4F4F',
      'heading-text': '#2D2D2D',
      'secondary-text': '#424242',
      'light-bg': '#FBF7F4',
      'border-main': 'rgb(79 79 79 / 31%)',

      // Dark mode
      'dark-bg': '#1C1C1E',
      'dark-primary': '#FFFFFF',
      'dark-secondary': '#EFEFF4',
      'dark-heading-text': '#C7C7C7',
      'dark-secondary-text': '#BFBFBF',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
