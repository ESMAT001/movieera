import React from 'react'

function MovieInfo({movie}) {
    return (
        <div className="sm:w-3/6 flex flex-col justify-between">
            <h2 className="text-center text-xl pb-3 font-movieNameFont">Movie Info</h2>
            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Runtime : </span>{movie.runtime} <span className="text-nice-red">MIN</span></p>
            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Release Date : </span>{movie.release_date}</p>
            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Vote average : </span>{movie.vote_average * 10 + "%"}</p>
            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Vote count : </span>{movie.vote_count}</p>
            <p className="opacity-90"><span className="sm:font-semibold text-nice-red" >Original language : </span>{movie.original_language}</p>
            <p className="opacity-90">
                <span className="sm:font-semibold text-nice-red" >Overview : </span>{movie.overview}
            </p>
        </div>
    )
}

export default MovieInfo
