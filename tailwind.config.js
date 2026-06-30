/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Existing Havenly palette
        havenly: {
          red: '#C0392B',
          navy: '#1A1A2E',
          green: '#0B6E4F',
          gold: '#D4A017',
          cream: '#F9F9F9',
        },
        // Nixtio-inspired palette
        'nixtio-primary': '#ff6633',
        'nixtio-dark': '#0a0a0a',
        'nixtio-mid': '#1a1a1a',
        'nixtio-light': '#f5f5f5',
      },
      backgroundImage: {
        // Dark gradient background similar to Nixtio hero
        'nixtio-gradient': 'radial-gradient(circle at 50% 0%, #1a1a1a, #0a0a0a)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-right': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-up-delay-1': 'fade-up 0.6s ease-out 0.1s forwards',
        'fade-up-delay-2': 'fade-up 0.6s ease-out 0.2s forwards',
        'fade-up-delay-3': 'fade-up 0.6s ease-out 0.3s forwards',
        'fade-up-delay-4': 'fade-up 0.6s ease-out 0.4s forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-right': 'slide-right 0.5s ease-out forwards',
        'ticker': 'ticker 30s linear infinite',
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
