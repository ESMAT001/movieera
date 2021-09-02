import Link from 'next/link'
import MovieInfoBox from '../utils/MovieInfoBox'

function Main({ movies, error, movieType, seeAllBtn }) {
    return (
        <main className="bg-black-light py-20 px-10 sm:px-14 md:px-20 lg:px-32 lg:py-32 xl:px-48 xl:py-44 2xl:px-72 w-full mx-auto z-10">
            <div className="">
                <div className="flex justify-between pb-10">
                    <h1 className="w-4/6 text-gray-200 font-opacity-95 text-xl sm:text-2xl lg:text-3xl font-light font-movieNameFont ">{movieType}</h1>
                    {seeAllBtn && <Link href="/movies">
                        <a className="text-red-500 w-2/6 text-sm text-right">
                            See All
                        </a>
                    </Link>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-content-center gap-4 sm:gap-6 md:gap-8">
                    {
                        movies && movies.map((movie, index) => (
                            <MovieInfoBox key={index} movie={movie} />
                        ))
                    }
                </div>
                {error && <h1 className="text-red-400">{error}</h1>}
            </div>
            <div></div>
        </main>
    )
}

export default Main

Main.defaultProps = {
    movies: [],
    error: null,
    movieType: "Trending Movies",
    seeAllBtn: false
}
