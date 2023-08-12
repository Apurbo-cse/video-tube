import React, { useEffect } from 'react'
import VideoListItem from './VideoListItem'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/videos/relatedVideoSlice';

interface VideoProps {
    tags: string[]; // I'm assuming tags is an array of strings. Adjust accordingly if not.
    currId: string;     // Adjust type if needed.
}

const VideoList: React.FC<VideoProps> = ({ tags, currId }) => {
    const dispatch = useDispatch();
    const {} = useSelector()

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currId }))
    }, [dispatch, tags, id]);

    return (
        <>
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
               <VideoListItem />
            </div>
        </>
    );
}

export default VideoList;
