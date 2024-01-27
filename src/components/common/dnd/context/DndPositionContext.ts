import { createContext, useContext } from "react";

export type TDndPositionContext = {
  position: { x: number; y: number };
};

type TDndPositionDispatchContext = {
  movePosition: (position: TDndPositionContext["position"]) => void;
  resetPosition: () => void;
};

export const dndPositionInitState = { position: { x: 0, y: 0 } };

export const DndPositionContext =
  createContext<TDndPositionContext>(dndPositionInitState);

export const DndPositionDispatchContext =
  createContext<TDndPositionDispatchContext>({
    movePosition: (position: TDndPositionContext["position"]) => {},
    resetPosition: () => {},
  });

export const useDndPositionContext = () => useContext(DndPositionContext);
export const useDndPositionDispatchContext = () =>
  useContext(DndPositionDispatchContext);
