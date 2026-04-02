import { Input } from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  &.ant-input-affix-wrapper {
    height: 36px;
  }

  &.ant-input-disabled {
    border-color: #d8dee8;
    background-color: #f8faff;
  }
`;

const CustomInput = ({ name, rules, ...rest }) => {
  return (
    <>
      <StyledInput
        allowClear
        {...rest}
        onPressEnter={(e) => {
          console.log("값이 변경됨", e.target.value);
        }}
        onClear={() => {
          console.log("입력값이 초과되었습니다.");
        }}
      />
    </>
  );
};

export default CustomInput;
