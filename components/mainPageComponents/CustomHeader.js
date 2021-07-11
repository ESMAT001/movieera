import React, { useState, useEffect } from "react";


import Rating from "../utils/Rating";
import MovieMoreInfo from "./MovieMoreInfo";


import { FaDownload } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { imageUrl } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore, {
    Autoplay, Navigation, Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Thumbs]);

function CustomHeader({ movies }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [bgImage, setBgImage] = useState(movies[0].backdrop_path);
    const [slidesPerView, setSlidesPerView] = useState(3);
    
    useEffect(() => {
        function configureMoviesCountBasedOnViewWidth() {
            const screenWidth = window.innerWidth
            let count = 1
            if (screenWidth <= 345) {
                count = 2
            } else if (screenWidth > 345 && screenWidth <= 500) {
                count = 3
            } else if (screenWidth > 500 && screenWidth <= 600) {
                count = 4
            } else if (screenWidth > 600 && screenWidth <= 768) {
                count = 5
            } else if (screenWidth > 768 && screenWidth <= 1024) {
                count = 6
            } else if (screenWidth > 1024 && screenWidth <= 1366) {
                count = 7
            } else if (screenWidth > 1366 && screenWidth <= 1566) {
                count = 8
            } else if (screenWidth > 1566) {
                count = 9
            }
            setSlidesPerView(count)
        }
        window.addEventListener("load", configureMoviesCountBasedOnViewWidth)
        window.addEventListener("resize", configureMoviesCountBasedOnViewWidth)
    }, []);
    return (
        <>
            <div className="relative w-full h-full">
                <div
                    className="h-full w-full absolute top-0 left-0 z-0 filter blur-sm bg-cover bg-center bg-no-repeat brightness-90 contrast-125 transform scale-105 transition-all duration-500"
                    style={{
                        backgroundImage: 'url("http://localhost:3000' + imageUrl + bgImage + '")',
                    }}>
                    <span className="w-full h-full absolute bg-black bg-opacity-25"> </span>
                </div>
                <Swiper
                    onSlideChange={(swiper) => {
                        if (swiper.activeIndex - 1 >= movies.length) {
                            return setBgImage(movies[0].backdrop_path)
                        }
                        else if (swiper.activeIndex - 1 < 0) {
                            return setBgImage(movies[movies.length - 1].backdrop_path)
                        }
                        return setBgImage(movies[swiper.activeIndex - 1].backdrop_path);
                    }}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    loop={true}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    style={{ '--swiper-navigation-color': '#ffffffad', '--swiper-pagination-color': '#ffffffad' }}
                >

                    {movies.map((movie, i) => {
                        return (
                            <SwiperSlide key={i}>
                                {({ isActive }) => {
                                    // if (isActive) setBgImage(movie.backdrop_path);
                                    return (
                                        <div className="text-white flex flex-col overflow-hidden w-full h-full">
                                            <div className="w-6/12  2xl:w-6/12 grid grid-cols-3 gap-y-4 gap-x-4 sm:gap-y-0 justify-items-center relative mx-auto py-28">
                                                <div className="col-span-3 sm:col-span-2 order-2 sm:order-1 sm:justify-self-start flex flex-col justify-evenly items-center sm:items-start space-y-2 sm:space-y-0">
                                                    <h2 className="text-2xl sm:text-3xl text-center sm:text-left font-movieNameFont capitalize">
                                                        {movie.original_title}
                                                    </h2>
                                                    <p className="text-sm text-opacity-90 text-gray-200">
                                                        Rating: {movie.vote_average}
                                                    </p>
                                                    <Rating rating={movie.vote_average} />
                                                    <p className="font-subMovieFont text-sm text-opacity-90 text-gray-200">
                                                        Original language: {movie.original_language}
                                                    </p>
                                                    <ul className="flex flex-row flex-wrap justify-center space-x-2 text-sm text-opacity-90 text-gray-200">
                                                        {movie.genres.map((genre) => (
                                                            <li key={genre.id} className="">
                                                                {genre.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="flex space-x-2">
                                                        <button className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white ">
                                                            <FaDownload className="text-md mr-1" />Download
                                                        </button>
                                                        <button className="font-semibold rounded antialiased bg-green-400 hover:bg-green-500 focus:bg-green-600  focus:outline-none flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 py-2.5 px-6 text-xs leading-normal text-white ">
                                                            <IoIosPlay className="text-xl" /> Play
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className=" col-span-3 sm:col-span-1 order-1 sm:order-2">
                                                    <MovieMoreInfo imagePath={movie.poster_path} movieId={movie.id} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }}
                            </SwiperSlide>)
                    })}
                </Swiper>
                <div className="px-10">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        watchSlidesVisibility={true}
                        watchSlidesProgress={true}
                        className="h-48 xl:h-60 2xl:h-72 w-full"
                        spaceBetween={5}
                        slidesPerView={slidesPerView}
                    >
                        {movies.map((movie, i) => {
                            return (<SwiperSlide
                                key={i}
                            >
                                <div className="w-full h-full flex items-center justify-center" >
                                    <img
                                        alt={movie.title + "image"}
                                        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                                        className="transform transition-all duration-300 hover:scale-105  h-4/5 cursor-pointer"
                                    />
                                </div>
                            </SwiperSlide>)
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default CustomHeader