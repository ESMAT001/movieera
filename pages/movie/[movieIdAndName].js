import { callApi } from '../../functions/functions'
import { useRouter } from 'next/router'
import Movie from '../../components/moviePageComponents/Movie'
import Loading from '../../components/utils/Loading'
import { apiUrl, createMovieNameForUrl } from '../../utils'

function Index(props) {
    const router = useRouter()
    console.log(props)
    if (router.isFallback) {
        return <Loading />
    }
    return (<Movie {...props} />)
}

export default Index

export async function getStaticProps(context) {
    const { movieIdAndName } = context.params;
    const id = movieIdAndName.split('-')[0];
    const [movie, error] = await callApi(`https://api.themoviedb.org/3/movie/${id}?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&append_to_response=videos,images`)
    const [recommendations, error2] = await callApi(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=1`)
    const revalidate = parseInt(86400 / 8)
    return {
        props: { movie, error, recommendations },
        revalidate
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi(`https://api.themoviedb.org/3/movie/popular?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=1`)
    const { results: movies } = data;
    let paths = []

    for (let index = 0; index < movies.length; index++) {
        paths.push({
            params: {
                movieIdAndName: createMovieNameForUrl(movies[index].id, movies[index].title)
            }
        })
    }

    return {
        paths,
        fallback: true
    }

}









