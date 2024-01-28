import { throttle } from "lodash";
import { MouseEventHandler, PropsWithChildren, useRef } from "react";
import { useDndPositionDispatchContext } from "./context/DndPositionContext";
import {
  useDndIsDraggingContext,
  useDndIsDraggingDispatchContext,
} from "./context";

type TDndSpaceProps = PropsWithChildren;
export const DndSpace = ({ children }: TDndSpaceProps) => {
  const { isDragging } = useDndIsDraggingContext();
  const { stopDragging } = useDndIsDraggingDispatchContext();
  const mousePointRef = useRef<{ x: number; y: number } | null>(null);
  const { movePosition } = useDndPositionDispatchContext();

  const handleMouseUp = () => {
    stopDragging();
    mousePointRef.current = null;
  };

  const handleMouseMove: MouseEventHandler = throttle((e) => {
    console.log(e.clientX, e.clientY);
    if (!isDragging) return;
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
  }, 20);

  return (
    <div
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`fixed left-0 top-0 h-0 w-0 ${isDragging && "h-screen w-screen"}`}
    >
      {children}
    </div>
  );
};
