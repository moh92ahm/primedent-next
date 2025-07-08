module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0b0d0c',
        'brand-background': '#201f40',
        'brand-accent': '#a4906c',
        'brand-primary': '#f2e0ae',
        'brand-light': '#feffde',
        'brand-white': '#faf7f0'
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}