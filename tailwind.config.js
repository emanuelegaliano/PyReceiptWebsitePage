/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981', // mint green
          600: '#059669',
        },
        techBlue: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6', // bright tech blue
          600: '#2563eb',
          700: '#1d4ed8',
        },
        amberGold: {
          50: '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b', // golden amber
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05)',
        'soft-md': '0 8px 30px -4px rgba(15, 23, 42, 0.06)',
        'soft-lg': '0 20px 40px -12px rgba(15, 23, 42, 0.08)',
        'soft-glow': '0 0 35px -5px rgba(59, 130, 246, 0.15)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [],
}
