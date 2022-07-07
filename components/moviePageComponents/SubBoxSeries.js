import React from 'react'
import { imageUrl} from '../../utils'
import Rating from '../utils/Rating'
import { IoIosPlay } from "react-icons/io";
import Image from 'next/image'

function SubBox({ movie }) {
    const posterImage = movie.poster_path
    const title = movie.name
    const originalTitle = movie.original_name
    return (
        <div className="relative flex flex-col">
            <div className="w-full flex flex-col justify-center sm:flex-row items-center sm:space-x-10 space-y-6 sm:space-y-0">
                <div className="w-4/6 sm:w-2/6 object-cover">
                    <Image
                        alt={title + " movie poster image"}
                        src={imageUrl(posterImage)}
                        width={500}
                        height={750}
                        // placeholder="blur"
                        layout="responsive"
                        // blurDataURL={movie.placeholder}
                    />
                </div>
                <div className="flex flex-col items-center space-y-3 text-gray-200  ">
                    <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-movieNameFont">{title}</h1>
                    {originalTitle !== title && <h2 className="text-white text-xs font-movieNameFont">{originalTitle}</h2>}
                    <ul className="flex flex-row flex-wrap justify-center sm:justify-start space-x-2 text-sm text-opacity-90 ">
                        {movie.generes.map((genre) => (
                            <li key={genre.id} className="">
                                {genre.name}
                            </li>
                        ))}
                    </ul>
                    <Rating rating={movie.vote_average} />
                    <div className="flex space-x-4 pt-6">
                        <a
                            href="#seasons"
                            className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600  flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white ">
                            <IoIosPlay className="text-md mr-1" />Watch
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBox
