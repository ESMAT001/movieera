import { callApi, filterBlackListedMedia,filterRomanceMedia } from '../../functions/functions'
import Movies from '../../components/Movies'
import { apiUrl } from '../../utils'


function index({ data, error }) {
    return <Movies data={data} error={error} />
}

export default index


export async function getStaticProps() {
    const [data, error] = await callApi("https://api.themoviedb.org/3/trending/movie/day?api_key=3d97e93f74df6d3dd759d238a7b8564c")
    data.results = filterRomanceMedia(filterBlackListedMedia(data.results))
    const revalidate = parseInt(86400 / 4)
    return {
        props: { data, error },
        revalidate
    }
}
