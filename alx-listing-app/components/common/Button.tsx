import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[86px] h-[30px] bg-[#161117] rounded-full text-white text-[14px] font-semibold font-quicksand hover:opacity-90 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;