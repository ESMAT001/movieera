import { useState, useEffect } from 'react'
import CustomHead from '../utils/CustomHead'
import { imageUrl, trailerImgUrl, websiteUrl, createMovieNameForUrl } from '../../utils'
import Bg from './Bg'
import SubBox from './SubBox'
import MoreTrailers from './MoreTrailers'
import TrailerBox from './TrailerBox';
import Modal from '../utils/Modal'
import MovieInfo from './MovieInfo'
import ProductionCompanies from './ProductionCompanies'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MediaLinks from './MediaLinks'
import Plyr from 'plyr-react'
import Recommendations from '../utils/Recommendations'
import Ad from '../Ad'
import { createMovieSourceObjects, getMediaLangTypeName } from '../../functions/functions'



const playerOptions = {
    storage: { enabled: true, key: 'plyr' },
    captions: { active: true, language: 'auto', update: false },
    autoplay: true,
    preload: 'metadata',
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'captions', 'volume', 'settings', 'fullscreen'],
}





function Movie({ movie, recommendations, error }) {
    const router = useRouter()
    const { play } = router.query
    const movieMediaSources = createMovieSourceObjects(movie.download_links);
    // console.log(movieMediaSources)
    const [isTrailerModalOpen, setTrailerModalOpen] = useState(false)
    const [TrailerModalVideoKey, setTrailerModalVideoKey] = useState(null)

    const [isMoviePlayerModalOpen, setMoviePlayerModalOpen] = useState(false)

    const [isLanguageOptionsModalOpen, setLanguageOptionsModalOpen] = useState(false)

    const [movieLanguage, setMovieLanguage] = useState(null)
    const [embeddedPlayerMovieId, setEmbeddedPlayerMovieId] = useState(null)


    const openLangOptionsModal = () => setLanguageOptionsModalOpen(true)
    const closeLangOptionsModal = () => setLanguageOptionsModalOpen(false)

    const openMoviePlayerModal = (urls) => {
        setMoviePlayerModalOpen(true)
    }

    const closeMoviePlayerModal = () => {
        setEmbeddedPlayerMovieId(null)
        setMovieLanguage(null)
        setMoviePlayerModalOpen(false)
    }

    const openTrailerModal = (key) => {
        setTrailerModalVideoKey(key)
        setTrailerModalOpen(true)
    }
    const closeTrailerModal = () => {
        setTrailerModalOpen(false)
        setTrailerModalVideoKey(null)
    }


    useEffect(() => {
        if (movieLanguage !== null || embeddedPlayerMovieId !== null) {
            openMoviePlayerModal()
        }
    }, [movieLanguage, embeddedPlayerMovieId])


    useEffect(() => {
        if (play === "true") {
            openLangOptionsModal()
        }
    }, [])

    const showLanguageOptions = () => {
        const jsx = []
        for (const key in movieMediaSources) {
            if (Object.hasOwnProperty.call(movieMediaSources, key)) {
                jsx.push(
                    <button
                        key={"movieLang" + key}
                        onClick={() => {
                            closeLangOptionsModal()
                            setMovieLanguage(key)
                        }}
                        className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600  focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white "
                    >
                        {getMediaLangTypeName(key)}
                    </button>
                )
            }
        }
        return jsx
    }


    // console.log(movie)
    const bgImage = movie.backdrop_path
    const title = movie.title
    const movieId = movie.id
    return (
        <>
            <CustomHead
                title={title}
                description={`Download or watch ${title} for free from Movieera (your online movie theater) , overview: ${movie?.overview?.slice(0, 90)}... `}
                keywords={`download ${title}, ${title} download,${title} free download,movieera ${title} ,${title} movieera,${title} movie download movieera,${title},watch ${title} online,دانلود ${title},${title} free download hd`}
                imgPath={imageUrl(movie.poster_path)}
                url={`${websiteUrl}movie/${createMovieNameForUrl(movieId, title)}`}
            >
                <link rel="canonical" href={`${websiteUrl}movie/${createMovieNameForUrl(movieId, title)}`} />
            </CustomHead>

            {

                isLanguageOptionsModalOpen && <Modal close={closeLangOptionsModal} >
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <button
                            key={"movieType101"}
                            onClick={() => {
                                closeLangOptionsModal()
                                setEmbeddedPlayerMovieId(movieId)
                            }}
                            className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600  focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white"
                        >
                            Watch form External Servers (HD)
                        </button>
                        <h2>Choose Language :</h2>

                        {
                            showLanguageOptions(movieMediaSources)
                        }
                    </div>
                </Modal>

            }


            {
                isTrailerModalOpen && <Modal close={closeTrailerModal} >
                    <Plyr
                        source={{
                            type: 'video',
                            poster: trailerImgUrl(TrailerModalVideoKey),
                            sources: [
                                {
                                    src: TrailerModalVideoKey,
                                    provider: 'youtube',
                                },
                            ],
                        }}
                        options={playerOptions}
                    />
                </Modal>
            }

            {
                isMoviePlayerModalOpen && <Modal close={closeMoviePlayerModal} >
                    <Plyr
                        source={{
                            type: 'video',
                            title: 'Example title',
                            poster: "/static/img/player_poster.png",
                            sources: movieMediaSources[movieLanguage],
                        }}

                        options={playerOptions}
                    />
                </Modal>
            }
            {

                isMoviePlayerModalOpen && embeddedPlayerMovieId !== null && <Modal close={closeMoviePlayerModal} >
                    {/* <iframe id="iframe" src={"https://www.2embed.ru/embed/tmdb/movie?id=" + embeddedPlayerMovieId} width="100%" height="100%" frameBorder="0"></iframe> */}
                    <iframe id="ve-iframe" src={"https://2embed.org/embed/movie?id=" + embeddedPlayerMovieId} width="100%" height="100%" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
                </Modal>

            }

            <main>
                <article className="relative overflow-hidden px-10 sm:px-20 md:px-32 lg:px-44 xl:px-60 2xl:px-72 pt-32 pb-10 sm:py-32">
                    <Bg bgImage={bgImage} />
                    <SubBox callback={openLangOptionsModal} movie={movie} />
                </article>
                <div className="text-gray-400 px-14 sm:px-16 md:px-20 lg:px-32 xl:px-36 2xl:px-44 py-10 md:py-20 xl:py-26" >

                    <Ad
                        key="movieAD_1"
                        className="adsbygoogle"
                        style={{ display: "block", textAlign: "center" }}
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-9968927152480430"
                        data-ad-slot="8822179716" />

                    <article className="flex flex-col sm:flex-row sm:space-x-6 space-y-10 sm:space-y-0">
                        <MovieInfo movie={movie} />
                        {movie.videos.results.length > 0 && <div className="sm:w-3/6 flex flex-col items-center space-y-4">
                            <h2 className="text-center text-xl font-movieNameFont">Trailers</h2>
                            <TrailerBox
                                videoKey={movie.videos.results[0].key}
                                title={movie.title}
                                fn={openTrailerModal}
                            />
                        </div>}
                    </article>
                    {movie.videos.results.length > 1 && <MoreTrailers
                        videos={movie.videos.results.slice(1)}
                        title={movie.title}
                        fn={openTrailerModal}
                    />}
                    <div className="mt-6">
                        <span className="text-nice-red text-sm">
                            Home Page : &nbsp;
                        </span>
                        <Link href={movie.homepage}>
                            <a className="text-blue-500 text-xs" target="_blank">
                                <p className="p"> {movie.homepage}</p>
                            </a>
                        </Link>
                    </div>
                    {
                        movie.production_companies.length > 0 && <ProductionCompanies companies={movie.production_companies} />
                    }
                    {/* cool ads */}

                    <Ad
                        key="moviePageAd-1"
                        className="adsbygoogle"
                        style={{ display: "block", textAlign: "center" }}
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-9968927152480430"
                        data-ad-slot="2747725953"
                    />

                    {/* <div className="mb-12  w-full mx-auto text-gray-200" id="container-39affabc185ccad0c249c41062d20da9"></div> */}
                    {/*cool ad */}
                    <MediaLinks movie={movie} />
                </div>
                {
                    recommendations.length > 0 && <Recommendations recommendations={recommendations} />
                }
                {/* ad */}
                <div className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200">
                    <Ad
                        key="moviePageAd-2"
                        className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-9968927152480430"
                        data-ad-slot="4799174229"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                </div>
                <article className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200 ">
                    <h2>Keywords :</h2>
                    <ul className='text-nice-red flex space-x-4 cursor-pointer flex-wrap'>
                        <li>
                            {movie.title} download
                        </li>
                        <li>
                            {movie.title} Movieera
                        </li>
                        <li>
                            Movieera {movie.title}
                        </li>
                        <li>
                            {movie.title} watch online
                        </li>
                        <li>
                            {movie.original_title} movie hd
                        </li>
                        <li>
                            {movie.original_title} download hd
                        </li>
                        <li>
                            {movie.original_title} download hd for free
                        </li>
                        <li>
                            {movie.original_title} watch online in movieera
                        </li>
                    </ul>
                </article>
            </main>
        </>
    )
}

export default Movie

