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
        page: '#F7F8FA',
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F0F3F6',
          hover: '#E8ECF0',
        },
        content: {
          DEFAULT: '#17212B',
          secondary: '#596575',
          muted: '#7B8794',
        },
        border: {
          DEFAULT: '#E2E7ED',
          subtle: '#EDF1F5',
          strong: '#CBD5E1',
        },
        teal: {
          50: '#F0F8F9',
          100: '#E1F2F4',
          200: '#C2E5E8',
          500: '#0B8F98',
          600: '#087E8B',
          700: '#06626D',
          800: '#05515A',
        },
        accent: {
          DEFAULT: '#087E8B',
          hover: '#06626D',
          light: '#F0F8F9',
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
