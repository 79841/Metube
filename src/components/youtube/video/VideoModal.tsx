import YouTube from "react-youtube";
import { useSelectedVideoStore } from "../../../lib/zustand";
import { Draggable } from "../../common/dnd";
import { VideoModalController } from "./VideoModalController";
import { DndContextProvider } from "../../common/dnd/context";
import { DndSpace } from "../../common/dnd/DndSpace";
import { WidthResizable } from "../../common/resizable";

export const VideoModal = () => {
  const { selectedVideo } = useSelectedVideoStore();

  if (selectedVideo === null) return null;
  return (
    <DndContextProvider>
      <DndSpace>
        <Draggable>
          <VideoModalController />
          <WidthResizable width={500}>
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
          </WidthResizable>
        </Draggable>
      </DndSpace>
    </DndContextProvider>
  );
};
