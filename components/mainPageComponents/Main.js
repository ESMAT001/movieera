import Link from 'next/link'
import MovieInfoBox from '../utils/MovieInfoBox'

function Main({ movies, error, movieType, seeAllBtn, topPadding, moviesGenre }) {
    return (
        <section className={`bg-black-light ${topPadding ? 'py-20 lg:py-32 xl:py-44' : 'py-6'}  px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto z-10`}>
            <div className="">
                <div className="flex justify-between items-center pb-10">
                    <h1 className="w-4/6 text-gray-200 font-opacity-95 text-xl sm:text-2xl lg:text-3xl font-light font-movieNameFont ">{movieType}</h1>
                    {seeAllBtn && <Link href={`/genre/${movieType.toLowerCase()}/page/1`}>
                        <a className="text-red-500 w-2/6 text-sm text-right">
                            See All
                        </a>
                    </Link>}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-content-center gap-4 sm:gap-6 md:gap-8">
                    {
                        movies && movies.map((movie, index) => (
                            <MovieInfoBox key={index} movie={movie} movieGenre={moviesGenre} />
                        ))
                    }
                </div>
                {error && <h1 className="text-red-400">{error}</h1>}
            </div>
            <div></div>
        </section>
    )
}

export default Main

Main.defaultProps = {
    movies: [],
    error: null,
    movieType: "Trending Movies",
    seeAllBtn: false,
    topPadding: false,
    moviesGenre: null
}
