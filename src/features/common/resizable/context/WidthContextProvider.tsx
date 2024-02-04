import { PropsWithChildren, useReducer } from "react";

import {
  TWidthContext,
  WidthContext,
  WidthDispatchContext,
  widthInitState,
} from "./WidthContext";

type TWidthAction =
  | { type: "SET"; width: TWidthContext["width"] }
  | { type: "RESET" };

const reducer = (state: TWidthContext, action: TWidthAction) => {
  switch (action.type) {
    case "SET":
      if (
        state.width != null &&
        state.width <= 300 &&
        action.width != null &&
        action.width < state.width
      ) {
        return state;
      }
      return { width: action.width };
    case "RESET":
      return { width: null };
    default:
      return state;
  }
};

type TWidthContextProvider = PropsWithChildren;
export const WidthContextProvider = ({ children }: TWidthContextProvider) => {
  const [width, dispatchWidth] = useReducer(reducer, widthInitState);

  const widthDispatchContextValue = {
    setWidth: (width: TWidthContext["width"]) =>
      dispatchWidth({ type: "SET", width }),
    resetWidth: () => dispatchWidth({ type: "RESET" }),
  };

  return (
    <WidthContext.Provider value={width}>
      <WidthDispatchContext.Provider value={widthDispatchContextValue}>
        {children}
      </WidthDispatchContext.Provider>
    </WidthContext.Provider>
  );
};
