import { useSelectedVideoStore } from "../../../../../lib/zustand";
import { TVideo } from "../../../../../types/Video";

export const useSelectingVideoModal = (videoData: TVideo) => {
  const { selectVideo } = useSelectedVideoStore();
  const startVideoModal = () => {
    selectVideo(videoData);
  };
  return startVideoModal;
};
