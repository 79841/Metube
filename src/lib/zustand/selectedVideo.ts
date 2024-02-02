import { TVideo } from "types/Video";
import { create } from "zustand";

type TState = {
  selectedVideo: TVideo | null;
};

type TActions = {
  selectVideo: (video: TState["selectedVideo"]) => void;
  unselectVideo: () => void;
};

export const useSelectedVideoStore = create<TState & TActions>((set) => ({
  selectedVideo: null,
  selectVideo: (video: TState["selectedVideo"]) =>
    set((state) => ({
      selectedVideo: video,
    })),
  unselectVideo: () => set((state) => ({ selectedVideo: null })),
}));
