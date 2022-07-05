// import { useEffect } from 'react';
import Media from '../components/Media'
import CustomHead from '../components/utils/CustomHead'
import CustomHeader from '../components/mainPageComponents/CustomHeader'
import Ad from '../components/Ad'
import { apiUrl } from '../utils'


import { callApi } from '../functions/functions'

export default function Home({ movies,series, error }) {
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

  const scriptText = `{
              "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://movieera.vercel.app",
            "potentialAction": [{
              "@type": "SearchAction",
            "target": "https://movieera.vercel.app/search/{search_term_string}",
            "query-input": "required name=search_term_string"
          },{
              "@type": "SearchAction",
            "target": "https://movieera.vercel.app/search/{search_term_string}",
            "query-input": "required name=search_term_string"
          }]
          }`;

  return (
    <>
      <CustomHead >
        <script type="application/ld+json">
          {scriptText}
        </script>
        <link rel="canonical" href="https://movieera.vercel.app/" />
      </CustomHead>
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
      <Media
        movies={series}
        movieType={"Trending Series"}
        key={index + "seriessGenreIndex"}
        moviesGenre={"Series"}
        topPadding={true}
      />
      <Media movies={trending.slice(6)} error={error}  />
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

  const revalidate = parseInt(86400 / 4)

  const [movies, error] = await callApi(apiUrl + "/trending")
  let [series, error2] = await callApi("https://api.themoviedb.org/3/tv/popular?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=1");
  if (series.results.length > 0) {
    series = series.results.map(ser=>{
      return {
        ...ser,
        title: ser.name,
      }
    }).slice(0, 4)
  }

  return {
    props: { movies, error, series },
    revalidate
  }
}