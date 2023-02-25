import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler;
}

const Button: FC<Props> = ({ children, className, type = 'button', onClick }) => {

  return (
    <button className={`w-full bg-neutral-900 text-neutral-50 px-4 py-2 md:w-fit ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
