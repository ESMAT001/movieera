import React from 'react'
import { imageUrl } from '../../utils'
function Bg({ bgImage }) {
    return (
        <div>
            <div
                className="h-full w-full absolute top-0 left-0 filter blur-sm bg-cover bg-center bg-no-repeat brightness-50 contrast-125 transform scale-105 transition-all duration-500 z-0"
                style={{
                    backgroundImage: `url("${imageUrl}${bgImage}")`,
                    OBackgroundSize: 'cover',
                    MozBackgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover'
                }}>
                <span className="w-full h-full absolute bg-black bg-opacity-25"> </span>
            </div>
        </div>
    )
}

export default Bg
