import React from "react";

const Button = ({ children, onClick, primary = false, width }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white font-medium p-2 px-5 rounded-md ${
        primary ? "bg-[#237943]" : "bg-red-500"
      }`}
      style={{ width: width }}
    >
      {children}
    </button>
  );
};

export default Button;
