import Link from 'next/link'
import { imageUrl } from '../../utils'
function DataList({ suggestions }) {
    console.log(suggestions)
    return (
        <div className="absolute bg-black-light  py-2 flex flex-col space-y-3 overflow-y-scroll h-96 jelly-shake w-full">
            {
                suggestions.map((suggestion, index) => {
                    return (
                        <Link href={"/movie/" + suggestion.id}>
                            <a key={suggestion.title + suggestion.id + index + "ss"}
                                className="flex flex-row items-center px-4 text-sm hover:bg-black-dark transition duration-300"
                            >
                                <img src={imageUrl(suggestion.poster_path)} className="w-10 mr-4" />
                                {suggestion.title}
                            </a>
                        </Link>

                    )
                })
            }
        </div>
    )
}

export default DataList
