import React from "react";
import { Radio } from "antd";
const CustomRadio = ({ children, checked, disabled }) => {
  return (
    <>
      <Radio checked={checked} disabled={disabled}>
        {children}
      </Radio>
    </>
  );
};

export default CustomRadio;
