import React from 'react'
import { callApi } from '../../../functions/functions'
import Movies from '../../../components/movies'

function index({ data, error }) {
    return <Movies data={data} error={error} />
}

export default index


export async function getStaticProps(context) {
    const { pageNumber } = context.params
    const [data, error] = await callApi("http://localhost:3000/api/movies?page=" + pageNumber)
    const revalidate = parseInt(86400 * 2)
    return {
        props: { data, error },
        revalidate
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi("http://localhost:3000/api/movies")
    let paths = [];
    for (let index = 1; index <= data.totalPages; index++) {
        paths.push({
            params: { pageNumber: index.toString() }
        })
    }

    return {
        paths,
        fallback: false
    }

}

