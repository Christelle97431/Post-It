/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   './pages/**/*.{html,js}',
  //   './components/**/*.{html,js}',

  // ],

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#8ec5fc',
        'blue-navbar' :'#2573c2',
        'regal-violet': '#e0c3fc'
      },
    },
  },
  plugins: [],
}
