import { getServerSideSitemap } from 'next-sitemap'
import { websiteUrl, createMovieNameForUrl } from '../../utils'

const createFields = (results) => {
    return results.map(movie => {
        return {
            loc: `${websiteUrl}series/${createMovieNameForUrl(movie.id, movie.name)}`,
            changefreq: 'daily',
            priority: 0.8,
            lastmod: movie.inserted_at && new Date(movie.inserted_at).toISOString() || new Date().toISOString(),
        }
    })
}

const fetchEndPoints = async () => {
    const fields = []
    const result = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=1`)
    const { results } = await result.json()
    fields.push(...createFields(results))
    for (let i = 2; i <= 40; i++) {
        const result = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=3d97e93f74df6d3dd759d238a7b8564c&language=en-US&page=${i}`)
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