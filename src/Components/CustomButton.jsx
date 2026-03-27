import "./CustomButton.css";

const CustomButton = ({
  children,
  prefix,
  suffix,
  onClick,
  size = "medium",
  variant = "",
  type = "button",
  disabled = false,
  border = "",
  className: customClassName,
  ...props //나머지 속성들
}) => {
  //배열에 넣고 싶은 class를 나열함
  const classList = [
    "custom-button",
    `btn-${size}`,
    variant ? `btn-${variant}` : null,
    border ? `borderType-${border}` : null,
    customClassName,
  ];

  // filter(boolean)로 null, undefined, 빈 문자열 등을 제거하고 공백으로 합친다.
  const className = classList.filter(Boolean).join(" ");
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
    >
      {prefix && prefix}
      {children && <span>{children}</span>}
      {suffix && suffix}
    </button>
  );
};

export default CustomButton;
