
import Main from '../components/mainPageComponents/Main'
import CustomHead from '../components/utils/CustomHead'
import CustomHeader from '../components/mainPageComponents/CustomHeader'
import Ad from '../components/utils/Ad'
import { apiUrl } from '../utils'


import { callApi } from '../functions/functions'

export default function Home({ movies, error }) {
  const { trending, genres } = movies
  let index = 0
  function renderGenres(genre) {
    const genreName = Object.keys(genre)[0]
    index++
    return (
      <>
        <Ad />
        <Main
          movies={genre[genreName]}
          movieType={genreName}
          seeAllBtn={true}
          key={index + "sGenreIndex"}
          moviesGenre={genreName}
        />
      </>
    )
  }
  return (
    <>
      <CustomHead />
      <CustomHeader movies={trending.slice(0, 6)} />
      <Main movies={trending.slice(6)} error={error} topPadding={true} />
      {/* ad */}
      {
        genres.map(genre => renderGenres(genre))
      }
    </>

  )
}

export async function getStaticProps() {

  const revalidate = parseInt(86400 / 4)

  const [movies, error] = await callApi(apiUrl + "/trending")


  return {
    props: { movies, error },
    revalidate
  }
}