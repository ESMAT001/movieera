import React from 'react'
import { callApi } from '../../../functions/functions'
import Movies from '../../../components/movies'
import {baseUrl} from '../../../utils'


function index({ data, error }) {
    return <Movies data={data} error={error} />
}

export default index


export async function getStaticProps(context) {
    const { pageNumber } = context.params
    const [data, error] = await callApi(baseUrl+"/api/movies?page=" + pageNumber)
    const revalidate = parseInt(86400 * 2)
    return {
        props: { data, error },
        revalidate
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi(baseUrl+"/api/movies")

    if (error) {
        console.log(error)
        return []
    }

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

