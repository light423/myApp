import React from "react";
import { Flex } from "antd";
const CustomFlex = ({
  className = "",
  type,
  children,
  size,
  orientation = "horizontal",
  ...rest
}) => {
  return (
    <Flex
      className={`custom-flex ${className}`.trim()}
      orientation={orientation}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default CustomFlex;
