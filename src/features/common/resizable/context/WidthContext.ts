import { createContext, useContext } from "react";

export type TWidthContext = {
  width: number | null;
};

type TWidthDispatchContext = {
  setWidth: (width: number) => void;
  resetWidth: () => void;
};

export const widthInitState = {
  width: null,
};

export const WidthContext = createContext<TWidthContext>(widthInitState);

export const WidthDispatchContext = createContext<TWidthDispatchContext>({
  setWidth: (width: number) => ({
    width,
  }),
  resetWidth: () => ({
    width: null,
  }),
});

export const useWidthContext = () => useContext(WidthContext);
export const useWidthDispatchContext = () => useContext(WidthDispatchContext);
