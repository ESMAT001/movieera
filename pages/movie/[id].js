import React from 'react'
import { callApi } from '../../functions/functions'
import { useRouter } from 'next/router'
import Movie from '../../components/moviePageComponents/Movie'
import Loading from '../../components/utils/Loading'
import { apiUrl } from '../../utils'

function Index(props) {
    const router = useRouter()
    if (router.isFallback) {
        return <Loading />
    }
    return (<Movie {...props} />)
}

export default Index

export async function getStaticProps(context) {
    const { id } = context.params
    const [movie, error] = await callApi(apiUrl + "/movie?id=" + id)
    const revalidate = parseInt(86400 * 2)
    return {
        props: { movie, error },
        revalidate
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi(apiUrl + "/movies")
    const { results: movies } = data;
    let paths = []

    for (let index = 0; index < movies.length; index++) {
        paths.push({
            params: { id: movies[index].id.toString() }
        })
    }

    return {
        paths,
        fallback: true
    }

}









