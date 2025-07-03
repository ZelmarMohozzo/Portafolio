/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'matrix': {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00ff41',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'terminal': {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#39ff14',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'cyber': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00d4ff',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'neon': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#b026ff',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      animation: {
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'neon-pulse': 'pulse 2s ease-in-out infinite alternate',
        'typewriter': 'typewriter 3s steps(40, end)',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      boxShadow: {
        'neon-green': '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
        'neon-blue': '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff',
        'neon-purple': '0 0 5px #b026ff, 0 0 10px #b026ff, 0 0 15px #b026ff',
      }
    },
  },
  plugins: [],
};