import 'tailwindcss/tailwind.css'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <div className="bg-black-dark min-w-full h-full md:px-7 md:py-9 font-subMovieFont">
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
