import { createContext, useContext } from "react";

export type TScaleContext = {
  scale: number | null;
};

type TScaleDispatchContext = {
  setScale: (scale: number) => void;
  resetScale: () => void;
};

export const scaleInitState = {
  scale: null,
};

export const ScaleContext = createContext<TScaleContext>(scaleInitState);

export const ScaleDispatchContext = createContext<TScaleDispatchContext>({
  setScale: (scale: number) => ({
    scale,
  }),
  resetScale: () => ({
    scale: null,
  }),
});

export const useScaleContext = () => useContext(ScaleContext);
export const useScaleDispatchContext = () => useContext(ScaleDispatchContext);
