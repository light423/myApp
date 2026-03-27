import "./CustomButton.css";

const CustomButton = ({
  children,
  prefix,
  surfix,
  onClick,
  size = "medium",
  variant = "",
  type = "button",
  disabled = false,
  border = "",
}) => {
  //배열에 넣고 싶은 class를 나열함
  const classList = [
    "custom-button",
    `btn-${size}`,
    variant ? `btn-${variant}` : null,
    border ? `borderType-${border}` : null,
  ];

  // filter(boolean)로 null, undefined, 빈 문자열 등을 제거하고 공백으로 합친다.
  const className = classList.filter(Boolean).join(" ");
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {prefix && prefix}
      {children && <span>{children}</span>}
      {surfix && surfix}
    </button>
  );
};

export default CustomButton;
