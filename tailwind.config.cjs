/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-archivo)'],
        body: ['var(--font-space-grotesk)']
      },
      colors: {
        primary: '#18181B',
        secondary: '#3F3F46',
        cta: '#2563EB',
        background: '#FAFAFA',
        text: '#09090B'
      }
    },
  },
  plugins: [],
}