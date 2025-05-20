/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          600: '#064663',
        },
        'secondary': {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          400: '#41D0D1',
        },
        'accent': 'rgb(var(--accent) / <alpha-value>)',
        'background': 'rgb(var(--background) / <alpha-value>)',
        'foreground': 'rgb(var(--foreground) / <alpha-value>)',
        'border-color': 'rgb(var(--border) / <alpha-value>)',
      },
      borderColor: {
        'border-color': 'rgb(var(--border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 