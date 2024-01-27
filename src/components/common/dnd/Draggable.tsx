import { MouseEventHandler, PropsWithChildren, useCallback } from "react";
import { useDndIsDraggingDispatchContext } from "./context";
import { useDndPositionContext } from "./context/DndPositionContext";
type TDraggableProps = PropsWithChildren;
export const Draggable = ({ children }: TDraggableProps) => {
  const { startDragging } = useDndIsDraggingDispatchContext();
  const { position } = useDndPositionContext();

  const handleMouseDown: MouseEventHandler = useCallback(
    (e) => {
      startDragging();
    },
    [startDragging],
  );

  return (
    <div
      className="fixed z-30 flex gap-2"
      style={{
        bottom: `${position.y}px`,
        right: `${position.x}px`,
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        className="absolute left-0 z-40 flex h-8 w-full items-center gap-2 rounded-t-lg bg-transparent p-3 hover:bg-zinc-900"
      >
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div>{children}</div>
    </div>
  );
};
