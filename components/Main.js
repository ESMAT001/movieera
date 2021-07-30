import React from 'react'
import Link from 'next/link'

function Main({ movies, error }) {
    return (
        <main className="bg-black-light py-20 px-10 sm:px-14 md:px-20 lg:px-32 lg:py-32 xl:px-48 xl:py-44  z-10">
            <div className="">
                <div className="flex justify-between pb-10">
                    <h1 className="w-4/6 text-gray-200 font-opacity-95 text-xl sm:text-2xl lg:text-3xl font-light font-movieNameFont ">Trending Movies</h1>
                    <Link href="/movies">
                        <a className="text-red-500 w-2/6 text-sm text-right">
                            See All
                        </a>
                    </Link>
                </div>
            {movies && movies.map((movie, i) => {
                return (<h1 className="font-semibold text-purple-700" key={i}>{movie.original_title + " " + movie.backdrop_path}</h1>)
            })}

            {error && <h1 className="text-red-400">{error}</h1>}
            </div>
          <div></div>
        </main>
    )
}

export default Main
