import React, { useEffect } from "react";
import Player from "../components/despcription/Player";
import VideoDec from "../components/despcription/VideoDec";
import VideoList from "../components/list/VideoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoDetails } from "../features/videos/videoDetailSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";

const Video: React.FC = () => {

  const { video, isLoading, isError , error} = useSelector((state: any)=> state.video);
  const dispatch = useDispatch();
  const { videoId } = useParams<{ videoId?: string }>(); // Explicitly define the expected param type
  
  useEffect(() => {
    if (videoId) { // Ensure videoId is defined
      dispatch(fetchVideoDetails(videoId) as any);
    }
  }, [dispatch, videoId]);

  const {id, link, tags, title, description, duration, date, views} = video || {} ;

  //decide what to render
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <div className="col-span-12"> {error}</div>;
  } else if (video?.length === 0) {
    content = <div className="col-span-12">No video found</div>;
  } else if (video?.length > 0) {
    content = 
    <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              
              {/* <!-- video player --> */}
              <Player link={link} title={title} />

              {/* <!-- video description --> */}
              <VideoDec video={video} />

            </div>

            {/* <!-- related videos --> */}
            <VideoList currId ={id}/>
            
          </div>
  }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default Video;
