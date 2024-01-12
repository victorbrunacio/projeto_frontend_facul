import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "blue-1": "#0158EF",
        "blue-2": "#014ED2",
        
        "red-1": "#FB2E2E",
        "red-2": "#E11717",

        "green-1": "#50A142",

        "gray-1": "#434343",
        "gray-2": "#333333",

        "black-1": "#171A1F",
        "black-2": "#0C0C0C",

        "white-1": "#FFFFFF",
      }
    },
  },
  plugins: [],
}
export default config
