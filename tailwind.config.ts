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
        black: '#181817',
        white: '#fdfdfc',
        yellow: '#f7b90c',
        'light-gray': '#eeeee4',
        gray: '#999993',
        'dark-gray': '#444441',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        headings: ['var(--font-poppins)'],
        accents: ['var(--font-exo)'],
      },
    },
  },
  plugins: [],
}
export default config