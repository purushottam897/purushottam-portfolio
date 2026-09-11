/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        codex: {
          dark: '#07080A',
          charcoal: '#0E1015',
          surface: '#12151C',
          card: '#111319',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.15)',
          text: '#F4F2ED',
          muted: '#8A8F9E',
          cream: '#E8E4D9',
          'cream-hover': '#F5F2EB',
          gold: '#C5A059',
          'gold-light': '#E2C88F',
          bronze: '#9B7B46',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Syne"', 'serif'],
        script: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
