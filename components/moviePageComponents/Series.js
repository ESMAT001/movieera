import { useState, useEffect } from 'react'
import CustomHead from '../utils/CustomHead'
import { imageUrl, websiteUrl, createMovieNameForUrl } from '../../utils'
import Bg from './Bg'
import SubBoxSeries from './SubBoxSeries'
// import Servers from './Servers'
import Season from './Season'
import Modal from '../utils/Modal'

import Ad from '../Ad'




const playerOptions = {
    storage: { enabled: true, key: 'plyr' },
    captions: { active: true, language: 'auto', update: false },
    autoplay: true,
    preload: 'metadata',
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'captions', 'volume', 'settings', 'fullscreen'],
}





function Series({ movie }) {
    // console.log(movie)
    const bgImage = movie.backdrop_path
    const title = movie.name
    const movieId = movie.id
    // return <h1>Series</h1>
    const [isMoviePlayerModalOpen, setMoviePlayerModalOpen] = useState(false)
    const [seriseSeasonNumber, setSeriseSeasonNumber] = useState(null)
    const [seriesEpisodeNumber, setSeriesEpisodeNumber] = useState(null)
    const [serverType, setServerType] = useState(null)
    const [isServerTypeModalOpen, setIsServerTypeModalOpen] = useState(false)
    // const [mediaSrc, setMediaSrc] = useState(null)
    // const [mediaSources, setMediaSources] = useState([])
    // const [MediaErrorHtml, setMediaErrorHtml] = useState(null)


    const openMoviePlayerModal = () => {
        setMoviePlayerModalOpen(true)
    }

    const closeMoviePlayerModal = () => {
        setSeriesEpisodeNumber(null)
        setSeriseSeasonNumber(null)
        setServerType(null)
        setMoviePlayerModalOpen(false)
    }

    const openServerTypeModal = () => {
        setIsServerTypeModalOpen(true)
    }

    const closeServerTypeModal = () => {
        setIsServerTypeModalOpen(false)
    }



    useEffect(() => {
        // async function fetchMediaLink() {
        //     const res = await fetch(`https://cors101.herokuapp.com/fetch/https://seapi.link/?type=tmdb&id=${movieId}&season=${seriseSeasonNumber}&episode=${seriesEpisodeNumber}&max_results=1`)
        //     const data = await res.json()
        //     if (data.results.length > 0) {
        //         setMediaSrc(data.results[0].url)
        //     } else {
        //         setMediaErrorHtml('<div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;"><h1 style="color:white;">Sorry this episode is not available</h1></div>')
        //     }
        //     setMediaSources(data.results)
        // }
        if (seriesEpisodeNumber !== null && seriseSeasonNumber !== null && serverType !== null) {
            openMoviePlayerModal()
            // fetchMediaLink()
        }
        if (seriesEpisodeNumber !== null && seriseSeasonNumber !== null && serverType === null) {
            openServerTypeModal()
        }
    }, [seriesEpisodeNumber, seriseSeasonNumber, serverType])

    function handleEpisodePlay({ episode_number, season_number }) {

        setSeriesEpisodeNumber(episode_number)
        setSeriseSeasonNumber(season_number)
    }

    // function handleServerChange({ url }) {
    //     setMediaSrc(url)
    // }


    return (
        <>
            <CustomHead
                title={title}
                description={`Watch ${title} for free from Movieera (your online movie theater) , overview: ${movie?.overview?.slice(0, 90)}... `}
                keywords={`download ${title}, ${title} download,${title} free download,movieera ${title} ,${title} movieera,${title} movie download movieera,${title},watch ${title} online,دانلود ${title},${title} free download hd`}
                imgPath={imageUrl(movie.poster_path)}
                url={`${websiteUrl}series/${createMovieNameForUrl(movieId, title)}`}
            >
                <link rel="canonical" href={`${websiteUrl}series/${createMovieNameForUrl(movieId, title)}`} />
            </CustomHead>

            {
                isServerTypeModalOpen && <Modal close={closeServerTypeModal}>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <h3 className='text-lg'>Select Servers Cluster : </h3>
                        <button
                            onClick={() => { setServerType(1); closeServerTypeModal() }}
                            className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-lg transform focus:translate-y-0.5 transition-all duration-300 py-2 px-3 text-sm leading-normal text-white">
                            Cluster 1
                        </button>
                        <button
                            onClick={() => { setServerType(2); closeServerTypeModal() }}
                            className="font-semibold rounded antialiased bg-nice-red hover:bg-red-500 focus:bg-red-600 flex items-center justify-center gap-1 outline-none uppercase tracking-wider focus:outline-none focus:shadow-lg transform focus:translate-y-0.5 transition-all duration-300 py-2 px-3 text-sm leading-normal text-white">
                            Cluster 2
                        </button>
                    </div>
                </Modal>
            }


            {

                isMoviePlayerModalOpen && <Modal close={closeMoviePlayerModal} >
                    {/* <Servers mediaSources={mediaSources} mediaSrc={mediaSrc} fn={handleServerChange} />
                        <iframe id="iframe" srcDoc={MediaErrorHtml} src={mediaSrc} width="100%" height="100%" frameBorder="0"></iframe> */}
                    {serverType === 2 && <iframe id="ve-iframe" src={`https://2embed.org/embed/series?tmdb=${movieId}&sea=${seriseSeasonNumber}&epi=${seriesEpisodeNumber}`} width="100%" height="100%" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>}
                    {serverType === 1 && <iframe id="ve-iframe" src={`https://www.2embed.to/embed/tmdb/tv?id=${movieId}&s=${seriseSeasonNumber}&e=${seriesEpisodeNumber}`} width="100%" height="100%" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>}
                </Modal>

            }

            <main>
                <article className="relative overflow-hidden px-10 sm:px-20 md:px-32 lg:px-44 xl:px-60 2xl:px-72 pt-32 pb-10 sm:py-32">
                    <Bg bgImage={bgImage} />
                    <SubBoxSeries movie={movie} />
                </article>
                <div className="text-gray-400 px-8 sm:px-16 md:px-20 lg:px-32 xl:px-36 2xl:px-44 py-10 md:py-20 xl:py-26" >

                    <Ad
                        key="movieAD_1"
                        className="adsbygoogle"
                        style={{ display: "block", textAlign: "center" }}
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-9968927152480430"
                        data-ad-slot="8822179716" />


                    {/* cool ads */}
                    <div id="seasons" className='flex flex-col space-y-2 my-4'>
                        <p>
                            <span className='text-nice-red'>Overview</span> : {movie.overview}
                        </p>

                        <p>
                            <span className='text-nice-red'>Original language</span> : {movie?.original_language}
                        </p>
                        <p>
                            <span className='text-nice-red'>Vote Average</span> : {movie.vote_average}
                        </p>
                    </div>
                    <div className='space-y-6'>
                        {
                            movie.seasons.length > 0 && movie.seasons.map(
                                (season, index) => {
                                    if (index === parseInt(movie.seasons.length / 2)) {
                                        return <>
                                            <Ad
                                                key="moviePageAd-1W@"
                                                className="adsbygoogle"
                                                style={{ display: "block", textAlign: "center" }}
                                                data-ad-layout="in-article"
                                                data-ad-format="fluid"
                                                data-ad-client="ca-pub-9968927152480430"
                                                data-ad-slot="2747725953"
                                            />
                                            <Season key={index + "season!)!"} season={season} cb={handleEpisodePlay} />
                                        </>
                                    }
                                    return <Season key={index + "season!)!"} season={season} cb={handleEpisodePlay} />
                                }
                            )
                        }
                    </div>
                    {/* <div className="mb-12  w-full mx-auto text-gray-200" id="container-39affabc185ccad0c249c41062d20da9"></div> */}
                    {/*cool ad */}
                </div>

                {/* ad */}
                <div className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200">
                    <Ad
                        key="moviePageAd-2"
                        className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-9968927152480430"
                        data-ad-slot="4799174229"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                </div>
                <article className="mb-12 px-10 sm:px-14 md:px-20 lg:px-32 xl:px-48  2xl:px-72 w-full mx-auto text-gray-200 ">
                    <h2>Keywords :</h2>
                    <ul className='text-nice-red flex space-x-4 cursor-pointer flex-wrap'>
                        <li>
                            <h2>
                                {movie.name} download
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {movie.name} Movieera
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Movieera {movie.name}
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {movie.name} watch online
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {movie.original_name} series hd
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {movie.original_name} download hd
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {movie.original_name} download hd for free
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {movie.original_name} watch online in movieera
                            </h2>
                        </li>
                    </ul>
                </article>
            </main>
        </>
    )
}

export default Series

