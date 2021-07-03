import React, { useState, useEffect } from 'react'
import Rating from './utils/Rating'
import MovieMoreInfo from './MovieMoreInfo'

function Header({ movies }) {
    const [movieIndex, setMovieIndex] = useState(0)
    const [movie, setMovie] = useState(movies[movieIndex])

    function changeMovie() {
        setMovieIndex(prev => {
            if (prev + 1 > (movies.length - 1)) return 0;
            return prev + 1
        })
    }

    useEffect(() => {
        // const fnId = setInterval(changeMovie, 3000);
        // return () => {
        //     clearInterval(fnId)
        // }
    }, [])

    useEffect(() => {
        setMovie(movies[movieIndex])
    }, [movieIndex])

    return (
        <header className="text-white relative flex flex-col overflow-hidden" >
            <div className="h-full w-full absolute top-0 left-0 z-0 filter blur-sm bg-cover bg-center bg-no-repeat brightness-90 contrast-125"
                style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + '")' }} >
                <span className="w-full h-full absolute bg-black bg-opacity-25"></span>
            </div>
            <div className="z-10 flex flex-col items-center">
                <div className="w-6/12  2xl:w-6/12 mb-10 mt-32 grid grid-cols-3 gap-y-4 gap-x-4 sm:gap-y-0 justify-items-center">
                    <div className="col-span-3 sm:col-span-2 order-2 sm:order-1 sm:justify-self-start flex flex-col justify-evenly items-center sm:items-start space-y-2 sm:space-y-0">
                        <h2 className="text-2xl sm:text-3xl text-center sm:text-left font-movieNameFont capitalize">
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
                <div className="flex flex-row flex-nowrap h-48 xl:h-56 2xl:h-72 w-screen items-center space-x-6  overflow-x-scroll  hide-scroll-bar mt-4 sm:mt-6 mb-10 px-10">
                    {
                        movies.map((subMovie, i) => {
                            return (

                                <img
                                    src={"https://image.tmdb.org/t/p/w500/" + subMovie.poster_path}
                                    className="transform transition-all duration-300 hover:scale-105 w-full h-4/5 cursor-pointer"
                                    onClick={() => setMovieIndex(i)}
                                    key={i + "movieX"} />

                            )
                        })
                    }
                </div>
            </div>
        </header >
    )
}

export default Header
