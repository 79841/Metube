import { useRef } from "react";
import { YouTubePlayer } from "react-youtube";

export const useMouseOverVideo = () => {
  const playerRef = useRef<YouTubePlayer | null>(null);

  const playWithMouseOver = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const stopWithMouseOut = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
  };

  return [playWithMouseOver, stopWithMouseOut, onReady] as const;
};
