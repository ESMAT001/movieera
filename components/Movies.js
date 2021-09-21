import Pagenation from './Pagenation'
import Main from './mainPageComponents/Main'
import CustomHead from './utils/CustomHead'
function Movies({ data, error }) {
    const { results, page, totalPages } = data
    return (
        <main className="flex flex-col">
            <CustomHead title="Movies" description={"Download or Watch latest movies for free"} />
            <Main movies={results} movieType="Movies" topPadding={true} />
            {error && <h1 className="text-red-400">{error}</h1>}
            <Pagenation currentPage={page} endPage={totalPages} />
        </main>
    )
}   

export default Movies
