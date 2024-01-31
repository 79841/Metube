import { CSSProperties, MouseEventHandler, useRef, useState } from "react";

import {
  useWidthContext,
  useWidthDispatchContext,
} from "../context/WidthContext";
import { usePositionErrorResolution } from "./usePositionErrorResolution";

export const useWidthResizing = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setWidth } = useWidthDispatchContext();
  const { width } = useWidthContext();
  const [isResizing, setIsResizing] = useState(false);
  const mousePointRef = useRef<{ x: number; y: number } | null>(null);
  const [position, movePosition] = usePositionErrorResolution();

  const transform = `translate(${position.x}px, ${position.y}px)`;

  const resizedStyle: CSSProperties =
    width !== null
      ? {
          width: `${width}px`,
          transform,
        }
      : {
          transform,
        };

  const startResizing: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!ref.current) return;
    setIsResizing(true);
    setWidth(ref.current.getBoundingClientRect().width);
    mousePointRef.current = { x: e.clientX, y: e.clientY };
  };

  const stopResizing = () => {
    if (isResizing) {
      setIsResizing(false);
    }
  };

  const resize: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isResizing) return;
    const updateSize = () => {
      if (!ref.current || !mousePointRef.current || !width) return;
      const distance = mousePointRef.current.x - e.clientX;
      setWidth(width - distance);
      movePosition({
        x: distance,
        y: (distance * 9) / 16,
      });
      mousePointRef.current = { x: e.clientX, y: e.clientY };
    };
    updateSize();
  };

  return [
    ref,
    isResizing,
    resizedStyle,
    startResizing,
    stopResizing,
    resize,
  ] as const;
};
