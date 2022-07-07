import { useEffect } from 'react'
import { BsX } from "react-icons/bs";
import { useScrollLock } from '@mantine/hooks';
function Modal({ close, children }) {
    const [scrollLocked, setScrollLocked] = useScrollLock();
    useEffect(() => {
        setScrollLocked(true);
        return () => setScrollLocked(false);
    }, [setScrollLocked]);
    return (
        <div className="fixed backdrop-filter backdrop-blur top-0 left-0 w-screen h-screen overflow-hidden bg-black bg-opacity-90 z-40 flex justify-center items-center">
            <div className="w-full flex flex-col justify-center h-full text-white">
                <button
                    onClick={close}
                    className="fixed z-10 right-8 top-8 shadow-lg hover:shadow-2xl hover:scale-125 hover:opacity-100 active:scale-90 active:opacity-100 transition duration-300 text-white p-1 rounded-full flex justify-center items-center bg-nice-red opacity-40">
                    <BsX className="text-xl font-bold" />
                </button>
                <div className="w-screen h-full flex flex-col justify-center -mt-20 sm:mt-0 z-9">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
