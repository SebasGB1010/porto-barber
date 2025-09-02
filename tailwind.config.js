/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f2',
          100: '#f1ebe5',
          200: '#e3d7ca',
          300: '#d4c3af',
          400: '#c6ae94',
          500: '#b79979',
          600: '#a58460',
          700: '#8a6f4e',
          800: '#715b3e',
          900: '#5c4a32',
          950: '#2c2418',
        },
        secondary: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626',
        },
        accent: {
          50: '#fbf7f0',
          100: '#f5ebdc',
          200: '#ead6b8',
          300: '#dfbc8b',
          400: '#d5a369',
          500: '#ca8b4e',
          600: '#ba7340',
          700: '#9b5c36',
          800: '#7e4a31',
          900: '#673e2c',
          950: '#371f17',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};