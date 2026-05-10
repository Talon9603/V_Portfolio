import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        surface: '#111827',
        accent: '#FACC15',
        secondary: '#E5E7EB'
      }
    }
  },
  plugins: []
}

export default config
