import React from "react";
import { Flex } from "antd";
const CustomSpace = ({
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

export default CustomSpace;
