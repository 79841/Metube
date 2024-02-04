import { PropsWithChildren, useReducer } from "react";

import {
  SizeContext,
  SizeDispatchContext,
  sizeInitState,
  TSizeContext,
} from "./SizeContext";

type TSizeAction =
  | { type: "SET"; size: { width: number; height: number } }
  | { type: "RESET" };

const reducer = (state: TSizeContext, action: TSizeAction): TSizeContext => {
  switch (action.type) {
    case "SET":
      return { width: action.size.width, height: action.size.height };
    case "RESET":
      return { width: null, height: null };
    default:
      return state;
  }
};

type TSizeContextProvider = PropsWithChildren;
export const SizeContextProvider = ({ children }: TSizeContextProvider) => {
  const [size, dispatchSize] = useReducer(reducer, sizeInitState);

  const sizeDispatchContextValue = {
    setSize: (size: { width: number; height: number }) =>
      dispatchSize({ type: "SET", size }),
    resetSize: () => dispatchSize({ type: "RESET" }),
  };

  return (
    <SizeContext.Provider value={size}>
      <SizeDispatchContext.Provider value={sizeDispatchContextValue}>
        {children}
      </SizeDispatchContext.Provider>
    </SizeContext.Provider>
  );
};
