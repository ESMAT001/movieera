import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Humbrger from './utils/humberger-icon/Humbrger'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(false)
    return (
        <nav className="fixed w-full  top-0 text-white z-20">
            <div className="flex justify-between items-center w-full py-4 px-8">
                {/* <h1 className=" text-white text-lg font-movieNameFont leading-normal antialiased">MOVIE<span className="text-nice-red">E</span>RA</h1> */}
                <Link href="/">
                    <a className="relative w-32 h-8 lg:w-36 lg:h-9">
                        <Image src="/static/img/logo.png" alt="logo" layout="fill" />
                    </a>
                </Link>
                <span className="z-40">
                    <Humbrger handler={setIsOpen} />
                </span>
            </div>
            <span className={"z-20 filter blur-sm transform transition-all duration-300 w-full h-screen absolute right-0 top-0 bg-black bg-opacity-25 " + (isOpen ? "" : "translate-x-full")}>
            </span>
            <div className={"z-30 flex flex-col items-center  justify-start space-y-4 pt-14 shadow-xl transform transition-all duration-500 w-full sm:w-1/2 h-screen absolute right-0 top-0 bg-black-dark bg-opacity-95 " + (isOpen ? "" : "translate-x-full")}>
                <h1 className="md:hidden text-white text-lg font-movieNameFont leading-normal antialiased">MOVIE<span className="text-nice-red">E</span>RA</h1>
                <ul className="flex flex-col space-y-2 items-center text-lg">
                    <Link href="/movies" ><a onClick={handleClick}>Movies</a></Link>
                    <Link href=""><a onClick={handleClick}>Series</a></Link>
                    <Link href=""><a onClick={handleClick}>test</a></Link>
                </ul>
            </div>
        </nav >
    )
}

export default Nav
