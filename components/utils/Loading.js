import CustomHead from '../utils/CustomHead'

function Loading() {
    return (
        <>
        <CustomHead
        title="Loading..."
        />
        <div className="h-96 flex flex-col justify-center items-center text-white">
            <img src="/static/img/loader.svg" alt="Loader" />
            <p className="text-2xl">Loading . . .</p>
        </div>
        </>
    )
}

export default Loading
