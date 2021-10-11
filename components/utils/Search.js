import { useState, useEffect, memo } from 'react'
import { apiUrl } from '../../utils'
import { callApi } from '../../functions/functions'
import DataList from './DataList'
import { useRouter } from 'next/router'
import { useNavContext } from '../context/NavContext'
import { BiSearchAlt } from 'react-icons/bi'
function Search() {
    const router = useRouter()
    const [isNavOpen, setIsNavOpen] = useNavContext()
    const [searchVal, setSearchVal] = useState("")
    const [suggestions, setSuggestions] = useState([])
    async function handleClick(link) {
        await router.push(link)
        setIsNavOpen(prev => !prev)
    }
    async function search() {
        let [data, error] = await callApi(apiUrl + "/search?limit=7&query=" + searchVal)
        if (data && !error && searchVal !== "") {
            setSuggestions(data)
        }
    }
    useEffect(() => {
        if (searchVal === "" && suggestions.length > 0) setSuggestions([]);
    }, [suggestions])
    useEffect(() => {
        if (searchVal !== "") {
            setSuggestions([])
            search()
        } else {
            setSuggestions([])
        }
    }, [searchVal])
    return (
        <form onSubmit={e => e.preventDefault()} className="relative flex w-5/6 sm:w-auto">
            <input
                className="outline-none text-gray-400 bg-transparent px-3 py-1 w-full border-b-2 border-nice-red mr-4"
                list="suggestions"
                type="text"
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                placeholder="Enter movie name or id" />
            {
                suggestions.length > 0 && <DataList suggestions={suggestions} handleClick={handleClick} />
            }

            <button
                onClick={() => { if (searchVal !== "") handleClick("/search/" + searchVal) }}
                type="submit"
                className="rounded antialiased bg-nice-red border-2 font-semibold border-nice-red hover:bg-red-600 hover:border-red-600 focus:outline-none gap-1 outline-none tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-1 px-3 text-sm  text-white flex items-center"
            >Search <BiSearchAlt className="text-lg" /> </button>

        </form>
    )
}

export default memo(Search)
