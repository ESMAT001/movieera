import { useState } from 'react'
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import HeartedMovies from './HeartedMovies';
function HeartedMoviesContainer() {
    const [isNavHeartBtnClicked, setNavHeartBtnClicked] = useState(false)
    const [isMouseOver, setMouseOver] = useState(false)
    function handleHeartClick() {
        setNavHeartBtnClicked(prev => !prev)
    }
    return (
        <div
            // onMouseEnter={() => setMouseOver(true)}
            // onMouseLeave={() => setMouseOver(false)}
            onBlur={() => { if (!isMouseOver) handleHeartClick() }}
            className="z-30 relative">
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    console.log("clicked", e.target)
                    handleHeartClick()
                }} className="text-gray-300 text-xl  transition-all duration-300 cursor-pointer flex justify-end items-start">
                {
                    isNavHeartBtnClicked ?
                        <BsFillHeartFill className="text-nice-red" /> :
                        <BsHeart />
                }
            </button>
            {isNavHeartBtnClicked && <HeartedMovies close={handleHeartClick} />}
        </div>
    )
}

export default HeartedMoviesContainer
