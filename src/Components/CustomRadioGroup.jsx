import React from "react";
import { Radio } from "antd";
import styled from "styled-components";

//스타일 정의
const StyleRadioGroup = styled(Radio.Group)`
  display: flex;
  gap: 4px;
  .ant-radio-button-wrapper {
    border-radius: 4px;
    flex: 1;
    min-width: 80px;
    display: inline-table;
  }
  .ant-radio-button-label {
    white-space: nowrap;
  }
  .ant-radio-button-wrapper-disabled {
    border-color: red;
  }
`;
const CustomRadioGroup = ({ defaultValue, options, optionType, ...rest }) => {
  return (
    <>
      <StyleRadioGroup
        options={options} //데이터 기반,서버에서 받은 데이터를 그대로 뿌려줄때
        defaultValue={defaultValue}
        optionType={optionType}
        {...rest}
      />
    </>
  );
};

export default CustomRadioGroup;
