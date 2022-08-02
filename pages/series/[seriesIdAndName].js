import { callApi, isBlackListed } from '../../functions/functions'
import { useRouter } from 'next/router'
import Series from '../../components/moviePageComponents/Series'
import Loading from '../../components/utils/Loading'
import { createMovieNameForUrl } from '../../utils'

function Index(props) {
    const router = useRouter()
    if (router.isFallback) {
        return <Loading />
    }
    return (<Series {...props} />)
}

export default Index

export async function getStaticProps(context) {
    const { seriesIdAndName } = context.params;
    const id = seriesIdAndName.split('-')[0];
    let [movie, error] = await callApi(`https://api.themoviedb.org/3/tv/${id}?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US`)

    if (movie?.seasons?.length > 0) {
        const seasons = []
        for (let index = 0; index < movie.seasons.length; index++) {
            const season = movie.seasons[index]
            const episodes = []
            for (let index2 = 1; index2 <= season.episode_count; index2++) {
                const episode = index2
                const [episodeData] = await callApi(`https://api.themoviedb.org/3/tv/${movie.id}/season/${season.season_number}/episode/${episode}?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US`)
                episodes.push({
                    episode_number: episodeData.episode_number,
                    id: episodeData.id,
                    season_number: episodeData.season_number,
                    still_path: episodeData.still_path,
                })
            }
            seasons.push({
                ...season,
                episodes
            })
        }
        movie.seasons = seasons
    }

    movie = {
        adult: movie.adult,
        backdrop_path: movie.backdrop_path,
        generes: movie.genres,
        id: movie.id,
        name: movie.name,
        original_name: movie.original_name,
        original_language: movie.original_language,
        overview: movie.overview,
        poster_path: movie.poster_path,
        seasons: movie.seasons,
        vote_average: movie.vote_average,
    }

    const recommendations = []
    const revalidate = parseInt(86400 * 2)
    return {
        props: { movie, error, recommendations },
        revalidate
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi(`https://api.themoviedb.org/3/tv/popular?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=1`)
    const { results: movies } = data;
    let paths = []

    for (let index = 0; index < movies.length; index++) {

        if (isBlackListed(movies[index].id)) continue;

        paths.push({
            params: {
                seriesIdAndName: createMovieNameForUrl(movies[index].id, movies[index].name)
            }
        })
    }

    return {
        paths,
        fallback: true
    }

}









