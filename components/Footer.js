import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
    const links = [
        "Action"
        ,
        "Adventure"
        ,
        "Animation"
        ,
        "Comedy"
        ,
        "Crime"
        ,
        "Documentary"
        ,
        "Drama"
        ,
        "Family"
        ,
        "Fantasy"
        ,
        "History"
        ,
        "Horror"
        ,
        "Music"
        ,
        "Mystery"
        ,
        "Romance"
        ,
        "Science Fiction"
        ,
        "TV Movie"
        ,
        "Thriller"
        ,
        "War"
        ,
        "Western"
    ]
    return (
        <footer className="bg-black-dark flex flex-col space-y-20 px-10 py-16 sm:px-14 md:px-20 lg:px-32 xl:px-48 2xl:px-72" >
            <div className="flex flex-col items-center sm:items-start sm:justify-between space-y-16 sm:flex-row sm:space-y-0 ">
                <div className="relative w-44 h-11 flex justify-center sm:justify-start">
                    <Link href="/">
                        <a >
                            <Image src="/static/img/logo.png" alt="logo" layout="fill" />
                        </a>
                    </Link>
                </div>
                <div className="grid grid-cols-4 justify-items-center text-center gap-5 text-xs text-gray-500 text-opacity-90">
                    <Link href={`/movies`} key={-1 + "footer"}>
                        <a >
                            Latest
                        </a>
                    </Link>
                    {
                        links.map((link, index) => {
                            return (
                                <Link href={`/genre/${link}/page/1`} key={index + "footer"}>
                                    <a >
                                        {link}
                                    </a>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 ">
                <div className='text-xs text-gray-500 text-center text-opacity-90 flex flex-col sm:flex-row sm:space-x-1'>
                    <p> Copyright © {new Date().getFullYear()} <Link href="/">
                        <a >
                            MOVIEERA.
                        </a>
                    </Link></p>
                    <p>All rights reserved.</p>
                </div>
                <div className="flex text-gray-500 text-2xl justify-center space-x-6">
                    <Link href="https://fb.me/movieeraapp" target="_blank">
                        <a>
                            <FaFacebookSquare />
                        </a>
                    </Link>
                    <Link href="/">
                        <a >
                            <AiOutlineInstagram />
                        </a>
                    </Link>
                    <Link href="/">
                        <a >
                            <AiOutlineTwitter />
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
