import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h2: "text-[20px]",
  h3: "text-[18px]",
  h4: "font-semibold text-[17px]",
  h5: "font-bold text-[15px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
