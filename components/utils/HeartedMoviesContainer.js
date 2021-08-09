import React, { useState } from 'react'
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import HeartedMovies from './HeartedMovies';
function HeartedMoviesContainer() {
    const [isHeartBtnClicked, setHeartBtnClicked] = useState(false)
    const [isMouseOver, setMouseOver] = useState(false)
    function handleHeartClick() {
        setHeartBtnClicked(prev => !prev)
    }
    return (
        <div
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onBlur={() => { if (!isMouseOver) handleHeartClick() }}
            className="z-30 relative">
            <button
                onClick={handleHeartClick} className="text-gray-300 text-xl  transition-all duration-300 cursor-pointer flex justify-end items-start">
                {
                    isHeartBtnClicked ?
                        <BsFillHeartFill className="text-nice-red" /> :
                        <BsHeart />
                }
            </button>
            {isHeartBtnClicked && <HeartedMovies close={handleHeartClick} />}
        </div>
    )
}

export default HeartedMoviesContainer
