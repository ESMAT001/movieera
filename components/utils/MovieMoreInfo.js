import { useState, memo } from 'react'
import { imageUrl, placeholderImgUrl } from "../../utils";
import Image from 'next/image'

function MovieMoreInfo({
    imagePath,
    placeholder = 'none',
    loading = "lazy",
    alt = "movie image",
    layout = 'responsive',
    badgeComponent,
    children
}) {

    const [isMouseOver, setIsMouseOver] = useState(false)
    const handleMouseEnter = () => setIsMouseOver(true)
    const handleMouseLeave = () => setIsMouseOver(false)


    return (
        <div className="relative transform transition-all duration-300 hover:scale-105 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {
                badgeComponent
            }
            <span
                style={{
                    height: layout === 'fill' ? '98.225%' : '100%',
                }}
                className={"w-full bg-black-dark bg-opacity-50 absolute top-0 left-0 z-10 flex items-center justify-center transition-all duration-500 transform " + (isMouseOver ? "" : "translate-x-full")} >
                {children}
            </span>
            {
                layout === 'responsive' && <Image
                    unoptimized={true}
                    loading={loading}
                    alt={alt}
                    src={imageUrl(imagePath)}
                    width={500}
                    height={750}
                    layout={layout}
                    placeholder="blur"
                    blurDataURL={placeholder === "none" ? placeholderImgUrl(imagePath) : placeholder}
                />
            }

            {
                layout === 'fill' && <Image
                    unoptimized={true}
                    alt={alt}
                    src={imageUrl(imagePath)}
                    width={500}
                    height={750}
                    loading={loading}
                    placeholder="blur"
                    blurDataURL={placeholder === "none" ? placeholderImgUrl(imagePath) : placeholder}
                />
            }

            {/* <img
                src={imageUrl + imagePath}
                alt={"movie image"}
                // loading='lazy'
                className={"w-full ml-auto shadow-xl hover:shadow-md transition-all duration-300 filter " + (isMouseOver ? "blur-sm" : "")}
            /> */}
        </div>
    )
}

export default memo(MovieMoreInfo)
