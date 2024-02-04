import { useRef } from "react";

export const useBackgroundImage = (imageUrl: string) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    if (!ref.current) return;
    ref.current.style.backgroundImage = `url(${imageUrl})`;
  };

  const handleMouseOut = () => {
    if (!ref.current) return;
    ref.current.style.backgroundImage = "none";
  };

  return [ref, handleMouseOver, handleMouseOut] as const;
};
