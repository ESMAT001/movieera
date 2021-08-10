import { BsX } from "react-icons/bs";
function Modal({ close, children }) {
    return (
        <div className="fixed backdrop-filter backdrop-blur top-0 left-0 w-screen h-screen overflow-hidden bg-black bg-opacity-90 z-40 flex justify-center items-center">
            <div className="w-full sm:w-4/6 flex flex-col h-full text-white">
                <div className="py-3 flex justify-end px-4 z-20 sm:z-0">
                    <button
                        onClick={close}
                        className="text-white p-1 rounded-full flex justify-center items-center bg-nice-red">
                        <BsX className="text-3xl font-bold" />
                    </button>
                </div>

                <div className="w-full h-full flex flex-col justify-center -mt-20 sm:mt-0 z-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
