import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = { FillGray100: "bg-gray_100 border-0" };
const shapes = { RoundedBorder5: "rounded-radius5" };
const sizes = {
  sm: "sm:pb-[18px] md:pb-[24px] pb-[35px] sm:pt-[15px] md:pt-[19px] pt-[29px] sm:px-[15px] md:px-[19px] px-[29px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder5"]),
  variant: PropTypes.oneOf(["FillGray100"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder5",
  variant: "FillGray100",
  size: "sm",
};
export { TextArea };
