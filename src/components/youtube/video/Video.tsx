import { useRef } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import { videosOfAllSubscriptions } from "../../../data/youtube/videosOfAllSubscriptions";

type TVideoProps = {
  videoData: Record<string, any>;
};
export const Video = ({ videoData }: TVideoProps) => {
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

  return (
    <div
      ref={frameRef}
      className="youtube-frame relative aspect-video w-full overflow-hidden rounded-xl"
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
  );
};
