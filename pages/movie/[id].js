import React from 'react'
import { callApi } from '../../functions/functions'
import { useRouter } from 'next/router'
import Movie from '../../components/movie'
import Loading from '../../components/utils/Loading'


function Index(props) {
    const router = useRouter()
    if (router.isFallback) {
        return <Loading/>
    }
    return (<Movie {...props} />)
}

export default Index

export async function getStaticProps(context) {
    const { id } = context.params
    const [movie, error] = await callApi("http://localhost:3000/api/movie?id=" + id)

    return {
        props: { movie, error }
    }
}

export async function getStaticPaths() {
    const [data, error] = await callApi("http://localhost:3000/api/movies")
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









