import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const InputWrapper = styled.div`
  border: 1px solid #aab9cf;
  background-color: #fff;
`;
const StyledInput = styled(Input)`
  height: 42px;
  border-color: transparent;
`;
const CustomInput = () => {
  return (
    <>
      <InputWrapper>
        <StyledInput placeholder="Basic usage" allowClear={true} />
      </InputWrapper>
    </>
  );
};

export default CustomInput;
