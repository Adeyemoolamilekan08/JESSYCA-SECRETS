/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#F7F0F8',
          100: '#EDDFEF',
          200: '#DCC0E1',
          300: '#C397CB',
          600: '#6B2A74',
          700: '#531D5B',
          800: '#3C1342',
          900: '#2A0C2F',
        },
        magenta: { DEFAULT: '#A23E8B', soft: '#C77BB5' },
        gold: { DEFAULT: '#B39155', light: '#D9C79F' },
        ivory: '#FBF8F3',
        cream: '#F3EDE4',
        charcoal: '#2D2730',
        ink: '#17131A',
        wa: '#177A46',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: { wider2: '0.18em' },
      boxShadow: {
        soft: '0 1px 2px rgba(23,19,26,0.05), 0 8px 24px -12px rgba(23,19,26,0.12)',
        drawer: '0 0 40px rgba(23,19,26,0.18)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fade: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out both',
        slideLeft: 'slideLeft 0.28s ease-out both',
        fade: 'fade 0.2s ease-out both',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};
