import React from "react";
import { Radio } from "antd";
import styled from "styled-components";

const StyleRadio = styled(Radio)``;
const CustomRadio = ({ children, checked, disabled }) => {
  return (
    <>
      <StyleRadio checked={checked} disabled={disabled}>
        {children}
      </StyleRadio>
    </>
  );
};

export default CustomRadio;
