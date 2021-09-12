
import Main from '../components/mainPageComponents/Main'
import CustomHead from '../components/utils/CustomHead'
import CustomHeader from '../components/mainPageComponents/CustomHeader'
import { apiUrl } from '../utils'


import { callApi } from '../functions/functions'

export default function Home({ movies, error }) {
  const { trending,genres } = movies
  function renderGenres(genre) {
    const genreName = Object.keys(genre)[0]
    return (
      <Main movies={genre[genreName]} movieType={genreName} seeAllBtn={true} />
    )
  }
  return (
    <>
      <CustomHead />
      <CustomHeader movies={trending.slice(0, 6)} />
        <Main movies={trending.slice(6)} error={error} topPadding={true} />
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