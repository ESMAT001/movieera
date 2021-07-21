import React from 'react'
import { callApi } from '../../functions/functions'
import Movies from '../../components/movies'
import {baseUrl} from '../../utils'


function index({ data, error }) {
    return <Movies data={data} error={error} />
}

export default index


export async function getStaticProps() {
    const [data, error] = await callApi(baseUrl+"/api/movies")
    const revalidate = parseInt(86400 * 2)
    return {
        props: { data, error },
        revalidate
    }
}
