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
  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('savedMovies'))
    if (dataFromLocalStorage) setSavedMovies(dataFromLocalStorage);
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
