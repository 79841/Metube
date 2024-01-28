import { MouseEventHandler, useCallback } from "react";
import {
  useDndIsDraggingDispatchContext,
  useDndPositionDispatchContext,
} from "../../common/dnd/context";
import { useSelectedVideoStore } from "../../../lib/zustand";

export const VideoModalHandler = () => {
  const { startDragging } = useDndIsDraggingDispatchContext();
  const { unselectVideo } = useSelectedVideoStore();
  const { resetPosition } = useDndPositionDispatchContext();

  const handleMouseDown: MouseEventHandler = useCallback(
    (e) => {
      startDragging();
    },
    [startDragging],
  );

  const handleClose = () => {
    unselectVideo();
    resetPosition();
  };

  const handleMinimize = () => {};

  return (
    <div
      onMouseDown={handleMouseDown}
      className="absolute -top-10 left-0 z-40 flex h-8 w-full items-center gap-2 rounded-lg bg-zinc-900 bg-opacity-70 p-3 backdrop-blur-md hover:bg-zinc-800 hover:bg-opacity-70"
    >
      <div
        onClick={handleClose}
        className="h-3 w-3 rounded-full bg-red-500"
      ></div>
      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
      <div className="h-3 w-3 rounded-full bg-green-500"></div>
    </div>
  );
};
