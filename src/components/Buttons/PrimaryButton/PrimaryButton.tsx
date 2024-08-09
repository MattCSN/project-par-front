import React from "react";
import Button from "../Button/Button.tsx";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, onClick, disabled = false}) => {
    return (
        <Button text={text} className="primary-button" onClick={onClick} disabled={disabled}/>
    );
}

export default PrimaryButton;