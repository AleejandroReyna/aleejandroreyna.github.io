/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        blackOpsOne: ['var(--font-black_ops_one)']
      },
    },
  },
  plugins: [],
}