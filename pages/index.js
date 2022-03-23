// import { useEffect } from 'react';
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

  // useEffect(() => {
  //   window.amzn_assoc_ad_type = "link_enhancement_widget";
  //   window.amzn_assoc_tracking_id = "movieera05-20";
  //   window.amzn_assoc_linkid = "4228f340c7b54c352bb4c08904670d52";
  //   window.amzn_assoc_placement = "";
  //   window.amzn_assoc_marketplace = "amazon";
  //   window.amzn_assoc_region = "US";
  // }, []);



  return (
    <>
      <CustomHead />
      <CustomHeader movies={trending.slice(0, 6)} />

      {/* ad */}
      <div className="bg-black-light pt-12 z-10 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200 overflow-hidden">
        <Ad
          key="googleAds-1"
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-9968927152480430"
          data-ad-slot="6060285008"
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
          data-ad-client="ca-pub-9968927152480430"
          data-ad-slot="3908748475"
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

  const revalidate = parseInt(86400 / 8)

  const [movies, error] = await callApi(apiUrl + "/trending")


  return {
    props: { movies, error },
    revalidate
  }
}