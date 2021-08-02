import React from 'react'
import CustomHead from '../utils/CustomHead'
import { imageUrl } from '../../utils'
import Rating from '../utils/Rating'
import { FaDownload } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";


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
            <CustomHead title={movie.title} />
            <main>
                <div className="h-scree relative overflow-hidden px-10 sm:px-64 pt-32 pb-10 sm:py-32">
                    <div
                        className="h-full w-full absolute top-0 left-0 filter blur-sm bg-cover bg-center bg-no-repeat brightness-50 contrast-125 transform scale-105 transition-all duration-500 z-0"
                        style={{
                            backgroundImage: `url("${imageUrl}${bgImage}")`,
                            OBackgroundSize: 'cover',
                            MozBackgroundSize: 'cover',
                            WebkitBackgroundSize: 'cover'
                        }}>
                        <span className="w-full h-full absolute bg-black bg-opacity-25"> </span>
                    </div>
                    <div className="relative flex flex-col">
                        <div className="w-full flex flex-col justify-center sm:flex-row items-center sm:justify-between bg-blac bg-opacity-60 sm:space-x-10 space-y-6 sm:space-y-0">
                            {/* <div className="w-2/6 object-cover"> */}
                            <img src={imageUrl + posterImage} alt={title + " poster image"} className="w-4/6 sm:w-2/6 object-cover" />
                            {/* </div> */}
                            <div className="flex flex-col items-center space-y-3 text-gray-200">
                                <h1 className="text-white text-2xl sm:text-6xl font-movieNameFont">{title}</h1>
                                {originalTitle !== title && <h2 className="text-white text-xs font-movieNameFont">{originalTitle}</h2>}
                                <ul className="flex flex-row flex-wrap justify-center sm:justify-start space-x-2 text-sm text-opacity-90 ">
                                    {movie.genres.map((genre) => (
                                        <li key={genre.id} className="">
                                            {genre.name}
                                        </li>
                                    ))}
                                </ul>
                                <Rating rating={movie.vote_average} />
                                <div className="flex space-x-4 pt-6">
                                    <button className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white ">
                                        <FaDownload className="text-md mr-1" />Download
                                    </button>
                                    <button className="font-semibold rounded antialiased bg-green-400 hover:bg-green-500 focus:bg-green-600  focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white ">
                                        <IoIosPlay className="text-xl" /> Play
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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