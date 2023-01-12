import React from "react";
import PropTypes from "prop-types";

const shapes = { CircleBorder25: "rounded-radius25" };
const variants = {
  OutlineGreen60063: "bg-green_600 shadow-bs text-white_A700",
};
const sizes = { sm: "p-[12px] sm:p-[6px] md:p-[8px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf(["CircleBorder25"]),
  variant: PropTypes.oneOf(["OutlineGreen60063"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder25",
  variant: "OutlineGreen60063",
  size: "sm",
};

export { Button };
