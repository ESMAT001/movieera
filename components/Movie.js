import React from 'react'

function Movie({ movie, error }) {
    return (
        <div>
            movie <br />
            {movie.title} {movie.id}
        </div>
    )
}

export default Movie
