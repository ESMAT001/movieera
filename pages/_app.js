import 'tailwindcss/tailwind.css'
import '../styles/style.css'

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
