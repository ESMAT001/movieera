import React from 'react'
import Link from 'next/link'

function Pagenation({ currentPage, endPage }) {

    let endPageCount = currentPage + 3 > endPage ? currentPage + (endPage - currentPage) : currentPage + 3

    let pages = [];
    for (let page = currentPage === 1 ? currentPage : currentPage - 1;
        page <= endPageCount;
        page++) pages.push(page);
        
    return (
        <ul className="flex m-5 space-x-2">
            {currentPage !== 1 && currentPage - 1 !== 1 &&
                <>
                    <li className="bg-blue-400 text-white px-2 py-1">
                        <Link href={"/movies/page/1"}>
                            <a>1</a>
                        </Link>
                    </li>
                    <li>...</li>
                </>}


            {pages.map((page) => <li
                key={page}
                className={(page === currentPage ? "bg-red-400" : "bg-blue-400") + " text-white px-2 py-1"}>
                <Link href={"/movies/page/" + page}>
                    <a>{page}</a>
                </Link>
            </li>)}

            { !pages.includes(endPage) &&
                <>
                    <li>...</li>
                    <li className="bg-blue-400 text-white px-2 py-1">
                        <Link href={"/movies/page/" + endPage}>
                            <a>{endPage}</a>
                        </Link>
                    </li>
                </>}


        </ul>
    )
}

export default Pagenation
