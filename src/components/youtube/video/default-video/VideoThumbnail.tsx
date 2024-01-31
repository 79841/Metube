import React from "react";

import { convertISO8601ToHMS } from "../../../../utils/convertTimeFormat";

type TVideoThumbnail = {
  videoData: Record<string, any>;
};
export const VideoThumbnail = ({ videoData }: TVideoThumbnail) => {
  return (
    <div className="absolute left-0 top-0 z-20 h-full w-full delay-500 duration-500 hover:opacity-0">
      <img
        src={videoData.snippet.thumbnails.maxres.url}
        alt={videoData.snippet.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-2 right-2 w-fit rounded-lg bg-zinc-800 px-2 py-1 text-xs font-semibold backdrop-blur-md">
        {convertISO8601ToHMS(videoData.contentDetails.duration)}
      </div>
    </div>
  );
};
