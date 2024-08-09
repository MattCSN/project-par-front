import React from "react";
import "./Button.css";

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({text, className, onClick, disabled = false}) => {
    return (
        <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;