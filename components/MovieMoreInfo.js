import React, { useState } from 'react'

function MovieMoreInfo({ imagePath }) {
    const [isMouseOver, setIsMouseOver] = useState(false)
    return (
        <div className="relative transform transition-all duration-300 hover:scale-105 overflow-hidden"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            <span className={"w-full h-full bg-black-dark bg-opacity-50 absolute top-0 left-0 z-10 flex items-center justify-center transition-all duration-300 transform " + (isMouseOver ? "" : "translate-x-full")} >
                <button className={"font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-lg transform focus:translate-y-0.5 transition-all duration-300 py-2 px-4 text-xs leading-normal text-white"}>
                    More info
                </button>
            </span>
            <img
                className={"w-full ml-auto shadow-xl hover:shadow-md transition-all duration-300 filter "+(isMouseOver ? "blur-sm" : "")}
                src={"https://image.tmdb.org/t/p/w500/" + imagePath} />
        </div>
    )
}

export default MovieMoreInfo
