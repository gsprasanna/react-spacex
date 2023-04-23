/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
    },
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1023px' },
      belowDesktop: { max: '1023px' },
      aboveDesktop: { min: '1023px' },
      desktop: { min: '1023px', max: '1399px' },
      hd: { min: '1400px' }
    },
  },
  plugins: [require('./src/tailwind-plugins/container')],
}

