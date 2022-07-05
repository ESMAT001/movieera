
import { useState } from 'react'
import { BsPlus } from "react-icons/bs";
import EpisodeBox from './EpisodeBox';
function Season({ season, cb }) {

    const [isContentVisible, setIsContentVisible] = useState(false)


    return (
        <div className="w-full flex flex-col text-white">
            <div className="flex justify-between items-center px-4 py-3 sm:py-4 bg-nice-red shadow-xl rounded">
                <p className="capitalize text-sm sm:text-base">{season.name}</p>
                <button onClick={() => {
                    // fetchData();
                    setIsContentVisible(prev => !prev)
                }}>
                    <BsPlus
                        className={"text-2xl cursor-pointer transition-all duration-200 transform " + (isContentVisible ? "rotate-45" : "")} />
                </button>
            </div>
            <div
                style={{
                    backgroundColor: '#13171c',
                }}
                className={"w-full p-8 rounded shadow-xl mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto transition-all duration-300" + (isContentVisible ? "" : " hidden")}>
                {/* {videos.map(video => (
                    <TrailerBox
                        key={video.id}
                        videoKey={video.key}
                        title={title}
                        fn={fn}
                    />
                ))} */}

                {season.episodes.map((episode, i) => {
                    console.log(episode)
                    return <EpisodeBox
                        key={i + "seriesEPi"}
                        episodeNumber={episode.episode_number}
                        img={episode.still_path}
                        fn={() => cb(episode)} />
                })}

            </div>

        </div>
    )
}

export default Season