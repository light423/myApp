import styled from "styled-components";
import { Badge } from "antd";
const StyledBadge = styled(Badge)`
  margin: 0 8px;
  background-color: pink;
  && .ant-badge-count {
    background-color: deepskyblue;
    font-weight: bold;
    box-shadow: none; /* 기본 그림자 제거 (필요시) */
  }
`;
const CustomBadge = ({ children, count = 0 }) => {
  return (
    <>
      <StyledBadge count={count}>{children}</StyledBadge>
    </>
  );
};

export default CustomBadge;
