/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        rose: {
          DEFAULT: '#F2A7B3',
          dark:    '#C4607A',
          light:   '#FDE8ED',
          mid:     '#E8829A',
        },
        sage: {
          DEFAULT: '#A8C5A0',
          dark:    '#4A7A42',
          light:   '#E8F3E6',
        },
        peach: {
          DEFAULT: '#F5C9A0',
          dark:    '#C47A35',
          light:   '#FEF0E0',
        },
        lavender: {
          DEFAULT: '#C4B5E8',
          dark:    '#6B52B5',
          light:   '#EDE8F8',
        },
        // dark theme surfaces
        ink: {
          50:  '#F0EBF4',
          100: '#B8AEBE',
          200: '#6E6275',
          300: '#3D2E45',
          400: '#252028',
          500: '#1E1A20',
          600: '#161318',
          700: '#0E0C0F',
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        'morph-slow': 'morph 10s ease-in-out infinite reverse',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%' },
          '50%':      { borderRadius: '40% 60% 45% 55% / 55% 45% 60% 40%' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
