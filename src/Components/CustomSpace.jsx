import React from "react";
import { Space } from "antd";
const CustomSpace = ({
  className = "",
  type,
  children,
  size,
  orientation = "horizontal",
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
      orientation={orientation}
      {...rest}
    >
      {children}
    </Space>
  );
};

export default CustomSpace;
