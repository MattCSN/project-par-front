import React from "react";
import "./CaretButton.css";
import Caret from "../../assets/svg/icons/caret.svg";


interface NoNameButtonProps {
    text: string;
}

const CaretButton: React.FC<NoNameButtonProps> = ({text}) => {
    return (
        <button className="caret-button">
            {text}
            <img src={Caret} alt="Caret" className="caret"/>
        </button>
    );
};

export default CaretButton;