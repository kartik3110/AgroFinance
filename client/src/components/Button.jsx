import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    white: "bg-white-A700 shadow-xs",
    indigo_700: "bg-indigo-700 shadow-xs text-white-A700",
    indigo_600: "bg-indigo-600 text-white-A700",
    gray_100_04: "bg-gray-100_04",
    gray: "bg-gray-200 shadow-xs",
  },
  outline: {
    indigo_600: "border-indigo-600 border-2 border-solid",
    green_600: "border-green-600 border-2 border-solid",
    red_700: "border-red-700 border-2 border-solid",
  },
};
const sizes = {
  xs: "h-[21px] text-[17px]",
  md: "h-[40px] px-4 text-[15px]",
  lg: "h-[50px] px-6 text-lg",
  "2xl": "h-[55px] px-[13px]",
  sm: "h-[30px] px-[9px]",
  "4xl": "h-[70px] px-5",
  xl: "h-[50px] px-3",
  "3xl": "h-[60px] px-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xl",
  color = "indigo_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center shadow-md hover:shadow-xl transition ease-in duration-200 justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "md", "lg", "2xl", "sm", "4xl", "xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white",
    "gray",
    "indigo_700",
    "indigo_600",
    "gray_100_04",
    "green_600",
    "red_700",
  ]),
};

export { Button };
