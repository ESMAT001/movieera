import React from 'react'
import Link from 'next/link'

function Nav() {
    return (
        <nav className="absolute">
            navbar
            <Link href="/movies">
                <a>Movies</a>
            </Link>
        </nav>
    )
}

export default Nav
