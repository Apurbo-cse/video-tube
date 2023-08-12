import React, { useEffect } from "react";
import Player from "../components/despcription/Player";
import VideoDec from "../components/despcription/VideoDec";
import VideoList from "../components/list/VideoList";
import { useDispatch, useSelector } from "react-redux";


import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { fetchVideo } from "../features/videos/videoDetailSlice";

const Video: React.FC = () => {

  const videoState = useSelector((state: any) => state.videoDetails) || {};
  const { video, isLoading, isError, error } = videoState;
  const dispatch = useDispatch();
  const { videoId } = useParams<{ videoId?: string }>();

  useEffect(() => {
    if (videoId) {
      dispatch(fetchVideo(videoId) as any);
    }
  }, [dispatch, videoId]);

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <div className="col-span-12"> {error}</div>;
  } else if (video?.length === 0) {
    content = <div className="col-span-12">No video found</div>;
  } else if (video) {
    const { id, link, tags, title } = video;
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />
          <VideoDec video={video} />
        </div>
        <VideoList currId={id} tags={tags} />
      </div>
    );
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
