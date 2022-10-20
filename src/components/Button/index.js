import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  icbCircleBorder30: "rounded-radius30",
};
const variants = {
  OutlineGray400:
    "bg-gradient1  outline outline-[1px] outline-gray_400 text-white_A700",
  FillRed600: "bg-red_600 text-white_A700",
  icbGradientLightgreen200Lightgreen20000: "bg-gradient ",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = {
  sm: "2xl:p-[10px] 3xl:p-[12px] p-[14px] lg:p-[7px] xl:p-[9px]",
  md: "xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] p-[18px] lg:p-[9px]",
  smIcn: "p-[11px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px]",
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
  shape: PropTypes.oneOf(["RoundedBorder8", "icbCircleBorder30"]),
  variant: PropTypes.oneOf([
    "OutlineGray400",
    "FillRed600",
    "icbGradientLightgreen200Lightgreen20000",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineGray400",
  size: "sm",
};

export { Button };
