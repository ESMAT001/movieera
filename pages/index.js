
import Media from '../components/Media'
import CustomHead from '../components/utils/CustomHead'
import CustomHeader from '../components/mainPageComponents/CustomHeader'
import Ad from '../components/Ad'
import { apiUrl } from '../utils'


import { callApi } from '../functions/functions'

export default function Home({ movies, error }) {
  const { trending, genres } = movies
  let index = 0
  function renderGenres(genre) {
    const genreName = Object.keys(genre)[0]
    index++
    return (
      <Media
        movies={genre[genreName]}
        movieType={genreName}
        seeAllBtn={true}
        key={index + "sGenreIndex"}
        moviesGenre={genreName}
      />
    )

  }
  return (
    <>
      <CustomHead />
      <CustomHeader movies={trending.slice(0, 6)} />

      {/* ad */}
      <div className="bg-black-light pt-12 z-10 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200">
        <Ad
          key="googleAds-1"
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-8407721631737964"
          data-ad-slot="8059491915"
        />
      </div>
      {/* ad */}

      <Media movies={trending.slice(6)} error={error} topPadding={true} />
      {/* cool ads */}
      <div className="hidden md:block mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200">
        <Ad
          key="googleAds-2"
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8407721631737964"
          data-ad-slot="3368426100"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      {/*cool ad */}

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