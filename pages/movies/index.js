import React from 'react'
import { callApi } from '../../functions/functions'
import Movies from '../../components/movies'

function index({ data, error }) {
    return <Movies data={data} error={error} />
}

export default index


export async function getStaticProps() {
    const [data, error] = await callApi("http://localhost:3000/api/movies")
    const revalidate = parseInt(86400 * 2)
    return {
        props: { data, error },
        revalidate
    }
}
