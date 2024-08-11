import React from "react";

import Button from "../Button/Button.tsx";

import "./ActionButton.css";

interface ActionButtonProps {
    text: string;
    onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({text, onClick}) => {
    return (
        <Button text={text} className="action-button" onClick={onClick}/>
    );
}

export default ActionButton;