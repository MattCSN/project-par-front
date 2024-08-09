import React from "react";
import "./ColoredButton.css";

interface ColoredButtonProps {
    text: string;
}

const ColoredButton: React.FC<ColoredButtonProps> = ({text}) => {
    return (
        <button className="colored-button">
            {text}
        </button>
    );
}

export default ColoredButton;