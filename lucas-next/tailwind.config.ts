import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "barlow": ["barlow-condensed", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'], 
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeOutDown: {
        '0%': { opacity: '1', transform: 'translateY(0)' },
        '100%': { opacity: '0', transform: 'translateY(10px)' },
      },
    },
    animation: {
      'fade-in-up': 'fadeInUp 0.5s ease-out',
      'fade-out-down': 'fadeOutDown 1s ease-in-out',
    },
  },
  },
  plugins: [],
}
export default config
