import { useDndIsDraggingDispatchContext } from "components/common/dnd/context";

export const useVideoDragging = () => {
  const { startDragging } = useDndIsDraggingDispatchContext();

  const handleMouseDown = () => {
    startDragging();
  };

  return handleMouseDown;
};
