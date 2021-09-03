import Pagenation from './Pagenation'
import Main from './mainPageComponents/Main'
import CustomHead from './utils/CustomHead'
function Movies({ data, error }) {
    const { results, page, totalPages } = data
    return (
        <div className="flex flex-col">
            <CustomHead title="Movies" />
            <Main movies={results} />
            {error && <h1 className="text-red-400">{error}</h1>}
            <Pagenation currentPage={page} endPage={totalPages} />
        </div>
    )
}

export default Movies
