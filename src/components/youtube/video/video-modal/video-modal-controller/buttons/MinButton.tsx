import { MouseEventHandler } from "react";
import { FaMinus } from "react-icons/fa6";

type TMinButtonProps = {
  handleMinimize: MouseEventHandler<HTMLDivElement>;
};
export const MinButton = ({ handleMinimize }: TMinButtonProps) => {
  return (
    <div
      className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-400 text-xs"
      onMouseDown={handleMinimize}
    >
      <FaMinus size={8} className="opacity-0 group-hover:opacity-100" />
    </div>
  );
};
