import React from 'react'

function Modal({ close, videoKey }) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black bg-opacity-90 z-40 flex justify-center items-center">
            <div className="w-full sm:w-4/6 flex flex-col h-full bg-nice-red text-white">
                <div className="py-5">

                    <button className="text-white" onClick={close}> close </button>
                </div>

                <div className="w-full h-full">
                    <iframe type="text/html" className="h-full w-full" src={`//www.youtube.com/embed/${videoKey}?autoplay=1&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1`} frameborder="0" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    )
}

export default Modal
