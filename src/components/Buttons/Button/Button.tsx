import React from "react";
import "./Button.css";

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({text, className, onClick}) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;