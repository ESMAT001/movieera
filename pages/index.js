import Image from 'next/image'
import Link from 'next/link'
import Main from '../components/Main'
import CustomHead from '../components/utils/CustomHead'
import Header from '../components/Header'
import CustomHeader from '../components/mainPageComponents/CustomHeader'

import { callApi } from '../functions/functions'

export default function Home({ movies, error }) {
  // console.log(movies)
  return (
    <>
      <CustomHead />
      <CustomHeader movies={movies} />
      {/* <Header movies={movies} /> */}
      <div >
        {movies && movies.map((movie, i) => {
          return (<h1 className="font-semibold text-purple-700" key={i}>{movie.original_title + " " + movie.backdrop_path}</h1>)
        })}

        {error && <h1 className="text-red-400">{error}</h1>}
        <Main />
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