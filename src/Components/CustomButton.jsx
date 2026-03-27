import React from "react";

const CustomButton = ({
  children,
  icon,
  iconPosition = "left",
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={`btn btn-${className}`}>
      {icon && iconPosition === "left" && (
        <span className="icon-area">{icon}</span>
      )}
      {children && <span className="text-area">{children}</span>}

      {icon && iconPosition === "right" && (
        <span className="icon-area">{icon}</span>
      )}
    </button>
  );
};

export default CustomButton;
