import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  UnderLineGray200: "border-b-[1px] border-gray_200",
  FillGray100: "bg-gray_100",
};
const shapes = { RoundedBorder5: "rounded-radius5" };
const sizes = {
  sm: "md:p-[24px] p-[35px] sm:px-[15px] sm:py-[18px]",
  md: "md:pb-[12px] pb-[18px] sm:pb-[9px]",
  lg: "sm:pb-[13px] md:pb-[17px] pb-[26px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder5"]),
  variant: PropTypes.oneOf(["UnderLineGray200", "FillGray100"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "UnderLineGray200",
  size: "sm",
};

export { Input };
