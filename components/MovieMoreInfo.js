import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { imageUrl } from "../utils";


function MovieMoreInfo({ imagePath, movieId }) {

    const [isMouseOver, setIsMouseOver] = useState(false)
    const handleMouseEnter = () => {
        if (window.interval && window.interval.id) {
            window.interval.destroy()
        }
        setIsMouseOver(true)
    }

    const handleMouseLeave = () => {
        if (window.interval && !window.interval.id) {
            window.interval.create()
        }
        setIsMouseOver(false)
    }

    return (
        <div className="relative transform transition-all duration-300 hover:scale-105 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={"w-full h-full bg-black-dark bg-opacity-50 absolute top-0 left-0 z-10 flex items-center justify-center transition-all duration-300 transform " + (isMouseOver ? "" : "translate-x-full")} >
                <Link href={"/movie/" + movieId}>
                    <a className={"font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-lg transform focus:translate-y-0.5 transition-all duration-300 py-2 px-4 text-xs leading-normal text-white"}>
                        More info
                    </a>
                </Link>
            </span>
            <img
                src={imageUrl + imagePath}
                alt={"movie image"}
                // loading='lazy'
                className={"w-full ml-auto shadow-xl hover:shadow-md transition-all duration-300 filter " + (isMouseOver ? "blur-sm" : "")}
            />
        </div>
    )
}

export default MovieMoreInfo
