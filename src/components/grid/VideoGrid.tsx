import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { fetchVideos } from "../../features/videos/videoSlice";
import Loading from "../ui/Loading";

const VideoGrid: React.FC = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector((state: any) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos() as any); // Using type casting. Ideally, type your dispatch instead.
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <div className="col-span-12"> {error}</div>;
  } else if (videos?.length === 0) {
    content = <div className="col-span-12">No videos found</div>;
  } else if (videos?.length > 0) {
    content = videos.map((video: any) =><VideoGridItem  key={video} video={video}/>);
  }

  return (
    <>
      {/* <!-- Video Grid --> */}
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          </div>
        </section>
      </section>
    </>
  );
};

export default VideoGrid;
