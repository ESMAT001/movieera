import Link from 'next/link'

function Pagenation({ currentPage, endPage, pathname='movies' }) {

    let endPageCount = currentPage + 3 > endPage ? currentPage + (endPage - currentPage) : currentPage + 3

    let pages = [];
    for (let page = currentPage === 1 ? currentPage : currentPage - 1;
        page <= endPageCount;
        page++) pages.push(page);

    return (
        <ul className="flex m-5 space-x-2 mx-auto text-nice-red font-semibold">
            {currentPage !== 1 && currentPage - 1 !== 1 &&
                <>
                    <li className="bg-black-dark border-2 border-nice-red rounded cursor-pointer hover:bg-nice-red hover:text-white transition duration-300  px-2 py-1">
                        <Link href={pathname + "/page/1"}>
                            <a>1</a>
                        </Link>
                    </li>
                    <li className="font-bold text-lg">. . .</li>
                </>}


            {pages.map((page) => <li
                key={page}
                className={(page === currentPage ? "bg-nice-red text-white" : "bg-black-dark hover:bg-nice-red hover:text-white") + "  border-2 border-nice-red rounded cursor-pointer transition duration-300  px-2 py-1"}>
                <Link href={pathname + "/page/" + page}>
                    <a>{page}</a>
                </Link>
            </li>)}

            {!pages.includes(endPage) &&
                <>
                    <li className="font-bold text-lg">. . .</li>
                    <li className="bg-black-dark border-2 border-nice-red rounded cursor-pointer hover:bg-nice-red hover:text-white transition duration-300  px-2 py-1">
                        <Link href={pathname + "/page/" + endPage}>
                            <a>{endPage}</a>
                        </Link>
                    </li>
                </>}
        </ul>
    )
}

export default Pagenation
