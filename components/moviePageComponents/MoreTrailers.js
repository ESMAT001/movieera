import { useState, memo } from 'react'
import { BsArrowDown } from "react-icons/bs";
import TrailerBox from './TrailerBox';
function MoreTrailers({ videos, title, fn }) {
    const [showTrailers, setShowTrailers] = useState(false)
    return (
        <div>
            <button
                onClick={() => setShowTrailers(prev => !prev)}
                className="my-12 mx-auto  antialiased flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-gray-400">
                <BsArrowDown
                    className={"text-gray-200 text-xl transition-all duration-300 transform " + (showTrailers ? " rotate-180" : "")}
                /> Show {showTrailers ? "Less" : "More"} Trailers
            </button>
            {showTrailers && <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto transition-all duration-300">
                {videos.map(video => (
                    <TrailerBox
                        key={video.id}
                        videoKey={video.key}
                        title={title}
                        fn={fn}
                    />
                ))}
            </div>}
        </div>
    )
}

export default memo(MoreTrailers)
