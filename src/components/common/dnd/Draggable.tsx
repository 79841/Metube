import { PropsWithChildren, useRef } from "react";
import {} from "./context";
import { useDndPositionContext } from "./context";
import { DndSpace } from "./DndSpace";
type TDraggableProps = PropsWithChildren;
export const Draggable = ({ children }: TDraggableProps) => {
  const { position } = useDndPositionContext();

  return (
    <>
      <DndSpace />
      <div
        className="z-30 flex gap-2"
        style={{
          transform: `translate(${-position.x}px, ${-position.y}px)`,
        }}
      >
        <div>{children}</div>
      </div>
    </>
  );
};
