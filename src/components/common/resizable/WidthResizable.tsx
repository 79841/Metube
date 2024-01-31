import {
  ComponentProps,
} from "react";

import { useWidthResizing } from "./hooks/useWidthResizing";

type TWidthResizableProps = ComponentProps<"div">;
export const WidthResizable = ({
  children,
  ...props
}: TWidthResizableProps) => {
  const [ref, isResizing, resizedStyle, startResizing, stopResizing, resize] =
    useWidthResizing();

  return (
    <div
      ref={ref}
      className="absolute aspect-video select-none"
      style={resizedStyle}
      {...props}
    >
      <div
        className={`fixed z-40 h-0 w-0 ${isResizing && "h-screen w-screen"} bg-white bg-opacity-30`}
        onMouseMove={resize}
        onMouseUp={stopResizing}
      ></div>
      <div
        className={`absolute bottom-0 right-0 z-30 h-4 w-4 cursor-nwse-resize`}
        onMouseDown={startResizing}
      ></div>
      {children}
    </div>
  );
};
