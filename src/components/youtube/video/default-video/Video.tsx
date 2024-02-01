import YouTube from "react-youtube";

import { TVideo } from "../../../../types/Video";
import { VideoInfo } from "../default-video/VideoInfo";
import { VideoThumbnail } from "./VideoThumbnail";
import { useMouseOverVideo } from "./hooks/useMouseOverVideo";
import { useSelectingVideoModal } from "./hooks/useSelectingVideoModal";

type TVideoProps = {
  videoData: TVideo;
};
export const Video = ({ videoData }: TVideoProps) => {
  const startVideoModal = useSelectingVideoModal(videoData);
  const [playWithMouseOver, stopWithMouseOut, onReady] = useMouseOverVideo();

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
          videoId={videoData.id.videoId}
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
