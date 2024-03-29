import Pagenation from './Pagenation'
import Media from './Media'
import CustomHead from './utils/CustomHead'
import { websiteUrl, createMovieNameForUrl } from '../utils'
function Movies({ data, error }) {
    const { results, page,  } = data
    return (
        <main className="flex flex-col">
            <CustomHead
                title={`Movies - Page ${page} | Movieera`}
                description={"Download or Watch latest movies for free"}
                url={websiteUrl + "movies/page/" + page}
            >
                <link rel="canonical" href={websiteUrl + "movies/page/" + page} />
            </CustomHead>
            <Media movies={results} movieType="Movies" topPadding={true} />
            {error && <h1 className="text-red-400">{error}</h1>}
            {/* cool ads */}
            {/* <div className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200" id="container-39affabc185ccad0c249c41062d20da9"></div> */}
            {/*cool ad */}
            <Pagenation currentPage={page} endPage={400} />
        </main>
    )
}

export default Movies
