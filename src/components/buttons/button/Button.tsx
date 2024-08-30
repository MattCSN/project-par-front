import type React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={`button ${className ?? ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children ? children : null}
      {text}
    </button>
  );
};

export default Button;
