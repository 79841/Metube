import { create } from "zustand";
import { TSubscription } from "../../types/Subscription";

type TState = {
  subscribedList: TSubscription[];
};

type TActions = {
  setSubscribedList: (subscribedList: TState["subscribedList"]) => void;
  removeSubscribedList: () => void;
};

export const useSubscribedListStore = create<TState & TActions>((set) => ({
  subscribedList: [],
  setSubscribedList: (subscribedList: TState["subscribedList"]) =>
    set((state) => ({
      subscribedList,
    })),
  removeSubscribedList: () =>
    set((state) => ({
      subscribedList: [],
    })),
}));
