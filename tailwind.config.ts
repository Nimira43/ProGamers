import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      color: {
        'main': '#ff4500',
        'support': '#87ceeb',
        'dark': '#111',
        'light': '#fffcfa',
        'grey-dark': '#333',
        'grey-medium': '#888',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
