import React from 'react'
import Pagenation from './Pagenation'

function Movies({ data, error }) {
    const { results, page, totalPages } = data
    return (
        <div>
            Movie
            {results && results.map((movie, i) => <h1 key={i} >{movie.title}</h1>)}
            {error && <h1 className="text-red-400">{error}</h1>}
            <Pagenation currentPage={page} endPage={totalPages} />
        </div>
    )
}

export default Movies
