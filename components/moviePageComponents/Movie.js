import React from 'react'
import CustomHead from '../utils/CustomHead'
import { imageUrl, trailerImgUrl } from '../../utils'
import Bg from './Bg'
import SubBox from './SubBox'

function Movie({ movie, error }) {
    console.log(movie)
    const bgImage = movie.backdrop_path
    const posterImage = movie.poster_path
    const title = movie.title
    const originalTitle = movie.original_title
    const vote_average = movie.vote_average
    const vote_count = movie.vote_count
    return (
        <>
            <CustomHead title={title} />
            <main>
                <div className="relative overflow-hidden px-10 sm:px-20 md:px-32 lg:px-44 xl:px-60 2xl:px-72 pt-32 pb-10 sm:py-32">
                    <Bg bgImage={bgImage} />
                    <SubBox movie={movie} />
                </div>
                <div className="text-gray-400 px-14 sm:px-16 md:px-20 lg:px-32 xl:px-36 2xl:px-44 py-10 md:py-20 xl:py-26" >
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-10 sm:space-y-0">
                        <div className="sm:w-3/6 flex flex-col justify-between">
                            <h2 className="text-center text-xl pb-3 font-movieNameFont">Movie Info</h2>
                            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Runtime : </span>{movie.runtime} <span className="text-nice-red">MIN</span></p>
                            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Release Date : </span>{movie.release_date}</p>
                            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Vote average : </span>{vote_average * 10 + "%"}</p>
                            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Vote count : </span>{vote_count}</p>
                            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Original language : </span>{movie.original_language}</p>
                            <p className="opacity-90">
                                <span className="sm:font-semibold text-nice-red" >Overview : </span>{movie.overview}
                            </p>
                        </div>
                        {movie.videos.results.length > 0 && <div className="sm:w-3/6 flex flex-col items-center space-y-4">
                            <h2 className="text-center text-xl font-movieNameFont">Trillers</h2>
                            <div className="w-5/6 bg-nice-red" >
                                <img src={trailerImgUrl(movie.videos.results[0].key)} alt={movie.title + "trailer"} className="object-cover w-full h-full mx-auto" />
                            </div>
                        </div>}
                    </div>
                </div>

            </main>
        </>
    )
}

export default Movie

