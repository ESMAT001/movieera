import { Fragment } from 'react'
import Media from '../components/Media'
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
      // <Fragment key={index + "ContainerIndexK"}>
      // {/* <Ad  key={index + "AdIndexK"} /> */}
      <Media
        movies={genre[genreName]}
        movieType={genreName}
        seeAllBtn={true}
        key={index + "sGenreIndex"}
        moviesGenre={genreName}
      />
      // </Fragment>
    )
  }
  return (
    <>
      <CustomHead />
      <CustomHeader movies={trending.slice(0, 6)} />
      <Media movies={trending.slice(6)} error={error} topPadding={true} />
      <a
        href="https://discovernative.com/al/visit.php?al=1,7"
        style={{ position: 'absolute', top: '-1000px', left: '-1000px', width: '1px', height: '1px', visibility: 'hidden', display: "none" }}
      ></a>
      <noscript><a href="https://discovernative.com/al/visit.php?al=1,6"
        style={{ position: 'absolute', top: '-1000px', left: '-1000px', width: '1px', height: '1px', visibility: 'hidden', display: "none" }}
      ></a>
      </noscript>
      {/* cool ads */}
      <div className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200" id="container-39affabc185ccad0c249c41062d20da9"></div>
      {/*cool ad */}
      {
        genres.map(genre => renderGenres(genre))
      }
      {/*adcash ad */}
      <div className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200" id="awn-z5163363"></div>
      {/*adcash ads */}
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