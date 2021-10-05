import Link from 'next/link'
import { BiArrowBack } from "react-icons/bi";

function Custom404() {
    return (
        <div className="w-full h-screen text-white  flex flex-col justify-center items-center text-center space-y-12">
            <h1 className="font-movieNameFont text-3xl md:text-4xl lg:text-5xl">4<span className="text-nice-red font-bold" >0</span>4 Not Found!</h1>
            <Link href="/">
                <a className='bg-nice-red px-4 py-2 rounded-lg antialised shadow-lg hover:bg-red-500 transition duration-300 flex items-center'>
                   <BiArrowBack className="text-xl mr-2"/> Back To Home
                </a>
            </Link>
        </div>
    )
}

export default Custom404
