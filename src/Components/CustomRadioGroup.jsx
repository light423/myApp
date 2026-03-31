import React from "react";
import { Radio } from "antd";
const CustomRadioGroup = ({ defaultValue, options, ...rest }) => {
  return (
    <>
      <Radio.Group
        block
        options={options}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
};

export default CustomRadioGroup;
