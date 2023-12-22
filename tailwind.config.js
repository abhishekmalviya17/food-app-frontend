/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        'custom-sm': {'max': '705px'},
        'custom-md':{'min': '706px'}
      },
      fontSize: {
        'vw': '1vw', 
      },
      letterSpacing: {
        'custom-1': '0.1px',
        'custom-2': '0.2px',
      },
      textColor: {
        'custom-red': '#FF0000',
        'custom-green': '#00FF00',
        'custom-black': '#2B2B43',
        'custom-blue': '#4E60FF'
      },
    },
  },
  plugins: [],
}

