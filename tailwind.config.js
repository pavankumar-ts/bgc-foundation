/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf8fc',
          100: '#d7f0f7',
          200: '#a5e4f1',
          300: '#67d6ea',
          400: '#22c5dc',
          500: '#13b2c0',
          600: '#119da3',
          700: '#137883',
          800: '#16626b',
          900: '#16515b',
          950: '#08333b',
          light: '#4fc3cf',
          dark: '#0f8a95',
        },
        secondary: {
          50: '#f0f1f9',
          100: '#e4e6f4',
          200: '#cbd1ea',
          300: '#a7b1da',
          400: '#7c87c4',
          500: '#5764b0',
          600: '#2b2868',
          700: '#2b2868',
          800: '#252356',
          900: '#211f47',
          950: '#15142c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}