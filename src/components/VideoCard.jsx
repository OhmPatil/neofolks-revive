import React from "react";

function VideoCard(props) {
  return (
    <div className={`w-fit h-fit bg-opacity-50 shadow-lg rounded-lg ${props.background ?? 'bg-slate-600'}`}>
      <div className="w-[280px] xl:w-[380px]">
        <iframe
          src={props.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // className="p-2 w-[360px] h-[150px] aspect-video"
          className="aspect-video p-2 w-full"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="text-center text-white pb-2 lg:text-lg font-['familjen_grotesk']">
        {props.position ? `${props.position}.` : null} {props.name}
      </h1>
    </div>
  );
}

export default VideoCard;
