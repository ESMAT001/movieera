import { callApi } from '../../functions/functions'
import { useRouter } from 'next/router'
import Movie from '../../components/moviePageComponents/Movie'
import Loading from '../../components/utils/Loading'
import { apiUrl,createMovieNameForUrl } from '../../utils'

function Index(props) {
    const router = useRouter()
    if (router.isFallback) {
        return <Loading />
    }
    return (<Movie {...props} />)
}

export default Index

export async function getStaticProps(context) {
    const { movieIdAndName } = context.params;
    const id = movieIdAndName.split('-')[0];
    const [movie, error] = await callApi(apiUrl + "/movie?id=" + id)
    const [recommendations, error2] = await callApi(apiUrl + "/recommendations?limit=8&id=" + id)
    const revalidate = parseInt(86400 / 8)
    return {
        props: { movie, error, recommendations },
        revalidate
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi(apiUrl + "/movies")
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









