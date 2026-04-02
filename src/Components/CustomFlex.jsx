import React from "react";
import { Flex } from "antd";
const CustomFlex = ({
  className = "",
  type,
  children,
  size,
  direction = "horizontal",
  ...rest
}) => {
  return (
    <Flex
      className={`custom-flex ${className}`.trim()}
      direction={direction}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default CustomFlex;
