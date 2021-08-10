module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'nice-red': '#ff003c',
        'black-dark':'#090a0e',
        'black-light':"#0f1014",
        'faded-white':"#bababaab",
      },
      fontFamily:{
        'movieNameFont':['Krona One', 'sans-serif'],
        'subMovieFont':['Poppins', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
