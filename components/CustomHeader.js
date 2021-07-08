import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper/core';

// install Swiper's Thumbs component
SwiperCore.use([Thumbs]);

function CustomHeader({ movies }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="text-white">
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{
                    delay:100
                }}
            >
                {movies.map((movie, i) => {
                    return (<SwiperSlide key={i}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                    </SwiperSlide>)
                })}


            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                watchSlidesVisibility
                watchSlidesProgress

            >
                {movies.map((movie, i) => {
                    return (<SwiperSlide key={i}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                    </SwiperSlide>)
                })}
            </Swiper>
        </div>
    )
}

export default CustomHeader
