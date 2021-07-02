import React from 'react'
import Pagenation from './Pagenation'
import Link from 'next/link'

function Movies({ data, error }) {
    const { results, page, totalPages } = data
    return (
        <div className="flex flex-col">
            Movie
            {results && results.map((movie, i) => (
                <Link
                    href={"/movie/" + movie.id}
                    key={i}>
                    <a>{movie.title}</a>
                </Link>))}

            {error && <h1 className="text-red-400">{error}</h1>}
            <Pagenation currentPage={page} endPage={totalPages} />
        </div>
    )
}

export default Movies
