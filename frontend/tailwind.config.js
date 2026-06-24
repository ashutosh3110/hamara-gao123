/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4fbf7',
          100: '#e7f7ed',
          200: '#c3ecd2',
          300: '#90dca9',
          400: '#58c47a',
          500: '#34a85a', // Earthy/Green organic primary
          600: '#268a47',
          700: '#206e3a',
          800: '#1b5730',
          900: '#174828',
          950: '#0c2715',
        },
        secondary: {
          50: '#fdf8f5',
          100: '#fbece5',
          200: '#f6d5c6',
          300: '#efb399',
          400: '#e58765', // Clay / Terracotta village aesthetic
          500: '#dc6037',
          600: '#cd4621',
          700: '#aa3417',
          800: '#882b17',
          900: '#6e2517',
          950: '#3c100a',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
