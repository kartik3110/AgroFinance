import React from "react";

const sizes = {
  "3xl": "text-[28px] font-semibold",
  "2xl": "text-[22px] font-semibold",
  xl: "text-xl font-semibold",
  s: "text-base font-bold",
  md: "text-[17px] font-semibold",
  xs: "text-[15px] font-bold",
  lg: "text-lg font-semibold",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
