import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder20: "rounded-radius205",
  CircleBorder24: "rounded-radius24",
};
const variants = { FillDeeporangeA200: "bg-deep_orange_A200 text-white_A700" };
const sizes = {
  sm: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  md: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
  lg: "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
};

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
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf(["RoundedBorder20", "CircleBorder24"]),
  variant: PropTypes.oneOf(["FillDeeporangeA200"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder24",
  variant: "FillDeeporangeA200",
  size: "sm",
};

export { Button };
