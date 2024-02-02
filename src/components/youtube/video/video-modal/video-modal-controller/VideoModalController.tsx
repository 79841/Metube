import { useDndPositionDispatchContext } from "components/common/dnd/context";
import { useWidthDispatchContext } from "components/common/resizable/context";
import { useSelectedVideoStore } from "lib/zustand";
import { CloseButton, MaxButton, MinButton } from "./buttons";
import { useVideoDragging } from "./hooks";

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
