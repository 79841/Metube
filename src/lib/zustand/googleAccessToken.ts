import { create } from "zustand";
import { createJSONStorage,persist } from "zustand/middleware";

type TState = {
  accessToken: string | null;
};

type TActions = {
  setAccessToken: (accessToken: string) => void;
  removeAccessToken: () => void;
};

export const useGoogleAccessTokenStore = create<TState & TActions>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken: string) => set({ accessToken }),
      removeAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: "google-access-token-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
