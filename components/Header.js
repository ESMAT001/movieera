import React from 'react'



function Header({ movies }) {
    const movie = movies[15]
    console.log(movie)
    return (
        <header className="text-white relative flex flex-col overflow-hidden" >
            <div className="h-full w-full absolute top-0 left-0 z-0 filter blur-sm bg-cover bg-left-top bg-no-repeat brightness-90 contrast-125"
                style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/w500/' + movie.backdrop_path + '")' }} >
                <span className="w-full h-full absolute bg-black bg-opacity-25"></span>
            </div>
            <div className="z-10 flex flex-col items-center">
                <div className="flex justify-between w-full py-5 px-8">
                    <h1 className="text-white text-lg font-movieNameFont leading-normal antialiased rounded-md shadow-xl px-2 py-1">MOVIE<span className="text-nice-red">E</span>RA</h1>
                    <span>E</span>
                </div>
                <div className=" w-4/6 my-10 grid grid-cols-3 justify-items-center">
                    <div className="col-span-2 justify-self-start flex flex-col justify-evenly">
                        <h2 className="text-3xl font-movieNameFont capitalize">
                            {movie.original_title}
                        </h2>
                        <p className="text-sm text-opacity-90 text-gray-200">Rating: {movie.vote_average}</p>
                        <p className="font-subMovieFont text-sm text-opacity-90 text-gray-200">Original language : {movie.original_language}</p>
                        <ul className="flex space-x-2 text-sm text-opacity-90 text-gray-200">
                            {
                                movie.genres.map((genre) => (
                                    <li key={genre.id} className="">
                                        {genre.name}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex space-x-2">
                            <button
                                className="font-semibold rounded antialiased bg-nice-red  focus:outline-none 
                            flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white  hover: focus: active: shadow-md-red hover:shadow-lg-red 
                            "
                            >Download</button>
                            <button
                                className="font-semibold rounded antialiased bg-green-400  focus:outline-none 
                            flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white  hover: focus: active: shadow-md-red hover:shadow-lg-red 
                            "
                            >Play</button>
                        </div>
                        <p className="text-sm text-opacity-90 text-gray-200">
                            Overview: {movie.overview}
                        </p>
                    </div>
                    <div className=" col-span-1">
                        <img
                            className="w-4/5 ml-auto shadow-xl hover:shadow-md transform duration-300 hover:scale-105"
                            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                    </div>
                </div>
                <div>
                    asdkfjl asdkfj a;sd
                </div>
            </div>
        </header >
    )
}

export default Header
