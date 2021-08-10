import { Component } from 'react'

export class MoviesSlider extends Component {
    constructor(props) {
        super(props)

        this.sliderContainerRef = React.createRef()
        this.state = {
            lastChange: 0
        }
    }

    componentDidMount() {
        this.checkSliderConditions()
    }

    componentDidUpdate() {
        this.checkSliderConditions()
    }

    checkSliderConditions = () => {
        const containerHalfWidth = this.sliderContainerRef.current.clientWidth / 2
        // console.log(containerHalfWidth)
        // console.log(this.props.movieRefs[this.props.movieIndex].current.getClientRects()[0])
        const { width: movieWidth, x: xPosition } = this.props.movieRefs[this.props.movieIndex].current.getClientRects()[0]
        if (xPosition + movieWidth > containerHalfWidth + movieWidth) {
            console.log('bigger')
            const sliderScrollWidth = this.sliderContainerRef.current.scrollWidth
            this.scrollSlider(xPosition, movieWidth, containerHalfWidth, sliderScrollWidth)
        }
    }
    scrollSlider = (xPosition, width, cWidth, sw) => {
        this.sliderContainerRef.current.scrollTo(width + 50 * (this.props.movieIndex + 1), 0)
    }

    render() {
        const sliderContainerRef = this.sliderContainerRef
        const { movies, movieRefs, destroyAndChange } = this.props
        return (
            <div className="w-screen px-10 sm:px-16 relative">
                <span className="absolute w-12 sm:w-16 h-48 xl:h-60 2xl:h-72 top-1.5 sm:top-2 left-9 sm:left-14  flex flex-col justify-center">
                    <div className=" w-full h-full transform scale-95 bg-gradient-to-r from-faded-white z-10 rounded-md z-10 shadow-xl filter blur-sm" >&apos;</div>
                </span>
                <span className="absolute w-12 sm:w-16 h-48 xl:h-60 2xl:h-72 top-1.5 sm:top-2 right-9 sm:right-14 flex flex-col justify-center">
                    <div className=" w-full h-full transform scale-95 bg-gradient-to-l from-faded-white z-10 rounded-md z-10 shadow-xl filter blur-sm" >&apos;</div>
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