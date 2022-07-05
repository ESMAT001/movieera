import React, { useState } from 'react'
import { imageUrl } from '../../utils'
import { BsFillPlayFill } from "react-icons/bs";

function EpisodeBox({ img, title, episodeNumber, fn }) {
    const [isMouseOver, setIsMouseOver] = useState(false)
    const handleMouseEnter = () => setIsMouseOver(true)
    const handleMouseLeave = () => setIsMouseOver(false)
    return (
        <div className="w-full bg-nice-red overflow-hidden">
            <div className="w-full relative"
                onClick={handleMouseEnter}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="absolute text-xs py-1 px-2 shadow-xl bg-nice-red">
                    Episode: {episodeNumber}
                </span>
                <span className={"w-full h-full bg-black-dark bg-opacity-50 absolute top-0 left-0 z-10 flex items-center justify-center transition-all duration-300 transform " + (isMouseOver ? "" : "translate-x-full")} >
                    <button
                        onClick={fn}
                        className="bg-nice-red p-3 rounded-full text-gray-200 text-xl flex justify-center items-center">
                        <BsFillPlayFill />
                    </button>
                </span>
                <img
                    src={imageUrl(img)} alt={episodeNumber + " episode"}
                    className="object-cover w-full h-full mx-auto"
                />
            </div>
        </div>
    )
}

export default EpisodeBox
