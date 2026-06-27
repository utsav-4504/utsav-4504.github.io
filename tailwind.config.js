export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        site: {
          black: '#1a1a1a',
          gray: '#6b6b6b',
          light: '#f5f3f0',
          border: '#e2ddd6',
          white: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
