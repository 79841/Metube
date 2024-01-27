import { useRef } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import { useSubscribedListStore } from "../../../lib/zustand/subscribedList";
import { convertISO8601ToHMS } from "../../../utils/convertTimeFormat";
import { useSelectedVideoStore } from "../../../lib/zustand";

type TVideoProps = {
  videoData: Record<string, any>;
};
export const Video = ({ videoData }: TVideoProps) => {
  const { subscribedList } = useSubscribedListStore();
  const { selectVideo } = useSelectedVideoStore();
  const channelInfo = subscribedList.find(
    (subscribed) => subscribed.snippet.title === videoData.snippet.channelTitle,
  );

  const frameRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const handleMouseOut = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
  };

  const handleClick = () => {
    selectVideo(videoData);
  };

  return (
    <div
      className="flex cursor-pointer flex-col gap-4 text-zinc-100"
      onClick={handleClick}
    >
      <div
        ref={frameRef}
        className="youtube-frame relative aspect-video w-full overflow-hidden rounded-lg"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          ref={thumbnailRef}
          className="absolute left-0 top-0 z-20 h-full w-full delay-500 duration-500 hover:opacity-0"
        >
          <img
            src={videoData.snippet.thumbnails.maxres.url}
            alt={videoData.snippet.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-2 right-2 w-fit rounded-lg bg-zinc-800 px-2 py-1 text-xs font-semibold backdrop-blur-md">
            {convertISO8601ToHMS(videoData.contentDetails.duration)}
          </div>
        </div>
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
      <div className="flex items-start gap-4">
        {typeof channelInfo !== "undefined" && (
          <div className="w-16 overflow-hidden rounded-lg">
            <img
              src={channelInfo.snippet.thumbnails.default.url}
              alt={channelInfo.snippet.title}
              className="object-cover"
            />
          </div>
        )}
        <div className="text-base">{videoData.snippet.title}</div>
      </div>
    </div>
  );
};
