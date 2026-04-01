import React from "react";
import { Space } from "antd";
const CustomSpace = ({
  className = "",
  type,
  children,
  size,
  direction = "horizontal",
  ...rest
}) => {
  const getSpacing = () => {
    if (size) return size;
    if (type === "button-group") return 8;
    return 16; // 기본간격
  };
  return (
    <Space
      className={`custom-space ${className}`.trim()}
      size={getSpacing()}
      direction={direction}
      {...rest}
    >
      {children}
    </Space>
  );
};

export default CustomSpace;
