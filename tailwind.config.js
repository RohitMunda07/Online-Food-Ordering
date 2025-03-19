/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**.{js,ts,jsx,tsx}", // This one line covers all your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

