import { ComponentProps, MouseEventHandler, useRef, useState } from "react";
import { useSizeContext, useSizeDispatchContext } from "./context/SizeContext";

type TWidthResizableProps = ComponentProps<"div">;
export const Resizable = ({ children, ...props }: TWidthResizableProps) => {
  // const [width, setWidth] = useState<number | null>();
  const { setSize } = useSizeDispatchContext();
  const { width, height } = useSizeContext();
  const [isResizing, setIsResizing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const startResizing = () => {
    console.log("resizing start");
    setIsResizing(true);
  };

  const stopResizing = () => {
    if (isResizing) {
      console.log("resizing stop");
      setIsResizing(false);
    }
  };

  const resize: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget;
    if (isResizing && target !== null) {
      setSize({
        width: e.clientX - target.getBoundingClientRect().left,
        height: e.clientY - target.getBoundingClientRect().top,
      });
    }
  };

  return (
    <div
      ref={ref}
      className="absolute aspect-video select-none"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      {...props}
    >
      <div
        className={`fixed z-40 h-0 w-0 ${isResizing && "h-screen w-screen"} bg-white bg-opacity-30`}
        onMouseMove={resize}
        onMouseUp={stopResizing}
      ></div>

      <div className="relative">
        {children}
        <div
          className={`absolute bottom-0 right-0 z-30 h-8 w-8 cursor-nwse-resize bg-red-500`}
          onMouseDown={startResizing}
        ></div>
      </div>
    </div>
  );
};
