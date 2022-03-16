import { FC, MouseEventHandler } from "react";

interface ButtonArgs {
  onClick: MouseEventHandler<HTMLButtonElement>,
};

export const Button: FC<ButtonArgs> = ({ onClick, children }) => {

  return (
    <button className="bg-accent-1 font-semibold rounded-md w-32 text-sm py-2 hover:bg-accent-2" onClick={onClick}>
      {children}
    </button>
  )
};
