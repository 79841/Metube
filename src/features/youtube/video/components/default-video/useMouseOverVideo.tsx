import { MutableRefObject } from "react";
import { YouTubePlayer } from "react-youtube";

export const useMouseOverVideo = (
  playerRef: MutableRefObject<YouTubePlayer | null>,
) => {
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

  return [playWithMouseOver, stopWithMouseOut] as const;
};
