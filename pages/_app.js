import NextNProgress from "nextjs-progressbar";
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
  const [savedMovies, setSavedMovies] = useState([])
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('savedMovies'))
    if (dataFromLocalStorage) setSavedMovies(dataFromLocalStorage);
    // try {
    //   fetch("https://api-movieera.herokuapp.com/v1/insights")
    // } catch (error) {
    //   console.error(error)
    // }

    const ads = [
      // `https://www.effectiveperformanceformat.com/${window.atOptions.key}/invoke.js`,
      // "https://pl16658952.trustedgatetocontent.com/39affabc185ccad0c249c41062d20da9/invoke.js",
      // 'https://www.dexpredict.com/a/display.php?r=5163359',//adcash banner
      // '/ad.js',//adcash native ad
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
    <>
      <NextNProgress color="#ff003c" height={4} />
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
    </>
  )
}

export default MyApp
