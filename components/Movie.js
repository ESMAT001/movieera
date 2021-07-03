import React from 'react'
import CustomHead from './utils/CustomHead'

function Movie({ movie, error }) {

    return (
        <>
            <CustomHead title={movie.title} />
            <div className="mt-20 text-white">
            <p>{movie.title}</p>
        
            </div>
        </>
    )
}

export default Movie
