import { useState } from 'react'
import { BsFillMenuButtonWideFill, BsCheckLg } from 'react-icons/bs'

function Servers({ mediaSources, mediaSrc, fn }) {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className='fixed z-10 left-10 top-8 '>
            <button
                onClick={() => setIsVisible(prev => !prev)}
                className='shadow-lg hover:shadow-2xl hover:scale-105 hover:opacity-100 active:scale-90 active:opacity-100 transition duration-300 text-white p-1 px-2 rounded  bg-nice-red opacity-40 flex justify-between items-center'>
                Servers <BsFillMenuButtonWideFill className='ml-3' />
            </button>
            {
                isVisible && <ul className='bg-black bg-opacity-75 backdrop-blur-sm p-4 mt-2 rounded shadow text-sm flex flex-col max-h-screen overflow-scroll divide-y divide-gray-700'>
                    {
                        mediaSources.map((source, i) => {
                            return <li key={i} className='p-1'>
                                <button
                                    onClick={() => {
                                        fn(source);
                                        setIsVisible(false)
                                    }}
                                    className={`w-full flex items-center justify-start space-x-2 hover:bg-nice-red hover:bg-opacity-50 p-2 transition-all duration-200`}>
                                    <span className='bg-nice-red p-1 rounded bg-opacity-50 text-xs'>
                                        {source.server} ({source.quality})
                                    </span>
                                    <span className=''>
                                        {source.title}
                                    </span>
                                    {
                                        source.url === mediaSrc && <BsCheckLg />
                                    }
                                </button>
                            </li>
                        }
                        )
                    }

                </ul>
            }
        </div>
    )
}

export default Servers