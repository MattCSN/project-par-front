import type React from "react";

import "./ActionButton.css";
import Button from "../button/Button";

type ActionButtonProps = {
  text: string;
  onClick: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return <Button text={text} className="action-button" onClick={onClick} />;
};

export default ActionButton;
