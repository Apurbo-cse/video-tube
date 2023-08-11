import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = () => {
    return (
        <>
            <div
                className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
            >
                {/* <!-- single related video --> */}
               <VideoListItem/>
            </div>
        </>
    )
}

export default VideoList