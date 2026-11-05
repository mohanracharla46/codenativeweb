/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F1F5F9',
          subtle: '#E2E8F0',
          dark: '#0B0D14',
        },
        border: {
          DEFAULT: 'rgba(15, 23, 42, 0.08)',
          light: 'rgba(15, 23, 42, 0.12)',
          dark: 'rgba(255, 255, 255, 0.10)',
          brand: 'rgba(81, 69, 230, 0.4)',
        },
        ink: {
          DEFAULT: '#0F172A',
          light: '#334155',
          muted: '#64748B',
          dim: '#94A3B8',
        },
        brand: {
          DEFAULT: '#5145E6',
          hover: '#4338CA',
          light: '#EEF2FF',
          subtle: 'rgba(81, 69, 230, 0.12)',
          glow: 'rgba(81, 69, 230, 0.25)',
        },
        accent: {
          DEFAULT: '#5145E6',
          hover: '#4338CA',
          light: '#EEF2FF',
          subtle: 'rgba(81, 69, 230, 0.12)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(+50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
