/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#274c67',
        success: '#36b37e',
        warning: '#ffab00',
        danger: '#ff5630',
      },
    },
  },
  plugins: [],
}

