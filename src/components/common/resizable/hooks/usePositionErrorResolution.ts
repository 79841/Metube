import { useEffect, useReducer } from "react";
import { useWidthContext } from "../context/WidthContext";

type TPositionAction =
  | { type: "MOVE"; position: { x: number; y: number } }
  | { type: "RESET" };

const positionReducer = (
  state: { x: number; y: number },
  action: TPositionAction,
) => {
  switch (action.type) {
    case "MOVE":
      return {
        x: state.x - action.position.x,
        y: state.y - action.position.y,
      };
    case "RESET":
      return { x: 0, y: 0 };
    default:
      return state;
  }
};

export const usePositionErrorResolution = () => {
  const { width } = useWidthContext();

  const [position, dispatchPosition] = useReducer(positionReducer, {
    x: 0,
    y: 0,
  });

  const movePosition = (position: { x: number; y: number }) => {
    dispatchPosition({
      type: "MOVE",
      position,
    });
  };

  const resetPosition = () => {
    dispatchPosition({ type: "RESET" });
  };

  useEffect(() => {
    if (width === null) resetPosition();
  }, [width]);

  return [position, movePosition] as const;
};
