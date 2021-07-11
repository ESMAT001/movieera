import React, { useState, useEffect } from "react";
import Rating from "./utils/Rating";
import MovieMoreInfo from "./mainPageComponents/MovieMoreInfo";
import MoviesSlider from "./MoviesSlider";

import { FaDownload } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";

let movieRefs = [];

function Header({ movies }) {
    const [movieIndex, setMovieIndex] = useState(0);
    const [movie, setMovie] = useState(movies[movieIndex]);

    const interval = {
        id: null,
        create() {
            this.id = setInterval(() => changeMovie(), 3000);
            // console.log('new interval created', this.id)
        },
        destroy() {
            clearInterval(this.id);
            this.id = false;
        },
    };

    if (movieRefs.length === 0) {
        for (let index = 0; index < movies.length; index++) {
            movieRefs.push(React.createRef());
        }
    }

    function destroyAndChange(i = -2) {
        // console.log(window.interval)
        window.interval.destroy();
        // console.log(window.interval)
        changeMovie(i);
    }

    function changeMovie(i = -2) {
        setMovieIndex((prev) => {
            movieRefs[prev].current.classList.remove("scale-125");
            if (i === -1) return movies.length - 1;
            if (i > -1) return i;
            if (prev + 1 > movies.length - 1) return 0;
            return prev + 1;
        });
    }

    useEffect(() => {
        interval.create();
        window.interval = interval;
        return () => {
            interval.destroy();
        };
    }, []);

    useEffect(() => {
        if (window.interval.id === false) {
            setTimeout(() => window.interval.create(), 3000);
        }

        setMovie(movies[movieIndex]);
        movieRefs[movieIndex].current.classList.add("scale-125");
    }, [movieIndex]);

    return (
        <header className="text-white relative flex flex-col overflow-hidden">
            <div
                className="h-full w-full absolute top-0 left-0 z-0 filter blur-sm bg-cover bg-center bg-no-repeat brightness-90 contrast-125"
                style={{
                    backgroundImage: 'url("https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + '")',
                }}>
                <span className="w-full h-full absolute bg-black bg-opacity-25"> </span>
            </div>
            <div className="z-10 flex flex-col items-center">
                <div className="w-6/12  2xl:w-6/12 mb-10 mt-32 grid grid-cols-3 gap-y-4 gap-x-4 sm:gap-y-0 justify-items-center relative ">
                    <button
                        className="absolute -left-16 sm:-left-28 z-40 top-1/4 hover:bg-white hover:bg-opacity-20  px-3 pt-12 pb-10 rounded-sm transition-all duration-300"
                        onClick={() => destroyAndChange(movieIndex - 1)}
                    >
                        <div className="w-5 bg-white bg-opacity-75 h-1 overflow-hidden transform -rotate-45 -mt-2 rounded">&apos;</div>
                        <div className="w-5 bg-white bg-opacity-75 h-1 overflow-hidden transform rotate-45 mt-2 rounded">&apos;</div>
                    </button>
                    <button
                        className="absolute -right-16 sm:-right-28 z-40 top-1/4 hover:bg-white hover:bg-opacity-20  px-3 pt-12 pb-10 rounded-sm transition-all duration-300"
                        onClick={destroyAndChange}
                    >
                        <div className="w-5 bg-white bg-opacity-75 h-1 overflow-hidden transform rotate-45 -mt-2 rounded">&apos;</div>
                        <div className="w-5 bg-white bg-opacity-75 h-1 overflow-hidden transform -rotate-45 mt-2 rounded">&apos;</div>
                    </button>
                    <div className="col-span-3 sm:col-span-2 order-2 sm:order-1 sm:justify-self-start flex flex-col justify-evenly items-center sm:items-start space-y-2 sm:space-y-0">
                        <h2 className="text-2xl sm:text-3xl text-center sm:text-left font-movieNameFont capitalize">
                            {movie.original_title}
                        </h2>
                        <p className="text-sm text-opacity-90 text-gray-200">
                            Rating: {movie.vote_average}
                        </p>
                        <Rating rating={movie.vote_average} />
                        <p className="font-subMovieFont text-sm text-opacity-90 text-gray-200">
                            Original language: {movie.original_language}
                        </p>
                        <ul className="flex flex-row flex-wrap justify-center space-x-2 text-sm text-opacity-90 text-gray-200">
                            {movie.genres.map((genre) => (
                                <li key={genre.id} className="">
                                    {genre.name}
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-2">
                            <button className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white ">
                                <FaDownload className="text-md mr-1" />Download
                            </button>
                            <button className="font-semibold rounded antialiased bg-green-400 hover:bg-green-500 focus:bg-green-600  focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white ">
                                <IoIosPlay className="text-xl" /> Play
                            </button>
                        </div>
                    </div>
                    <div className=" col-span-3 sm:col-span-1 order-1 sm:order-2">
                        <MovieMoreInfo imagePath={movie.poster_path} movieId={movie.id} />
                    </div>
                </div>
                <MoviesSlider
                    movies={movies}
                    movieRefs={movieRefs}
                    destroyAndChange={destroyAndChange}
                    movieIndex={movieIndex}
                />
            </div>
        </header>
    );
}

export default Header;
