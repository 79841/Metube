import { create } from "zustand";

type TState = {
  subscribedList: any[];
};

type TActions = {
  setSubscribedList: (subscribedList: any[]) => void;
  removeSubscribedList: () => void;
};

export const useSubscribedListStore = create<TState & TActions>((set) => ({
  subscribedList: [],
  setSubscribedList: (subscribedList: any[]) =>
    set((state) => ({
      subscribedList,
    })),
  removeSubscribedList: () =>
    set((state) => ({
      subscribedList: [],
    })),
}));
