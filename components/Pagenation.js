import React from 'react'

function Pagenation({ currentPage, endPage }) {
    let pages = [];
    for (let page = currentPage; page <= currentPage + 5; page++) pages.push(page);
    return (
        <ul>
            {pages.map((page) => <li key={page}>{page}</li>)}
            <li>...</li>
            <li>{endPage}</li>
        </ul>
    )
}

export default Pagenation
