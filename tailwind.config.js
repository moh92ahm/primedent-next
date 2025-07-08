/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '86rem',
      },
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        mono: ['monospace'],
      },
      colors: {
        brand: {
          dark: '#0b0d0c',
          background: '#201f40',
          accent: '#a4906c',
          primary: '#f2e0ae',
          light: '#feffde',
          white: '#faf7f0',
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.brand.white'),
            '--tw-prose-headings': theme('colors.brand.primary'),
            h1: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: 'bold',
              marginBottom: '0.25em',
            },
            h2: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: 'bold',
            },
          },
        },
      }),
    },
  },
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [],
}

export default config
