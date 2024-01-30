import { MouseEventHandler, useCallback } from "react";
import {
  useDndIsDraggingDispatchContext,
  useDndPositionDispatchContext,
} from "../../../../common/dnd/context";
import { useSelectedVideoStore } from "../../../../../lib/zustand";
import { IoIosClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdOpenInFull } from "react-icons/md";
import {
  useWidthContext,
  useWidthDispatchContext,
} from "../../../../common/resizable/context/WidthContext";
import { CloseButton } from "./buttons/CloseButton";
import { MinButton } from "./buttons/MinButton";
import { MaxButton } from "./buttons/MaxButton";
import { useVideoDragging } from "./hooks/useVideoDragging";

export const VideoModalController = () => {
  const handleMouseDown = useVideoDragging();
  const { unselectVideo } = useSelectedVideoStore();
  const { resetPosition } = useDndPositionDispatchContext();
  const { resetWidth } = useWidthDispatchContext();

  const handleClose = () => {
    unselectVideo();
    resetPosition();
  };

  const handleMinimize = () => {
    resetPosition();
    resetWidth();
  };

  const handleMaximize = () => {};

  return (
    <div
      onMouseDown={handleMouseDown}
      className="group absolute -top-10 left-0 z-40 flex h-8 w-full items-center gap-2 rounded-lg bg-zinc-900 bg-opacity-70 p-3 backdrop-blur-md hover:bg-zinc-800 hover:bg-opacity-70"
    >
      <CloseButton handleClose={handleClose} />
      <MinButton handleMinimize={handleMinimize} />
      <MaxButton handleMaximize={handleMaximize} />
    </div>
  );
};
