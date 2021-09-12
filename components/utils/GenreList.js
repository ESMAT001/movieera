import { useState ,memo} from 'react'
import { genresList } from '../../utils'
import Link from 'next/link'
function GenreList({ handleClick }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <li className="w-40">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="flex justify-between w-full items-center rounded bg-nice-red  px-3 py-1 focus:outline-none">
                <span className="text-base" >Genres</span> <span className={`transition-all duration-300 transform  ${isOpen?"rotate-45":""}`} >+</span></button>
            {isOpen && <ul className="flex flex-col space-y-1 divide-y divide-nice-red  h-72 jelly-shake border-2 border-nice-red mt-2 px-2 py-1 overflow-scroll">
                {
                    genresList().map((genre) => {
                        return <li key={genre.id + "genre"} className="w-full flex justify-end py-1 cursor-pointer"
                            onClick={() => handleClick(`/genre/${genre.name.toLowerCase()}/page/1`)}
                        >
                            {/* <Link href={`/genre/${genre.name.toLowerCase()}/page/1`} > */}
                            <p className="capitalize text-sm px-1">{genre.name}</p>
                            {/* </Link> */}
                        </li>
                    })
                }
            </ul>}
        </li>
    )
}

export default memo(GenreList)
