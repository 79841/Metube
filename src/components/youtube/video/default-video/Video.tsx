import YouTube from "react-youtube";

import { VideoInfo } from "../default-video/VideoInfo";
import { useMouseOverVideo } from "./hooks/useMouseOverVideo";
import { useSelectingVideoModal } from "./hooks/useSelectingVideoModal";
import { VideoThumbnail } from "./VideoThumbnail";

type TVideoProps = {
  videoData: Record<string, any>;
};
export const Video = ({ videoData }: TVideoProps) => {
  const startVideoModal = useSelectingVideoModal(videoData);
  const [playWithMouseOver, stopWithMouseOut, onReady] = useMouseOverVideo();

  return (
    <div
      className="flex cursor-pointer flex-col gap-2 text-zinc-100"
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
      <div className="flex items-start gap-2">
        <VideoInfo videoData={videoData} />
      </div>
    </div>
  );
};
