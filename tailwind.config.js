/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './blog/*.html',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fdfaf3',
        sage: '#dcf2e1',
        sageDeep: '#b9e0c4',
        forest: '#064e3b',
        forestDeep: '#022c22',
        accent: '#10b981',
        accentSoft: '#34d399',
        ink: '#1f2937',
        inkSoft: '#475569',
        line: '#e5e7eb',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
