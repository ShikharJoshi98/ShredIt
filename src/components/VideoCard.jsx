import React from 'react';

const VideoCard = () => {
  return (
    <div className=" bg-[url('./public/bg-texture.webp')] bg-[#18181b] overflow-hidden h-[593px] w-full bg-cover bg-no-repeat">
      
      <video
        src="/src/public/video.mp4"
        className="w-[882px]  mt-12 block mx-auto rounded-full border-4 border-white border-double  "
        autoPlay
        muted
        loop
      ></video>

      
    </div>
  );
};

export default VideoCard;
