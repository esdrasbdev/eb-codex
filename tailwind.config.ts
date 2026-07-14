import type { Config } from 'tailwindcss'

// Sistema de tokens EB CODEX: paleta "manuscrito digital" — tinta profunda + azul/roxo premium
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0E',
          soft: '#131318',
          elevated: '#1B1B22',
        },
        parchment: {
          DEFAULT: '#FAF8F3',
          soft: '#FFFFFF',
          elevated: '#F2EFE6',
        },
        gold: {
          50: '#F3F5FF',
          200: '#C9D3FF',
          400: '#7D8DFF',
          500: '#5C6CFF',
          600: '#3F4FD6',
        },
        codex: {
          violet: '#3F2B67',
          violetLight: '#8B6FEA',
        },
      },
      fontFamily: {
        display: ['"C6 Sans"', '"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        sans: ['"C6 Sans"', '"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-sweep': 'linear-gradient(115deg, transparent 0%, rgba(92,108,255,0.16) 45%, rgba(139,111,234,0.16) 60%, transparent 100%)',
        'codex-radial': 'radial-gradient(circle at 50% 0%, rgba(92,108,255,0.18), transparent 60%)',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(21, 31, 68, 0.20)',
        'soft-dark': '0 20px 60px -20px rgba(0,0,0,0.55)',
        glow: '0 0 0 1px rgba(92,108,255,0.18), 0 8px 30px -8px rgba(92,108,255,0.24)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-2%,3%) scale(1.05)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'drift': 'drift 18s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
