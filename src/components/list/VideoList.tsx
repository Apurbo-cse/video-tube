import React from 'react'
import VideoListItem from './VideoListItem'
interface Video {
    tags: any;
    currId: any
  }
const VideoList: React.FC<Video> = ({ }) => {
    return (
        <>
            <div
                className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
            >
                {/* <!-- single related video --> */}
               <VideoListItem />

            </div>
        </>
    )
}

export default VideoList