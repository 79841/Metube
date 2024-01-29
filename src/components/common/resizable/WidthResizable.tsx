import {
  useState,
  useCallback,
  MouseEventHandler,
  PropsWithChildren,
  useRef,
} from "react";

type TWidthResizableProps = {
  width: number;
} & PropsWithChildren;
export const WidthResizable = ({ width, children }: TWidthResizableProps) => {
  const [size, setSize] = useState({ width });
  const [isResizing, setIsResizing] = useState(false);
  const mousePointRef = useRef();

  const startResizing = useCallback(() => {
    console.log("resizing start");
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    if (isResizing) {
      console.log("resizing stop");
      setIsResizing(false);
    }
  }, [isResizing]);

  const resize: MouseEventHandler = useCallback(
    (e) => {
      if (isResizing) {
        setSize((prevSize) => ({
          width: -e.clientX + prevSize.width,
        }));
      }
    },
    [isResizing],
  );

  return (
    <div
      className="aspect-video"
      style={{
        width: `${size.width}px`,
        border: "2px solid black",
        position: "relative",
        userSelect: "none",
      }}
      onMouseMove={resize}
      // onMouseLeave={stopResizing}
      onMouseUp={stopResizing}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          cursor: "nwse-resize",
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          zIndex: "50",
        }}
        onMouseDown={startResizing}
      ></div>
      {children}
    </div>
  );
};
