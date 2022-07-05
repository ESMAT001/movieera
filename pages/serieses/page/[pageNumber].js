import { callApi } from '../../../functions/functions'
import Serieses from '../../../components/Serieses'
import { apiUrl } from '../../../utils'


function index({ data, error }) {
    console.log(data)
    return <Serieses data={data} error={error} />
    // return <h1>hi</h1>
}


export default index


export async function getStaticProps(context) {
    const { pageNumber } = context.params
    const [data, error] = await callApi(`https://api.themoviedb.org/3/tv/popular?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=` + pageNumber)
    const revalidate = parseInt(86400 * 2)
    if (data?.results?.length > 0) {
        data.results = data.results.map(series => {
            return {
                ...series,
                title: series.original_name
            }
        })
        data.total_pages = data.total_pages > 500 ? 500 : data.total_pages;
    }
    return {
        props: { data, error },
        revalidate
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi(`https://api.themoviedb.org/3/tv/popular?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=1`)
    console.log(data.total_pages)
    if (error) {
        console.log(error)
        return []
    }

    let paths = [];
    for (let index = 1; index <= data.total_pages; index++) {
        paths.push({
            params: { pageNumber: index.toString() }
        })
    }

    return {
        paths,
        fallback: false
    }

}

