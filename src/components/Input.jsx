import React from "react";

const Input = React.forwardRef(({ type, placeholder, ...rest }, ref) => {
  return (
    <input
      className="border-none focus:outline-none focus:border-none w-full"
      type={type}
      ref={ref}
      {...rest}
      placeholder={placeholder}
    />
  );
});

export default Input;
