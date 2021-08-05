import React from 'react'
import { imageUrl } from '../../utils'
import Rating from '../utils/Rating'
import { FaDownload } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";

function SubBox({ movie }) {
    const posterImage = movie.poster_path
    const title = movie.title
    const originalTitle = movie.original_title
    return (
        <div className="relative flex flex-col">
            <div className="w-full flex flex-col justify-center sm:flex-row items-center sm:space-x-10 space-y-6 sm:space-y-0">
                <img
                    src={imageUrl(posterImage)}
                    alt={title + " poster image"}
                    className="w-4/6 sm:w-2/6 object-cover bg-nice-red"
                />
                <div className="flex flex-col items-center space-y-3 text-gray-200  ">
                    <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-movieNameFont">{title}</h1>
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
                            <IoIosPlay className="text-xl" /> Watch Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBox
