import React from 'react'
import { apiUrl } from '../../utils'
import Main from '../../components/mainPageComponents/Main'

function Query({ results }) {
  console.log(results)
  return (
    <div>
     <Main movies={results} movieType="Search Result" />
    </div>
  )
}

export default Query

export async function getServerSideProps(context) {
  const { slug } = context.query
  let [query, temp, page = 1] = slug
  page = parseInt(page)
  console.log(query, temp, page)
  const res = await fetch(apiUrl + "/search?limit=20&query=" + query + "&page=" + page)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { results: data }, // will be passed to the page component as props
  }
}