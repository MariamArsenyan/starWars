/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./public/index.html",        
  ],
  theme: {
    extend: {
      margin: {
        '43p': '43%',
      },
      fontFamily: {
        'exo-2': ['"Exo 2"', 'serif'],
    },
    },
  },
  plugins: [],
};
