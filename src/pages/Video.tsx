import React from "react";
import Player from "../components/despcription/Player";
import VideoDec from "../components/despcription/VideoDec";
import VideoList from "../components/list/VideoList";

const Video: React.FC = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              
              {/* <!-- video player --> */}
              <Player />

              {/* <!-- video description --> */}
              <VideoDec />

            </div>

            {/* <!-- related videos --> */}
            <VideoList />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
