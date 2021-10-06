import { useState, useEffect } from 'react'

import NavContext from '../components/context/NavContext'

import SavedMoviesContext from '../components/utils/SavedMoviesContext'
import Ad from '../components/utils/Ad'

import 'tailwindcss/tailwind.css'
import '../styles/style.css'
import 'plyr-react/dist/plyr.css'

import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"


import Nav from '../components/Nav'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {

  function getAdUrl(d, z) {
    return '//' + d + '/400/' + z;
  }

  const [savedMovies, setSavedMovies] = useState([])
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const ads = ["https://s.skimresources.com/js/200910X1679342.skimlinks.js",
    getAdUrl('rndskittytor.com', 4570659),
    "http://www.effectiveperformanceformat.com/3a858513dc883f1d6bb56a65456bb3c4/invoke.js"
  ]

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('savedMovies'))
    if (dataFromLocalStorage) setSavedMovies(dataFromLocalStorage);
    fetch("https://api-movieera.herokuapp.com/v1/insights")

    window.atOptions = {
      'key': '3a858513dc883f1d6bb56a65456bb3c4',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };


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
