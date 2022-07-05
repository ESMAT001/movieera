import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Humbrger from './utils/humberger-icon/Humbrger'
import HeartedMoviesContainer from './utils/HeartedMoviesContainer'
import Search from './utils/Search'
import { useNavContext } from './context/NavContext'
import GenreList from './utils/GenreList'
import { useRouter } from 'next/router'
import { useClickOutside } from '@mantine/hooks';


function Nav() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useNavContext()
    const [navBg, setNavBg] = useState('')

    const ref = useClickOutside(() => setIsOpen(false));


    const handleClick = async (path) => {
        await router.push(path)
        setIsOpen(false)
    }
    function changeNavBg() {
        setNavBg(window.scrollY > 110 ? 'bg-black-light' : '')
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg)
        return () => window.removeEventListener('scroll', changeNavBg)
    }, [])
   

    return (
        <nav className={"fixed w-full top-0 text-white z-20 transition-all duration-500 bg-opacity-50 " + navBg}>
            <span className={"absolute flex top-0 left-0 w-full h-full z-0  transition-all duration-500 backdrop-filter " + (navBg !== "" ? "backdrop-blur-sm" : "")}>
            </span>
            <div className="flex justify-between items-center w-full py-4 px-6">
                <Link href="/">
                    <a className="relative w-32 h-8 ">
                        <Image src="/static/img/logo.png" alt="logo" layout="fill" />
                    </a>
                </Link>
                <div className='flex justify-center items-center space-x-4'>
                    <HeartedMoviesContainer />
                    <span className="">
                        <Humbrger isOpen={isOpen} setIsOpen={setIsOpen} />
                    </span>
                </div>
            </div>
            <span className={"z-20 backdrop-filter backdrop-blur transform transition-all duration-300 w-full h-screen absolute right-0 top-0 bg-black bg-opacity-25 " + (isOpen ? "" : "translate-x-full")}>
            </span>
            <div ref={ref} className={"z-30 flex flex-col items-center  justify-start space-y-8 pt-14 shadow-xl transform transition-all duration-500 w-full sm:w-1/2 h-screen absolute right-0 top-0 bg-black-dark bg-opacity-95 " + (isOpen ? "" : "translate-x-full")}>

                <span className="fixed top-5 right-6 ">
                    <Humbrger isOpen={isOpen} setIsOpen={setIsOpen} />
                </span>

                <a className="relative w-32 h-8 lg:w-36 lg:h-9 cursor-pointer" onClick={() => handleClick("/")}>
                    <Image src="/static/img/logo.png" alt="logo" layout="fill" />
                </a>

                <Search />

                <ul className="flex flex-col space-y-2 items-center text-lg">
                    <li key="1allmovies"><Link href="/movies" ><a onClick={handleClick}>All Movies</a></Link></li>
                    <li key="1Serieses"><Link href="/serieses" ><a onClick={handleClick}>Series</a></Link></li>
                    <GenreList key="1genreList" handleClick={handleClick} />
                </ul>
            </div>
        </nav >
    )
}

export default Nav
