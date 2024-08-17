import React from "react";
import Button from "../Button/Button.tsx";
import "./SecondaryButton.css";

interface SecondaryButtonProps {
    text: string;
    onClick: () => void;
    children?: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({text, onClick, children}) => {
    return (
        <Button text={text} className="secondary-button" onClick={onClick}>
            {children ? children : null}
        </Button>
    );
}

export default SecondaryButton;