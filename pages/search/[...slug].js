import React from 'react'
import { apiUrl } from '../../utils'
import Main from '../../components/mainPageComponents/Main'
import Pagenation from '../../components/Pagenation'
import CustomHead from '../../components/utils/CustomHead'
import { useRouter } from 'next/router'

function Query({ data, error }) {
  const router = useRouter()
  const { results, page, totalPages } = data
  const pathname = router.asPath
  return (
    <div className="flex flex-col">
      <CustomHead title={`Search results for "${router.query.slug[0]}"`} />
      <Main movies={results} movieType={`Search results for "${router.query.slug[0]}"`} />

      {
        results.length === 0 && (
          <div className="text-center pb-20">
            <h1 className="text-2xl text-gray-300">No results found!</h1>
          </div>
        )
      }

      {error && <h1 className="text-red-400">{error}</h1>}
      {
        totalPages > 1 && <Pagenation currentPage={page} endPage={totalPages} pathname={pathname} />
      }
    </div>
  )
}

export default Query

export async function getServerSideProps(context) {
  const { slug } = context.query
  let [query, temp, page = 1] = slug

  if (!query) return { notFound: true }

  try {
    page = parseInt(page)
  } catch (error) {
    return {
      notFound: true,
    }
  }

  console.log(query, temp, page)
  const res = await fetch(apiUrl + "/search?mode=full&limit=20&query=" + query + "&page=" + page)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}