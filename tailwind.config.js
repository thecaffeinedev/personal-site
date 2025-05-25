// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        primary: colors.green,
        dark: '#1f1f1f',
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            lineHeight: '1.7',
            p: {
              fontWeight: '400',
              lineHeight: '1.7',
            },
            li: {
              fontWeight: '400',
              lineHeight: '1.6',
            },
            a: {
              color: theme('colors.primary.500'),
              fontWeight: '500',
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
              fontWeight: '500',
            },
            strong: {
              fontWeight: '600',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.100'),
            p: {
              color: theme('colors.gray.100'),
              fontWeight: '450',
            },
            li: {
              color: theme('colors.gray.100'),
              fontWeight: '450',
            },
            strong: {
              color: theme('colors.gray.50'),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.primary.400'),
              fontWeight: '500',
              '&:hover': {
                color: `${theme('colors.primary.300')}`,
              },
              code: { color: theme('colors.primary.300') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.50'),
            },
            code: {
              color: theme('colors.indigo.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
