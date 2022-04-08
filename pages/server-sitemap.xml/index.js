import { getServerSideSitemap } from 'next-sitemap'
import { websiteUrl } from '../../utils'

const createFields = (results) => {
    return results.map(movie => {
        return {
            url: `${websiteUrl}movie/${movie.id}`,
            changefreq: 'daily',
            priority: 0.8,
            lastmod: movie.inserted_at || new Date().toISOString(),
        }
    })
}

const fetchEndPoints = async () => {
    const fields = []
    const result = await fetch(`https://api-movieera.herokuapp.com/v1/movies?page=1`)
    const { totalPages, results } = await result.json()
    fields.push(...createFields(results))
    for (let i = 2; i <= 4; i++) {
        const result = await fetch(`https://api-movieera.herokuapp.com/v1/movies?page=${i}`)
        const { results } = await result.json()
        fields.push(...createFields(results))
    }
    return fields
}

export const getServerSideProps = async (ctx) => {

    const fields = await fetchEndPoints()

    return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() { }