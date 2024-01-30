import { useDndIsDraggingDispatchContext } from "../../../../../common/dnd/context";

export const useVideoDragging = () => {
  const { startDragging } = useDndIsDraggingDispatchContext();

  const handleMouseDown = () => {
    startDragging();
  };

  return handleMouseDown;
};
