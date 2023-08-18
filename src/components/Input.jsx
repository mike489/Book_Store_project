import React from "react";

const Input = ({ type, placeholder, handleChange }) => {
  return (
    <input
      className="border-none focus:outline-none focus:border-none w-full"
      type={type}
      placeholder={placeholder}
      onChange={(val) => handleChange(val.target.value)}
    />
  );
};

export default Input;
