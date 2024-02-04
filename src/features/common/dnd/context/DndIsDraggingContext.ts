import { createContext, useContext } from "react";

export type TDndIsDraggingContext = {
  isDragging: boolean;
};

type TDndIsDraggingDispatchContext = {
  startDragging: () => void;
  stopDragging: () => void;
};

export const dndIsDraggingInitState = { isDragging: false };

export const DndIsDraggingContext = createContext<TDndIsDraggingContext>(
  dndIsDraggingInitState,
);

export const DndIsDraggingDispatchContext =
  createContext<TDndIsDraggingDispatchContext>({
    startDragging: () => {},
    stopDragging: () => {},
  });

export const useDndIsDraggingContext = () => useContext(DndIsDraggingContext);
export const useDndIsDraggingDispatchContext = () =>
  useContext(DndIsDraggingDispatchContext);
