/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'td-green': '#00DC82',
        'td-green-dark': '#00b368',
        'td-purple': '#7B61FF',
        'td-bg': '#0a0a0a',
        'td-bg-secondary': '#141414',
        'td-bg-card': '#1a1a1a',
        'td-border': '#2a2a2a',
        'td-text-secondary': '#a1a1a1',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
