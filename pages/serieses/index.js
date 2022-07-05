import { callApi } from '../../functions/functions'
import Serieses from '../../components/Serieses'



function index({ data, error }) {
    return <Serieses data={data} error={error} />
}

export default index


export async function getStaticProps() {
    const [data, error] = await callApi(`https://api.themoviedb.org/3/tv/popular?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=1`)
    if (data?.results?.length > 0) {
        data.results = data.results.map(series => {
            return {
                ...series,
                title: series.name
            }
        })
    }
    const revalidate = parseInt(86400 * 2)
    return {
        props: { data, error },
        revalidate
    }
}
