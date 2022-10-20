import React from "react";
const variantClasses = {
  h1: "font-medium lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px]",
  h2: "font-medium lg:text-[26px] xl:text-[33px] 2xl:text-[37px] 3xl:text-[45px] text-[50px]",
  h3: "font-medium lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-[46px]",
  h4: "font-medium lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px]",
  h5: "font-normal lg:text-[16px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px]",
  h6: "font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[26px] text-[29px]",
  body1:
    "font-normal lg:text-[14px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-[28px]",
  body2:
    "font-normal lg:text-[13px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px]",
  body3:
    "font-medium lg:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-[25px]",
  body4:
    "font-normal lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-[22px]",
  body5:
    "xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[8px]",
  body6:
    "font-bold text-[100px] lg:text-[53px] xl:text-[66px] 2xl:text-[75px] 3xl:text-[90px]",
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
