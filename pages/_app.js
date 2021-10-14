import { useState, useEffect } from 'react'

import NavContext from '../components/context/NavContext'

import SavedMoviesContext from '../components/utils/SavedMoviesContext'


import 'tailwindcss/tailwind.css'
import '../styles/style.css'
import 'plyr-react/dist/plyr.css'

import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"


import Nav from '../components/Nav'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {

  const keys = ['3a858513dc883f1d6bb56a65456bb3c4', 'a28966de6c86e3fb4cfd5890ab00f94d']//1-768  2-350

  function getAdUrl(d, z) {
    return '//' + d + '/400/' + z;
  }

  const [savedMovies, setSavedMovies] = useState([])
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('savedMovies'))
    if (dataFromLocalStorage) setSavedMovies(dataFromLocalStorage);
    fetch("https://api-movieera.herokuapp.com/v1/insights")

    //popcash settings
    // window.uid = '332853';
    // window.wid = '635198';
    // window.pop_fback = 'up';



    window.atOptions = (() => {
      const width = window.innerWidth;
      if (width > 500) {
        return {
          'key': keys[0],
          'format': 'iframe',
          'height': 90,
          'width': 728,
          'params': {}
        }
      }
      return {
        'key': keys[1],
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
      }
    })();

    const ads = [
      `https://www.effectiveperformanceformat.com/${window.atOptions.key}/invoke.js`,
      // '//pl16658922.trustedgatetocontent.com/ec/81/7e/ec817ef0b6541f4cf0f8d4b4518d378f.js', //social
      "https://pl16658952.trustedgatetocontent.com/39affabc185ccad0c249c41062d20da9/invoke.js",
      // '//cdn.popcash.net/show.js',//popcash ad
      'https://www.dexpredict.com/a/display.php?r=5163359',//adcash banner
      '/ad.js',//adcash native ad
    ]

    if (typeof window !== undefined && !scriptLoaded) {
      ads.forEach(ad => {
        const script = document.createElement('script');
        script.setAttribute('async', ''); // Or defer or nothing
        script.setAttribute('type', "text/javascript");
        script.src = ad;
        const position = document.querySelector("body"); // Or any other location , example head
        position.appendChild(script);
        setScriptLoaded(true);
      })
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies])
  return (
    <NavContext>
      <div className="bg-black-dark min-w-full h-full font-subMovieFont">
        <div className="bg-black-light rounded shadow-xl overflow-hidden flex flex-col">
          <SavedMoviesContext.Provider value={{ savedMovies, setSavedMovies }}>
            <Nav />
            <Component {...pageProps} />
          </SavedMoviesContext.Provider>
          <Footer />
        </div>
      </div>
    </NavContext>
  )
}

export default MyApp
