const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/hero.webp')"
      },
      spacing: {
        128: '32rem',
        132: '40rem',
        148: '48rem',
        164: '64rem'
      }
    },
    fontFamily: {
      ...fontFamily,
      sans: ['Rubik', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    container: {
      center: true
    }
  },
  plugins: []
};
