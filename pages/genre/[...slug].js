import { apiUrl } from '../../utils'
import Media from '../../components/Media'
import Pagenation from '../../components/Pagenation'
import CustomHead from '../../components/utils/CustomHead'
import { useRouter } from 'next/router'
import Loading from '../../components/utils/Loading'
function Genre({ data, error }) {
    const router = useRouter()

    if (router.isFallback) {
        return <Loading />
    }

    const { results = [], page, totalPages } = data
    const pathname = router.asPath.split('/').slice(2, 3)[0]
    return (
        <div className="flex flex-col">
            <CustomHead
                title={pathname}
                description={`Download or Watch ${pathname} movies for free`}
                keywords={`Download ${pathname} movies, Download ${pathname} movies for free`}
            />

            <Media
                movies={results}
                movieType={`${decodeURI(pathname).toUpperCase()}`}
                topPadding={true}
                moviesGenre={decodeURI(pathname)}
            />

            {
                results.length === 0 && (
                    <div className="text-center pb-20">
                        <h1 className="text-2xl text-gray-300">No results found!</h1>
                    </div>
                )
            }

            {error && <h1 className="text-red-400">{error}</h1>}

            {/* cool ads */}
            <div className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200" id="container-39affabc185ccad0c249c41062d20da9"></div>
            {/*cool ad */}
            
            {
                totalPages > 1 && <Pagenation currentPage={page} endPage={totalPages} pathname={"genre/" + pathname} />
            }
        </div>
    )
}

export default Genre

export async function getStaticPaths() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US')
    const { genres } = await res.json()
    // Get the paths we want to pre-render based on posts
    const paths = genres.map((genre) => ({
        params: { slug: [genre.name, 'page', 1 + ""] },
    }))

    return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    let [genreName, _page, pageNumber] = params.slug
    if (!pageNumber) {
        return {
            notFound: true,
        }
    }

    try {
        pageNumber = parseInt(pageNumber)
        if (pageNumber + "" === "NaN") throw new Error("Page number is not a number");
        if (pageNumber < 1) throw new Error('Page number cannot be less than 1');
    } catch (error) {
        return {
            notFound: true,
        }
    }

    const res = await fetch(`${apiUrl}/genre?limit=20&name=${genreName}&page=${pageNumber}`)
    const data = await res.json()
    // console.log(data)
    // Pass data data to the page via props
    return { props: { data } }
}

