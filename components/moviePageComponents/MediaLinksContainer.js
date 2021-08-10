import { useState } from 'react'
import { BsPlus } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import {getMediaLangTypeName} from "../../functions/functions"

function MediaLinksContainer({ mediaLangType }) {

    function correctQualityName(quality) {
        if (quality[0] === "k" || quality[0] === "K") {
            return quality.substring(1);
        }
        return quality;
    }


    const [isContentVisible, setIsContentVisible] = useState(false)


    return (
        <div className="w-full flex flex-col text-white">
            <div className="flex justify-between items-center px-4 py-3 sm:py-4 bg-nice-red shadow-xl rounded">
                <p className="capitalize text-sm sm:text-base">{getMediaLangTypeName(mediaLangType[0])}</p>
                <button onClick={() => setIsContentVisible(prev => !prev)}>
                    <BsPlus
                        className={"text-2xl cursor-pointer transition-all duration-200 transform " + (isContentVisible ? "rotate-45" : "")} />
                </button>


            </div>
            <ul
                style={{
                    backgroundColor: '#13171c',
                }}
                className={"transition-all duration-300 px-4 py-4 sm:px-10 flex flex-col mt-4 rounded shadow-xl divide-y divide-gray-400 divide-opacity-25 " + (isContentVisible ? "" : "hidden")}>
                {
                    mediaLangType[1].map((movieQuality, index) => {
                        return (
                            <li
                                className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between items-center py-3"
                                key={"movieQuality" + index}>
                                <p className="text-sm text-gray-200">{correctQualityName(movieQuality.quality)} :</p>
                                <div className="flex space-x-2">
                                    <a
                                        href={movieQuality.downloadLinks}
                                        target="_blank"
                                        rel="noreferrer"
                                        download={true}
                                        className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none flex items-center justify-center gap-1 outline-none tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2 px-4 text-xs leading-normal text-white cursor-pointer">
                                        <FaDownload className="text-md mr-1" />Download
                                    </a>
                                </div>
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default MediaLinksContainer
