import React, { useState } from 'react'
import CustomHead from '../utils/CustomHead'
import { imageUrl, trailerImgUrl } from '../../utils'
import Bg from './Bg'
import SubBox from './SubBox'
import MoreTrailers from './MoreTrailers'
import TrailerBox from './TrailerBox';
import Modal from '../utils/Modal'
import MovieInfo from './MovieInfo'
import ProductionCompanies from './ProductionCompanies'
import Link from 'next/link'
import MediaLinks from './MediaLinks'
import Plyr from 'plyr-react'

function Movie({ movie, error }) {

    const [isTrailerModalOpen, setTrailerModalOpen] = useState(false)
    const [TrailerModalVideoKey, setTrailerModalVideoKey] = useState(null)

    const [isMoviePlayerModalOpen, setMoviePlayerModalOpen] = useState(false)
    const [moviePlayerUrls, setMoviePlayerUrls] = useState(null)

    const openMoviePlayerModal = (urls) => {
        setMoviePlayerUrls(urls)
        setMoviePlayerModalOpen(true)
    }

    const closeMoviePlayerModal = () => {
        setMoviePlayerUrls(null)
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


    console.log(movie)
    const bgImage = movie.backdrop_path
    const title = movie.title
    return (
        <>
            <CustomHead title={title} />
            {
                isTrailerModalOpen && <Modal close={closeTrailerModal} >
                    <iframe type="text/html" className="h-full w-full" src={`//www.youtube.com/embed/${TrailerModalVideoKey}?autoplay=1`} frameBorder="0"></iframe>
                </Modal>
            }

            {
                isMoviePlayerModalOpen && <Modal close={closeMoviePlayerModal} >
                    <Plyr
                        source={
                            {
                                type: "video",
                                title: 'Example title',
                                sources: moviePlayerUrls
                            }
                        }
                    />
                </Modal>
            }


            <main>
                <div className="relative overflow-hidden px-10 sm:px-20 md:px-32 lg:px-44 xl:px-60 2xl:px-72 pt-32 pb-10 sm:py-32">
                    <Bg bgImage={bgImage} />
                    <SubBox callback={() => openMoviePlayerModal([
                        {
                            src: "https://dl18.ftk.pw/user/shahab4/film/The.Suicide.Squad.2021.720p.BluRay.Film2Movie_Asia.mkv",
                            type: 'video/mkv',
                            size: 720,
                        },
                        {
                            src: "https://dl18.ftk.pw/user/shahab4/film/The.Suicide.Squad.2021.720p.BluRay.Film2Movie_Asia.mkv",
                            type: 'video/mkv',
                            size: 720,
                        },
                        {
                            src: "https://dl18.ftk.pw/user/shahab4/film/The.Suicide.Squad.2021.720p.BluRay.Film2Movie_Asia.mkv",
                            type: 'video/mkv',
                            size: 720,
                        }
                    ])} movie={movie} />
                </div>
                <div className="text-gray-400 px-14 sm:px-16 md:px-20 lg:px-32 xl:px-36 2xl:px-44 py-10 md:py-20 xl:py-26" >
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-10 sm:space-y-0">
                        <MovieInfo movie={movie} />
                        {movie.videos.results.length > 0 && <div className="sm:w-3/6 flex flex-col items-center space-y-4">
                            <h2 className="text-center text-xl font-movieNameFont">Trailers</h2>
                            <TrailerBox
                                videoKey={movie.videos.results[0].key}
                                title={movie.title}
                                fn={openTrailerModal}
                            />
                        </div>}
                    </div>
                    {movie.videos.results.length > 1 && <MoreTrailers
                        videos={movie.videos.results.slice(1)}
                        title={movie.title}
                        fn={openTrailerModal}
                    />}
                    <p className="mt-6">
                        <span className="text-nice-red text-sm">
                            Home Page : &nbsp;
                        </span>
                        <Link href={movie.homepage}>
                            <a className="text-blue-500 text-xs" target="_blank">
                                <p className="p"> {movie.homepage}</p>
                            </a>
                        </Link>
                    </p>
                    {
                        movie.production_companies.length > 0 && <ProductionCompanies companies={movie.production_companies} />
                    }
                    <MediaLinks movie={movie} />
                </div>

            </main>
        </>
    )
}

export default Movie

