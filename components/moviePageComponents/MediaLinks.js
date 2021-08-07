import React from 'react'
import MediaLinksContainer from './MediaLinksContainer'

function MediaLinks({ movie }) {
    // console.log('MediaLinks', movie)
    const movieMediaLangTypes = []
    const { download_links } = movie
    for (const key in download_links) {
        if (Object.hasOwnProperty.call(download_links, key)) {
            movieMediaLangTypes.push([key, download_links[key]])
        }
    }
    // console.log(movieMediaLangTypes)
    return (
        <section className="mt-6 flex flex-col space-y-4" id="downloadLinks">
            <h3 className="text-base">Download Links :</h3>
            {
                movieMediaLangTypes.map((mediaLangType, index) => {
                    return (
                        <MediaLinksContainer mediaLangType={mediaLangType} key={"media"+index}/>
                    )
                }
                )
            }
        </section>
    )
}

export default MediaLinks
