import { createContext, useContext } from "react";

export type TSizeContext = {
  width: number | null;
  height: number | null;
};

type TSizeDispatchContext = {
  setSize: (size: { width: number; height: number }) => void;
  resetSize: () => void;
};

export const sizeInitState = { width: null, height: null };

export const SizeContext = createContext<TSizeContext>(sizeInitState);

export const SizeDispatchContext = createContext<TSizeDispatchContext>({
  setSize: (size: { width: number; height: number }) => ({
    width: size.width,
    height: size.height,
  }),
  resetSize: () => null,
});

export const useSizeContext = () => useContext(SizeContext);
export const useSizeDispatchContext = () => useContext(SizeDispatchContext);
