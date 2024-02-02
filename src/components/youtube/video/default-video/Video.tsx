import YouTube, { YouTubePlayer } from "react-youtube";

import { useRef, useState } from "react";
import { TVideo } from "../../../../types/Video";
import { VideoInfo } from "../default-video/VideoInfo";
import { VideoThumbnail } from "./VideoThumbnail";
import { useMouseOverVideo } from "./hooks/useMouseOverVideo";
import { useSelectingVideoModal } from "./hooks/useSelectingVideoModal";

type TVideoProps = {
  videoData: TVideo;
};
export const Video = ({ videoData }: TVideoProps) => {
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    setIsReady(true);
  };

  const startVideoModal = useSelectingVideoModal(videoData);
  const [playWithMouseOver, stopWithMouseOut] = useMouseOverVideo(playerRef);

  return (
    <div
      className="flex cursor-pointer flex-col gap-4 rounded-xl bg-zinc-900 p-2 text-zinc-100"
      onClick={startVideoModal}
    >
      <div
        className="youtube-frame relative aspect-video w-full overflow-hidden rounded-lg"
        onMouseOver={playWithMouseOver}
        onMouseOut={stopWithMouseOut}
      >
        <VideoThumbnail videoData={videoData} />
        <YouTube
          videoId={videoData.id}
          onReady={onReady}
          opts={{
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
      <div className="mb-4 flex h-16 items-start gap-4">
        <VideoInfo videoData={videoData} />
      </div>
    </div>
  );
};
