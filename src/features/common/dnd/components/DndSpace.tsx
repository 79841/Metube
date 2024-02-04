import { MouseEventHandler, useRef } from "react";

import {
  useDndIsDraggingContext,
  useDndIsDraggingDispatchContext,
} from "../context";
import { useDndPositionDispatchContext } from "../context/DndPositionContext";

export const DndSpace = () => {
  const { isDragging } = useDndIsDraggingContext();
  const { stopDragging } = useDndIsDraggingDispatchContext();
  const mousePointRef = useRef<{ x: number; y: number } | null>(null);
  const { movePosition } = useDndPositionDispatchContext();

  const handleMouseUp = () => {
    stopDragging();
    mousePointRef.current = null;
  };

  const handleMouseMove: MouseEventHandler = (e) => {
    if (!isDragging) return;
    const updatePosition = () => {
      if (mousePointRef.current === null) {
        movePosition({
          x: 0,
          y: 0,
        });
      } else {
        movePosition({
          x: e.clientX - mousePointRef.current.x,
          y: e.clientY - mousePointRef.current.y,
        });
      }
      mousePointRef.current = { x: e.clientX, y: e.clientY };
    };
    requestAnimationFrame(updatePosition);
  };

  return (
    <div
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`fixed left-0 top-0 z-40 h-fit w-fit ${isDragging && "h-screen w-screen"}`}
    ></div>
  );
};
