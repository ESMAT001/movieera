import Image from 'next/image'
import Link from 'next/link'
import Main from '../components/Main'
import Footer from '../components/Footer'
import CustomHead from '../components/utils/CustomHead'

import { callApi } from '../functions/functions'

export default function Home({ movies, error }) {
  console.log(movies)
  return (
    <>
      <CustomHead title="cool"/>
      <div className="">
        <Link href="/movies">
          <a>Movies</a>
        </Link>

        {movies && movies.map((movie, i) => {
          return (<h1 className="font-semibold text-purple-700" key={i}>{movie.original_title}</h1>)
        })}

        {error && <h1 className="text-red-400">{error}</h1>}
        <Main />
        <Footer />

      </div>
    </>

  )
}

export async function getStaticProps() {

  const revalidate = parseInt(86400 / 4)

  const [movies, error] = await callApi("http://localhost:3000/api/trending")


  return {
    props: { movies, error },
    revalidate
  }
}