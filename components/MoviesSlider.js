import React, { Component } from 'react'

export class MoviesSlider extends Component {
    constructor(props) {
        super(props)

        this.sliderContainerRef = React.createRef()
        this.state = {

        }
    }

    render() {
        const sliderContainerRef = this.sliderContainerRef
        const { movies, movieRefs, destroyAndChange } = this.props
        return (
            <div className="w-screen px-10 sm:px-16 relative">
                <span className="absolute w-12 sm:w-16 h-48 xl:h-60 2xl:h-72 top-1.5 sm:top-2 left-9 sm:left-14  flex flex-col justify-center">
                    <div className=" w-full h-full transform scale-95 bg-gradient-to-r from-faded-white z-10 rounded-md z-10 shadow-xl filter blur-sm" >'</div>
                </span>
                <span className="absolute w-12 sm:w-16 h-48 xl:h-60 2xl:h-72 top-1.5 sm:top-2 right-9 sm:right-14 flex flex-col justify-center">
                    <div className=" w-full h-full transform scale-95 bg-gradient-to-l from-faded-white z-10 rounded-md z-10 shadow-xl filter blur-sm" >'</div>
                </span>
                <div ref={sliderContainerRef} id='slider' className="flex flex-row flex-nowrap h-48 xl:h-60 2xl:h-72 w-full items-center space-x-6 custom-scrollbar overflow-x-scroll  mt-4 sm:mt-6 mb-10 px-5 pb-5 ">
                    {movies.map((subMovie, i) => {
                        return (
                            <img
                                src={
                                    "https://image.tmdb.org/t/p/w500/" + subMovie.poster_path
                                }
                                className="transform transition-all duration-300 hover:scale-105  h-4/5 cursor-pointer"
                                ref={movieRefs[i]}
                                onClick={() => destroyAndChange(i)}
                                key={i + "movieXkey"}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default MoviesSlider