import React from 'react'
import { callApi ,filterBlackListedMedia,filterRomanceMedia} from '../../../functions/functions'
import Movies from '../../../components/Movies'
import { apiUrl } from '../../../utils'


function index({ data, error }) {
    console.log(data)
    return <Movies data={data} error={error} />
}

export default index


export async function getStaticProps(context) {
    const { pageNumber } = context.params
    const [data, error] = await callApi(`https://api.themoviedb.org/3/trending/movie/day?api_key=3d97e93f74df6d3dd759d238a7b8564c&page=${pageNumber}`)
    data.results = filterRomanceMedia(filterBlackListedMedia(data.results))
    const revalidate = parseInt(86400 * 2)
    return {
        props: { data, error },
        revalidate
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi("https://api.themoviedb.org/3/trending/movie/day?api_key=3d97e93f74df6d3dd759d238a7b8564c")

    if (error) {
        console.log(error)
        return []
    }

    let paths = [];
    for (let index = 1; index <= 400; index++) {
        paths.push({
            params: { pageNumber: index.toString() }
        })
    }

    return {
        paths,
        fallback: false
    }

}

