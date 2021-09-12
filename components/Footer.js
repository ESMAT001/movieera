import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
    
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
                <div className="flex flex-col justify-center space-y-4 text-xs text-gray-500 text-opacity-90">
                    <div className="flex justify-start space-x-10">
                        <Link href="/">
                            <a >
                                Movies
                            </a>
                        </Link>
                        <Link href="/">
                            <a >
                                Action
                            </a>
                        </Link>
                        <Link href="/">
                            <a >
                                Movies hi
                            </a>
                        </Link>
                    </div>
                    <div className="flex justify-start space-x-10">
                        <Link href="/">
                            <a >
                                Movies
                            </a>
                        </Link>
                        <Link href="/">
                            <a >
                                Action
                            </a>
                        </Link>
                        <Link href="/">
                            <a >
                                Movies test
                            </a>
                        </Link>
                    </div>
                    <div className="flex justify-start space-x-10">
                        <Link href="/">
                            <a >
                                Movies
                            </a>
                        </Link>
                        <Link href="/">
                            <a >
                                Action
                            </a>
                        </Link>
                        <Link href="/">
                            <a >
                                MovieERA
                            </a>
                        </Link>
                    </div>
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
                    <Link href="/">
                        <a >
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
