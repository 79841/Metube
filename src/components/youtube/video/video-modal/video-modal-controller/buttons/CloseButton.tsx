import React, { MouseEventHandler } from "react";
import { IoIosClose } from "react-icons/io";

type TCloseButtonProps = {
  handleClose: MouseEventHandler<HTMLDivElement>;
};
export const CloseButton = ({ handleClose }: TCloseButtonProps) => {
  return (
    <div
      onMouseDown={handleClose}
      className="flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs"
    >
      <IoIosClose size={13} className="opacity-0 group-hover:opacity-100" />
    </div>
  );
};
