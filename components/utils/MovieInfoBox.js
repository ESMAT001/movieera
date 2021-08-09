import React, { useState, useEffect, useContext } from 'react'
import SavedMoviesContext from './SavedMoviesContext';
import { BsHeart, BsFillHeartFill, BsFillPlayFill } from "react-icons/bs";
import Link from 'next/link'
import MovieMoreInfo from './MovieMoreInfo';

function MovieInfoBox({ movie }) {
    const { savedMovies, setSavedMovies } = useContext(SavedMoviesContext);
    const [isHeartBtnClicked, setHeartBtnClicked] = useState(false)
    const [controlller, setController] = useState(false)
    const genre = movie.genres[0].name || "not defined"
    const id = movie.id

    function handleHeartClick() {
        setController(true)
        setHeartBtnClicked(prevState => !prevState)
    }

    useEffect(() => {
        if (isHeartBtnClicked && controlller && !savedMovies.find(mo => mo.id == id)) {
            setSavedMovies(prev => prev.concat([{
                id,
                title: movie.title,
                poster_path: movie.poster_path,
            }]))
        } else if (!isHeartBtnClicked && controlller && savedMovies.find(mo => mo.id == id)) {
            setSavedMovies(prev => prev.filter(m => m.id !== id))
        }
    }, [isHeartBtnClicked])

    useEffect(() => {
        setController(false)
        const savedMovie = savedMovies.find(m => m.id === id)
        if (savedMovie && isHeartBtnClicked == false) {
            setHeartBtnClicked(true)
        } else if (!savedMovie && isHeartBtnClicked == true) {
            setHeartBtnClicked(false)
        }
    }, [savedMovies])

    return (
        <div className="w-full flex flex-col">
            <div className="w-full ">
                <MovieMoreInfo alt={movie.title + " movie poster image"} imagePath={movie.poster_path} >
                    <Link href={"/movie/" + id}>
                        <a className="font-semibold rounded-full antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-lg transform focus:translate-y-0.5 transition-all duration-300 p-3 text-2xl leading-normal text-white">
                            <BsFillPlayFill />
                        </a>
                    </Link>
                </MovieMoreInfo>
            </div>
            <div className="py-4 flex flex-col h-full justify-between">
                <div className="flex justify-between">
                    <h3 className="text-gray-200 text-xs sm:text-sm w-4/6 capitalize">{movie.title}</h3>
                    <button
                        onClick={handleHeartClick}
                        className="text-gray-200 text-xl w-1/6 transition-all duration-300 cursor-pointer flex justify-end items-start">
                        {
                            isHeartBtnClicked ?
                                <BsFillHeartFill className="text-nice-red" /> :
                                <BsHeart />
                        }
                    </button>
                </div>
                <div className="flex flex-col py-3">
                    <p className="text-gray-600 sm:font-semibold text-xs uppercase">{movie.runtime} MIN &nbsp;&nbsp;| &nbsp;&nbsp;{genre}</p>
                    <Link href={"/movie/" + id}>
                        <a className="text-gray-600 font-bold text-lg">
                            . . .
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MovieInfoBox)
