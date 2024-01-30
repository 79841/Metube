import { useSelectedVideoStore } from "../../../../../lib/zustand";

export const useSelectingVideoModal = (videoData: Record<string, any>) => {
  const { selectVideo } = useSelectedVideoStore();
  const startVideoModal = () => {
    selectVideo(videoData);
  };
  return startVideoModal;
};
