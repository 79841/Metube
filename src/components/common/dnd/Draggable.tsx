import { PropsWithChildren } from "react";
import {} from "./context";
import { useDndPositionContext } from "./context";
type TDraggableProps = PropsWithChildren;
export const Draggable = ({ children }: TDraggableProps) => {
  const { position } = useDndPositionContext();

  return (
    <div
      className="fixed z-30 flex gap-2"
      style={{
        bottom: `${position.y}px`,
        right: `${position.x}px`,
      }}
    >
      <div>{children}</div>
    </div>
  );
};
