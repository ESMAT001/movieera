import React from 'react'
import Rating from './utils/Rating'
import MovieMoreInfo from './MovieMoreInfo'

function Header({ movies }) {
    const movie = movies[6]
    console.log(movie)
    return (
        <header className="text-white relative flex flex-col overflow-hidden" >
            <div className="h-full w-full absolute top-0 left-0 z-0 filter blur-sm bg-cover bg-left-top bg-no-repeat brightness-90 contrast-125"
                style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + '")' }} >
                <span className="w-full h-full absolute bg-black bg-opacity-25"></span>
            </div>
            <div className="z-10 flex flex-col items-center">
                <div className="w-3/6 sm:w-3/6 xl:w-2/5 mb-10 mt-32 grid grid-cols-3 gap-y-4 sm:gap-0 justify-items-center">
                    <div className="col-span-3 sm:col-span-2 order-2 sm:order-1 sm:justify-self-start flex flex-col justify-evenly items-center sm:items-start space-y-2 sm:space-y-0">
                        <h2 className="text-2xl sm:text-3xl font-movieNameFont capitalize">
                            {movie.original_title}
                        </h2>
                        <p className="text-sm text-opacity-90 text-gray-200">Rating: {movie.vote_average}</p>
                        <Rating rating={movie.vote_average} />
                        <p className="font-subMovieFont text-sm text-opacity-90 text-gray-200">Original language : {movie.original_language}</p>
                        <ul className="flex flex-row flex-wrap space-x-2 text-sm text-opacity-90 text-gray-200">
                            {
                                movie.genres.map((genre) => (
                                    <li key={genre.id} className="">
                                        {genre.name}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex space-x-2">
                            <button
                                className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none 
                            flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white"
                            ><i className="fas fa-download"></i> Download</button>
                            <button
                                className="font-semibold rounded antialiased bg-green-400 hover:bg-green-500 focus:bg-green-600  focus:outline-none 
                            flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white  "
                            > <i className="fas fa-play"></i> Play</button>
                        </div>
                    </div>
                    <div className=" col-span-3 sm:col-span-1 order-1 sm:order-2">
                        <MovieMoreInfo imagePath={movie.poster_path} />
                    </div>
                </div>
                <div>
                    asdkfjl asdkfj a;sd
                </div>
            </div>
        </header >
    )
}

export default Header
