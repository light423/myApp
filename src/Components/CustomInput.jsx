import { Input, Form } from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  &.ant-input,
  &.ant-input-affix-wrapper {
    height: 42px;
    border-color: transparent;
    --ant-input-hover-border-color: red;
    --ant-input-active-border-color: yellow;
  }

  &.ant-input-disabled {
    border-color: #d8dee8;
    background-color: #f8faff;
  }
`;

const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label label {
    color: #fff;
  }
  .ant-form-item-explain-error {
    font-size: 12px;
    margin-top: 4px;
    color: #ff4d4f;
    text-align: left;
  }
`;

const CustomInput = ({ label, name, rules, ...rest }) => {
  return (
    <>
      <StyledFormItem name={name} label={label} rules={rules}>
        <StyledInput
          placeholder="Basic usage"
          {...rest}
          onPressEnter={(e) => {
            console.log("값이 변경됨", e.target.value);
          }}
          onClear={() => {
            console.log("입력값이 초과되었습니다.");
          }}
        />
      </StyledFormItem>
    </>
  );
};

export default CustomInput;
