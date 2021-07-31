import React, { useState } from 'react'
import { imageUrl } from "../../utils";


function MovieMoreInfo({ imagePath, children }) {

    const [isMouseOver, setIsMouseOver] = useState(false)
    const handleMouseEnter = () => setIsMouseOver(true)
    const handleMouseLeave = () => setIsMouseOver(false)


    return (
        <div className="relative transform transition-all duration-300 hover:scale-105 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={"w-full h-full bg-black-dark bg-opacity-50 absolute top-0 left-0 z-10 flex items-center justify-center transition-all duration-300 transform " + (isMouseOver ? "" : "translate-x-full")} >
                {children}
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
