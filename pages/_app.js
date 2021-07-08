

import 'tailwindcss/tailwind.css'
import '../styles/style.css'


import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"


import Nav from '../components/Nav'
import Footer from '../components/Footer'




function MyApp({ Component, pageProps }) {
  return (
    <>

      <div className="bg-black-dark min-w-full h-full font-subMovieFont">
        <div className="bg-black-light rounded shadow-xl overflow-hidden">
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MyApp
