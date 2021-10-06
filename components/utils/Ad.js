import { useState, useEffect } from 'react'

function Ad() {
    const [size, setSize] = useState({
        width: 300,
        height: 50
    })
    useEffect(() => {
        function setBannerSize() {
            let width = 0
            let height = 0
            const windowWidth = window.innerWidth
            if (windowWidth < 500) {
                width = 300
                height = 50
            } else if (windowWidth > 500 && windowWidth < 800) {
                width = 468
                height = 60
            } else {
                width = 728
                height = 90
            }
            setSize({
                width,
                height
            })
        }
        setBannerSize()
        window.addEventListener('resize', setBannerSize)
        return () => {
            window.removeEventListener('resize', setBannerSize)
        }
    }, [])
    const qs = Math.round(Math.random() * 10000000)
    return (
        <iframe className="mx-auto"
            src={`https://pppbr.com/bnr_xload.php?section=General&pub=871543&format=${size.width}x${size.height}&ga=g&xt=163353997845794&xtt='+${qs}+'`}
            width={size.width}
            height={size.height}
            frameborder="0" marginheight="0" marginwidth="0" scrolling="no" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts">
        </iframe>
    )
}

export default Ad
