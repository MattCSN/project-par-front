import type React from "react";

import "./PrimaryButton.css";
import Button from "../button/Button";

type PrimaryButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <Button
      text={text}
      className="primary-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children ? children : null}
    </Button>
  );
};

export default PrimaryButton;
