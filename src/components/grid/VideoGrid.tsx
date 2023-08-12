import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { fetchVideos } from "../../features/videos/videoSlice";
import Loading from "../ui/Loading";

const VideoGrid: React.FC = () => {
  const dispatch = useDispatch();
  
  const {
    videos = [],
    isLoading = false,
    isError = false,
    error = null
  } = useSelector((state: any) => state.videos || {});

  const { tags, search } = useSelector((state: any) => state.filter)

  useEffect(() => {
    dispatch(fetchVideos({tags, search}) as any); 
  }, [dispatch,tags, search]);
  
  // Decide what to render
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError && error) { // Checking if error exists to display it
    content = <div className="col-span-12"> {error}</div>;
  } else if (videos.length === 0) { // Removed optional chaining since we've default value
    content = <div className="col-span-12">No videos found</div>;
  } else {
    content = videos.map((video: any) => <VideoGridItem key={video.id} video={video} />); // Using video.id as key if available
  }

  return (
    // Removed redundant nested sections
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {content}
      </div>
    </section>
  );
};

export default VideoGrid;
