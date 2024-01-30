import { MouseEventHandler } from "react";
import { MdOpenInFull } from "react-icons/md";

type TMaxButtonProps = {
  handleMaximize: MouseEventHandler<HTMLDivElement>;
};
export const MaxButton = ({ handleMaximize }: TMaxButtonProps) => {
  return (
    <div
      onMouseDown={handleMaximize}
      className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500 text-xs"
    >
      <MdOpenInFull size={8} className="opacity-0 group-hover:opacity-100" />
    </div>
  );
};
