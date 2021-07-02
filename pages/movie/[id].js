import React from 'react'
import { callApi } from '../../functions/functions'

function index({ movie, error }) {
    console.log(movie)
    return (
        <div>
            movie <br /> 
            {movie.title} {movie.id}
        </div>
    )
}

export default index

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









