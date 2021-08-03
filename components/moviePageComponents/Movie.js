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

function Movie({ movie, error }) {

    const [isTrailerModalOpen, setTrailerModalOpen] = useState(false)
    const [TrailerModalVideoKey, setTrailerModalVideoKey] = useState(null)

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
            <main>
                <div className="relative overflow-hidden px-10 sm:px-20 md:px-32 lg:px-44 xl:px-60 2xl:px-72 pt-32 pb-10 sm:py-32">
                    <Bg bgImage={bgImage} />
                    <SubBox movie={movie} />
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
                    <p className="mt-6">
                        <span className="text-nice-red text-sm">
                            Home Page : &nbsp;
                        </span>
                        <Link href={movie.homepage}>
                            <a className="text-blue-500 text-sm" target="_blank">
                                {movie.homepage}
                            </a>
                        </Link>
                    </p>
                    {
                        movie.production_companies.length > 0 && <ProductionCompanies companies={movie.production_companies} />
                    }
                    {movie.videos.results.length > 1 && <MoreTrailers
                        videos={movie.videos.results.slice(1)}
                        title={movie.title}
                        fn={openTrailerModal}
                    />}
                </div>

            </main>
        </>
    )
}

export default Movie

