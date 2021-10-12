import React from 'react'
import { apiUrl } from '../../utils'
import Media from '../../components/Media'
import Pagenation from '../../components/Pagenation'
import CustomHead from '../../components/utils/CustomHead'
import { useRouter } from 'next/router'

function Query({ data, error }) {
  const router = useRouter()
  const { results, page, totalPages } = data
  const pathname = router.asPath
  return (
    <div className="flex flex-col">
      <CustomHead
        title={`Search results for "${router.query.slug[0]}"`}
        description={`Download or watch ${router.query.slug[0]} for free`}
      />
      <Media movies={results} movieType={`Search results for "${router.query.slug[0]}"`} topPadding={true} />

      {
        results.length === 0 && (
          <div className="text-center pb-20">
            <h1 className="text-2xl text-gray-300">No results found!</h1>
          </div>
        )
      }

      {error && <h1 className="text-red-400">{error}</h1>}

      {/* cool ads */}
      <div className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200" id="container-39affabc185ccad0c249c41062d20da9"></div>
      {/*cool ad */}

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