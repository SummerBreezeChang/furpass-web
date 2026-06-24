import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'fp-bg': '#F9FAFB',
        'fp-teal': '#08D9D6',
        'fp-teal-dark': '#06B5B3',
        'fp-teal-soft': '#D4FAF9',
        'fp-pink': '#FF2E63',
        'fp-pink-soft': '#FFE0E8',
        'fp-navy': '#252A34',
        'fp-muted': '#6B7280',
        'fp-hint': '#9CA3AF',
        'fp-gray': '#EAEAEA',
        'fp-success': '#4CAF50',
        'fp-warning': '#F5A623',
        'fp-error': '#E85D5D',
      },
      fontFamily: {
        display: ['var(--font-display)', 'cursive'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
