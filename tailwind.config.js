/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#08090a',
          secondary: '#1c1c1f',
          tertiary: '#232326',
          quaternary: '#28282c',
          panel: '#0f1011',
          tint: '#141516',
        },
        txt: {
          primary: '#f7f8f8',
          secondary: '#d0d6e0',
          tertiary: '#8a8f98',
          quaternary: '#62666d',
        },
        accent: {
          DEFAULT: '#7170ff',
          hover: '#828fff',
        },
        brand: {
          DEFAULT: '#5e6ad2',
        },
        border: {
          primary: '#23252a',
          secondary: '#34343a',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
