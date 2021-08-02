import React from 'react'
import CustomHead from '../utils/CustomHead'
import { imageUrl } from '../../utils'
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
                <div className="h-screen" >

                </div>

            </main>
        </>
    )
}

export default Movie


{/* <p>{movie.runtime} MIN</p>
                                <p>{movie.release_date}</p>
                                <p>Vote average : {vote_average}</p>
                                <p>Vote count : {vote_count}</p>
                                <p>Original language: {movie.original_language}</p>
                                <p>
                                    Overview : {movie.overview}
                                </p> */}