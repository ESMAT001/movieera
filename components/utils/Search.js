import { useState, useEffect } from 'react'
import { apiUrl } from '../../utils'
import { callApi } from '../../functions/functions'
import DataList from './DataList'
function Search() {
    const [searchVal, setSearchVal] = useState("")
    const [suggestions, setSuggestions] = useState([])
    async function search() {
        let [data, error] = await callApi(apiUrl + "/search?type=s&query=" + searchVal)
        if (data && !error && searchVal !== "") {
            console.log(data)
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
        <form onSubmit={e => e.preventDefault()} className="relative flex w-5/6 sm:w-auto ">
            <input
                className="outline-none text-gray-700 bg-gray-100 px-2 py-2 rounded-l w-full"
                list="suggestions"
                type="text"
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                placeholder="Name, imdb id" />
            {
                suggestions.length > 0 && <DataList suggestions={suggestions} />
            }
            <button
                type="submit"
                className="py-2 px-3 rounded-r antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none gap-1 outline-none tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-sm leading-normal text-white "
            >Search</button>
        </form>
    )
}

export default Search
