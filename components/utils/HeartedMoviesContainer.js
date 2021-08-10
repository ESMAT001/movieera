import { useState } from 'react'
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import HeartedMovies from './HeartedMovies';
function HeartedMoviesContainer() {
    const [isNavHeartBtnClicked, setNavHeartBtnClicked] = useState(false)
    const handleHeartClick = () => setNavHeartBtnClicked(prev => !prev)
    return (
        <div
            className="z-30 relative">
            <button
                onClick={handleHeartClick} className="text-gray-300 text-xl  transition-all duration-300 cursor-pointer flex justify-end items-start">
                {
                    isNavHeartBtnClicked ?
                        <BsFillHeartFill className="text-nice-red" /> :
                        <BsHeart />
                }
            </button>
            {isNavHeartBtnClicked && <HeartedMovies />}
        </div>
    )
}

export default HeartedMoviesContainer
