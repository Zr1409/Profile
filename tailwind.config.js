/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: {
          DEFAULT: '#F8FAFC',
          dark: '#0B0F17',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F1F5F9',
          hover: '#E2E8F0',
          dark: '#111827',
          'dark-subtle': '#1E293B',
          'dark-hover': '#334155',
        },
        content: {
          DEFAULT: '#0F172A',
          secondary: '#475569',
          muted: '#64748B',
          'dark-primary': '#F8FAFC',
          'dark-secondary': '#94A3B8',
          'dark-muted': '#64748B',
        },
        border: {
          DEFAULT: '#E2E8F0',
          subtle: '#F1F5F9',
          strong: '#CBD5E1',
          dark: '#1E293B',
          'dark-strong': '#334155',
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#EFF6FF',
          dark: '#3B82F6',
        },
        state: {
          green: '#108A56',
          greenLight: '#EAF7EE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 12px -2px rgba(23, 33, 43, 0.05), 0 2px 6px -1px rgba(23, 33, 43, 0.03)',
        'modal': '0 20px 40px -8px rgba(23, 33, 43, 0.12), 0 8px 16px -4px rgba(23, 33, 43, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
