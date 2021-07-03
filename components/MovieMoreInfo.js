import React from 'react'

function MovieMoreInfo({ imagePath }) {
    return (
        <div className="relative transform transition-all duration-300 hover:scale-105" >
            <span className="w-full h-full bg-black-dark bg-opacity-50 absolute top-0 left-0 z-10" ></span>
            <img
                className="w-full ml-auto shadow-xl hover:shadow-md "
                src={"https://image.tmdb.org/t/p/w500/" + imagePath} />
        </div>
    )
}

export default MovieMoreInfo
