/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        primary: {
          light: '#fbbf24', // yellow-400
          dark: '#d97706', // yellow-600
        },
        background: {
          light: {
            from: '#f3f4f6', // gray-100
            via: '#ffffff', // white
            to: '#f3f4f6', // gray-100
          },
          dark: {
            from: '#1e3a8a', // blue-900
            via: '#111827', // gray-900
            to: '#1e3a8a', // blue-900
          },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        "move-border": "move-border 3s linear infinite",
      },
      keyframes: {
        "move-border": {
          "0%": {
            borderImage:
              "linear-gradient(45deg, rgb(16, 185, 129), rgb(52, 211, 153), rgb(16, 185, 129), rgb(52, 211, 153)) 1 stretch",
          },
          "25%": {
            borderImage:
              "linear-gradient(135deg, rgb(16, 185, 129), rgb(34, 197, 94), rgb(16, 185, 129), rgb(34, 197, 94)) 1 stretch",
          },
          "50%": {
            borderImage:
              "linear-gradient(225deg, rgb(16, 185, 129), rgb(4, 120, 87), rgb(16, 185, 129), rgb(4, 120, 87)) 1 stretch",
          },
          "75%": {
            borderImage:
              "linear-gradient(315deg, rgb(16, 185, 129), rgb(61, 179, 74), rgb(16, 185, 129), rgb(61, 179, 74)) 1 stretch",
          },
          "100%": {
            borderImage:
              "linear-gradient(45deg, rgb(16, 185, 129), rgb(52, 211, 153), rgb(16, 185, 129), rgb(52, 211, 153)) 1 stretch",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
