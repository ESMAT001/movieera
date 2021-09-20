import { memo } from 'react'
import { imageUrl } from '../../utils'
function DataList({ suggestions, handleClick }) {
    return (
        <div className="absolute z-10 top-12 bg-black-light  py-2 flex flex-col space-y-3 overflow-y-scroll h-96 jelly-shake w-full">
            {
                suggestions.map((suggestion, index) => {
                    return (
                        <div
                            onClick={() => handleClick("/movie/" + suggestion.id)}
                            className="flex flex-row items-center cursor-pointer px-4 text-sm hover:bg-black-dark transition duration-300"
                            key={suggestion.title + suggestion.id + index + "ss"}
                        >
                            <img src={imageUrl(suggestion.poster_path)} className="w-10 mr-4" />
                            {suggestion.title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default memo(DataList)
