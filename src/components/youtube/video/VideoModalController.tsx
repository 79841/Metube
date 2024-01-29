import { MouseEventHandler, useCallback } from "react";
import {
  useDndIsDraggingDispatchContext,
  useDndPositionDispatchContext,
} from "../../common/dnd/context";
import { useSelectedVideoStore } from "../../../lib/zustand";
import { IoIosClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdOpenInFull } from "react-icons/md";

export const VideoModalController = () => {
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

  const handleMinimize = () => {
    resetPosition();
  };

  const handleMaximize = () => {};

  return (
    <div
      onMouseDown={handleMouseDown}
      className="group absolute -top-10 left-0 z-40 flex h-8 w-full items-center gap-2 rounded-lg bg-zinc-900 bg-opacity-70 p-3 backdrop-blur-md hover:bg-zinc-800 hover:bg-opacity-70"
    >
      <div
        onClick={handleClose}
        className="flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs"
      >
        <IoIosClose size={13} className="opacity-0 group-hover:opacity-100" />
      </div>
      <div
        className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-400 text-xs"
        onClick={handleMinimize}
      >
        <FaMinus size={8} className="opacity-0 group-hover:opacity-100" />
      </div>
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500 text-xs">
        <MdOpenInFull
          size={8}
          className="opacity-0 group-hover:opacity-100"
          onClick={handleMaximize}
        />
      </div>
    </div>
  );
};
