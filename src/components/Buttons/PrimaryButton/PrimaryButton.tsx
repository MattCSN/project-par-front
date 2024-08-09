import React from "react";
import Button from "../Button/Button.tsx";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, onClick}) => {
    return (
        <Button text={text} className="primary-button" onClick={onClick}/>
    );
}

export default PrimaryButton;