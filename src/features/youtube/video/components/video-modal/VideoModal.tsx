import YouTube from "react-youtube";

import { DndContextProvider, Draggable } from "features/common/dnd";
import {
  WidthContextProvider,
  WidthResizable,
} from "features/common/resizable";
import { useSelectedVideoStore } from "lib/zustand";
import { VideoModalController } from "./video-modal-controller";

export const VideoModal = () => {
  const { selectedVideo } = useSelectedVideoStore();

  if (selectedVideo === null) return null;
  return (
    <DndContextProvider>
      <Draggable>
        <WidthContextProvider>
          <WidthResizable className="aspect-video w-[500px]">
            <VideoModalController />
            <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-zinc-900 bg-opacity-30 shadow-xl shadow-zinc-950 backdrop-blur-md">
              <div className="youtube-frame aspect-video w-full">
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
          </WidthResizable>
        </WidthContextProvider>
      </Draggable>
    </DndContextProvider>
  );
};
