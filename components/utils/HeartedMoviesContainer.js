import React, { useState } from 'react'
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import HeartedMovies from './HeartedMovies';
function HeartedMoviesContainer() {
    const [isHeartBtnClicked, setHeartBtnClicked] = useState(false)
    function handleHeartClick() {
        setHeartBtnClicked(prev => !prev)
    }
    return (
        <div className="z-30 relative">
            <button 
            onBlur={handleHeartClick}
            onClick={handleHeartClick} className="text-gray-300 text-xl  transition-all duration-300 cursor-pointer flex justify-end items-start">
                {
                    isHeartBtnClicked ?
                        <BsFillHeartFill className="text-nice-red" /> :
                        <BsHeart />
                }
            </button>
            {isHeartBtnClicked && <HeartedMovies />}
        </div>
    )
}

export default HeartedMoviesContainer
