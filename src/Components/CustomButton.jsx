import styled, { css } from "styled-components";

const StyledButton = styled.button`
  /* 기본 스타일 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 36px;
  padding: 9px 16px;
  cursor: pointer;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  white-space: nowrap;
  border: 1px solid #e0e0e0;

  /* 사이즈 조절 */
  ${(props) =>
    props.$size === "small" &&
    css`
      min-height: 32px;
      padding: 4px 8px;
      border-radius: 4px;
    `}
  ${(props) =>
    props.$size === "large" &&
    css`
      min-height: 40px;
      padding: 10px 18px;
      border-radius: 8px;
    `}

    /* varient */
    ${(props) =>
    props.$variant === "primary" &&
    css`
      color: #fff;
      background-color: #2b5af5;
      border-color: #2b5af5;
    `}
      ${(props) =>
    props.$variant === "secondary" &&
    css`
      color: #fff;
      background-color: #09244b;
      border-color: #09244b;
    `}
        &:disabled {
    border-color: #999;
    opacity: 0.5; /* 반투명 처리 (가장 간편한 방법) */
    filter: grayscale(1);
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const CustomButton = ({
  type = "button",
  children,
  prefix,
  suffix,
  onClick,
  size = "medium",
  variant = "",
  disabled = false,
  className: customClassName,
  ...props //나머지 속성들
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $size={size}
      $variant={variant}
      className={customClassName}
      {...props}
    >
      {prefix && prefix}
      {children && <span>{children}</span>}
      {suffix && suffix}
    </StyledButton>
  );
};

export default CustomButton;
