import React, { useState, useEffect, useContext } from 'react'
import SavedMoviesContext from '../utils/SavedMoviesContext'
import Image from 'next/image'
import { placeholderImgUrl } from '../../utils'

function HeartedMovies() {
    const { savedMovies, setSavedMovies } = useContext(SavedMoviesContext)
    function removeMovie(movie) {
        setSavedMovies(prev => prev.filter(m => m.title !== movie.title))
    }
    return (
        <div
            className="absolute top-10 -right-14 sm:right-0 bg-black-dark w-64 md:w-80 text-gray-300 rounded shadow-xl transition-all duration-300">
            <p className="px-4 py-3 bg-black-light text-sm">Saved Movies</p>
            <ul className="px-4 py-4 space-y-4 divide-gray-400 divide-y divide-opacity-50">
                {
                    savedMovies && savedMovies.map((movie, index) => (
                        <li className="flex justify-between items-center" key={"savedMovies" + index}>
                            <p>{movie.title}</p>
                            <div className="w-2/12">
                                <Image
                                    src={placeholderImgUrl(movie.poster_path)}
                                    alt={movie.title+" movie small poster image"}
                                    width={250}
                                    height={350}
                                    layout="responsive"
                                />
                            </div>
                            <button
                                className="bg-nice-red p-2"
                                onClick={() => removeMovie(movie)}>
                                x
                            </button>
                        </li>))
                }
            </ul>
        </div>
    )
}

export default HeartedMovies
