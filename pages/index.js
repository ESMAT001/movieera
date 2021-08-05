import Image from 'next/image'
import Link from 'next/link'
import Main from '../components/mainPageComponents/Main'
import CustomHead from '../components/utils/CustomHead'
import Header from '../components/Header'
import CustomHeader from '../components/mainPageComponents/CustomHeader'
import { apiUrl } from '../utils'


import { callApi } from '../functions/functions'

export default function Home({ movies, error }) {
  console.log(movies)
  return (
    <>
      <CustomHead />
      <CustomHeader movies={movies.slice(0,6)} />
      <Main movies={movies.slice(6)} error={error}/>
    </>

  )
}

export async function getStaticProps() {

  const revalidate = parseInt(86400 / 4)

  const [movies, error] = await callApi(apiUrl + "/trending")


  return {
    props: { movies, error },
    revalidate
  }
}