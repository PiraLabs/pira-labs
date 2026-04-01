import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        'navy-mid': '#1A2B3C',
        amber: '#BA7517',
        'amber-light': '#D4891F',
        cream: '#F5F0E8',
        'cream-dark': '#EDE8DF',
        'off-white': '#FAFAF8',
        'gray-text': '#6B7280',
        'green-respira': '#1F5C35',
        'blue-inspira': '#2A6B8A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
