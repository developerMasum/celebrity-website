import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="px-6 py-2 bg-transparent text-white  transition-colors border  hover:bg-[#c48f56] hover:text-white focus:bg-[#c48f56] focus:text-white
     border-[#c48f56] hover:border-[#c48f56] focus:outline-none  cursor-pointer "
    >
      {text}
    </button>
  );
};

export default Button;
