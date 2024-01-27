import { PropsWithChildren, useReducer } from "react";
import {
  DndIsDraggingContext,
  DndIsDraggingDispatchContext,
  TDndIsDraggingContext,
  dndIsDraggingInitState,
} from "./DndIsDraggingContext";
import {
  DndPositionContext,
  DndPositionDispatchContext,
  TDndPositionContext,
  dndPositionInitState,
} from "./DndPositionContext";

type TIsDraggingAction = { type: "START_DRAGGING" } | { type: "STOP_DRAGGING" };

const isDraggingReducer = (
  state: TDndIsDraggingContext,
  action: TIsDraggingAction,
) => {
  switch (action.type) {
    case "START_DRAGGING":
      return { isDragging: true };
    case "STOP_DRAGGING":
      return { isDragging: false };
    default:
      return state;
  }
};
type TPositionAction =
  | { type: "MOVE"; position: TDndPositionContext["position"] }
  | { type: "RESET" };

const positionReducer = (
  state: TDndPositionContext,
  action: TPositionAction,
) => {
  switch (action.type) {
    case "MOVE":
      return {
        position: {
          x: state.position.x - action.position.x,
          y: state.position.y - action.position.y,
        },
      };
    case "RESET":
      return { position: { x: 0, y: 0 } };
    default:
      return state;
  }
};

type TDndContextProvider = PropsWithChildren;
export const DndContextProvider = ({ children }: TDndContextProvider) => {
  const [isDragging, dispatchIsDragging] = useReducer(
    isDraggingReducer,
    dndIsDraggingInitState,
  );

  const dndIsDraggingDispatchContextValue = {
    startDragging: () => {
      dispatchIsDragging({ type: "START_DRAGGING" });
    },

    stopDragging: () => {
      dispatchIsDragging({ type: "STOP_DRAGGING" });
    },
  };

  const [position, dispatchPosition] = useReducer(
    positionReducer,
    dndPositionInitState,
  );

  const dndPositionDispatchContextValue = {
    movePosition: (position: TDndPositionContext["position"]) => {
      dispatchPosition({ type: "MOVE", position });
    },
    resetPosition: () => {
      dispatchPosition({ type: "RESET" });
    },
  };

  return (
    <DndIsDraggingContext.Provider value={isDragging}>
      <DndPositionContext.Provider value={position}>
        <DndIsDraggingDispatchContext.Provider
          value={dndIsDraggingDispatchContextValue}
        >
          <DndPositionDispatchContext.Provider
            value={dndPositionDispatchContextValue}
          >
            {children}
          </DndPositionDispatchContext.Provider>
        </DndIsDraggingDispatchContext.Provider>
      </DndPositionContext.Provider>
    </DndIsDraggingContext.Provider>
  );
};
