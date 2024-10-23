/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '300': '75rem'
      }
    },
  },
  plugins: [],

}

