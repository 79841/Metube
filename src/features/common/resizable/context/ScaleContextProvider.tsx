import { PropsWithChildren, useReducer } from "react";

import {
  ScaleContext,
  ScaleDispatchContext,
  scaleInitState,
  TScaleContext,
} from "./ScaleContext";

type TScaleAction =
  | { type: "SET"; scale: TScaleContext["scale"] }
  | { type: "RESET" };

const reducer = (state: TScaleContext, action: TScaleAction) => {
  switch (action.type) {
    case "SET":
      if (
        state.scale != null &&
        state.scale <= 0.3 &&
        action.scale != null &&
        action.scale < state.scale
      ) {
        return state;
      }
      return { scale: action.scale };
    case "RESET":
      return { scale: null };
    default:
      return state;
  }
};

type TScaleContextProvider = PropsWithChildren;
export const ScaleContextProvider = ({ children }: TScaleContextProvider) => {
  const [scale, dispatchScale] = useReducer(reducer, scaleInitState);

  const scaleDispatchContextValue = {
    setScale: (scale: TScaleContext["scale"]) =>
      dispatchScale({ type: "SET", scale }),
    resetScale: () => dispatchScale({ type: "RESET" }),
  };

  return (
    <ScaleContext.Provider value={scale}>
      <ScaleDispatchContext.Provider value={scaleDispatchContextValue}>
        {children}
      </ScaleDispatchContext.Provider>
    </ScaleContext.Provider>
  );
};
