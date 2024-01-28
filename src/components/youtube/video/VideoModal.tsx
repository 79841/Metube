import YouTube from "react-youtube";
import { useSelectedVideoStore } from "../../../lib/zustand";
import { Draggable } from "../../common/dnd";
import { VideoModalHandler } from "./VideoModalHandler";

export const VideoModal = () => {
  const { selectedVideo } = useSelectedVideoStore();

  if (selectedVideo === null) return null;
  return (
    <Draggable>
      <VideoModalHandler />
      <div className="w-[500px] max-w-[500px]">
        <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-zinc-900 bg-opacity-30 shadow-xl shadow-zinc-950 backdrop-blur-md">
          <div className="youtube-frame aspect-video w-full bg-white">
            <YouTube
              videoId={selectedVideo.id}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
};
