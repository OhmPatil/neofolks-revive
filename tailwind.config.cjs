/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark-blue': '#00020f'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
