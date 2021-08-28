import { useContext } from 'react'
import SavedMoviesContext from '../utils/SavedMoviesContext'
import Image from 'next/image'
import { placeholderImgUrl } from '../../utils'
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link'

function HeartedMovies() {
    const { savedMovies, setSavedMovies } = useContext(SavedMoviesContext)
    function removeMovie(movie) {
        setSavedMovies(prev => prev.filter(m => m.title !== movie.title))
    }
    return (
        <div
            className="absolute top-10 -right-14 sm:right-0 bg-black-dark w-64 md:w-80 text-gray-300 rounded shadow-xl transition-all duration-300 jelly-shake max-h-96 overflow-scroll">
            <p className="px-4 py-3 bg-black-light text-sm">Saved Movies</p>
            <ul className="px-4 divide-gray-400 divide-y divide-opacity-50">
                {
                    savedMovies.length === 0 && <li className="py-3 text-gray-400 text-center text-sm">
                        No Movie!
                    </li>
                }
                {
                    savedMovies && savedMovies.map((movie, index) => (
                        <li className="py-3 flex justify-between items-center space-x-2" key={movie.id + "savedMovies" + index}>
                            <Link href={"/movie/" + movie.id}>
                                <a className="flex justify-between items-center w-full">
                                    <p className="w-8/12 text-xs sm:text-sm">{movie.title}</p>
                                    <div className="w-3/12">
                                        <Image
                                            src={placeholderImgUrl(movie.poster_path)}
                                            alt={movie.title + " movie small poster image"}
                                            width={250}
                                            height={350}
                                            layout="responsive"
                                        />
                                    </div>
                                </a>
                            </Link>
                            <button
                                className="bg-nice-red p-1.5 text-gray-200 flex justify-between items-center rounded-sm"
                                onClick={() => removeMovie(movie)}>
                                <AiOutlineClose className="text-xl" />
                            </button>


                        </li>))
                }
            </ul>
        </div>
    )
}

export default HeartedMovies
