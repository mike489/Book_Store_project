import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white font-medium p-2 px-5 rounded-md bg-[#237943]"
    >
      {children}
    </button>
  );
};

export default Button;
