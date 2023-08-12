import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/ui/Loading";
import { fetchRelatedVideos } from "../../features/videos/relatedVideoSlice";
import VideoListItem from "./VideoListItem";
import { RootState } from '../../features/rootReducer';

interface RelatedVideoListProps {
    id: string;
    tags: string[];
}

const RelatedVideoList: React.FC<RelatedVideoListProps> = ({ id, tags }) => {
    const dispatch = useDispatch();
    
    const { relatedVideos, isLoading, isError, error } = useSelector(
        (state: RootState) => state.relatedVideo
    );

    useEffect(() => {
       dispatch(fetchRelatedVideos({ id, tags }) as any);
    }, [dispatch, id, tags]);

    let content;
    if (isLoading) content = <Loading />;
    else if (isError) content = <div className="col-span-12">{error}</div>;
    else if (relatedVideos.length === 0) content = <div className="col-span-12">No related videos found!</div>;
    else content = relatedVideos.map(video => <VideoListItem key={video.id} video={video} />);

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}

export default RelatedVideoList;
