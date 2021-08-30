import Pagenation from './Pagenation'
import Link from 'next/link'
import Main from './mainPageComponents/Main'
import { result } from 'lodash'

function Movies({ data, error }) {
    console.log(data)
    const { results, page, totalPages } = data
    return (
        <div className="flex flex-col">
            <Main movies={results} />
            {error && <h1 className="text-red-400">{error}</h1>}
            <Pagenation currentPage={page} endPage={totalPages} />
        </div>
    )
}

export default Movies
