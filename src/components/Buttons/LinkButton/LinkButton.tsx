import React from "react";
import "./LinkButton.css";
import Caret from "../../../assets/svg/icons/caret.svg";


interface LinkButton {
    text: string;
}

const LinkButton: React.FC<LinkButton> = ({text}) => {
    return (
        <button className="link-button">
            {text}
            <img src={Caret} alt="Caret" className="caret"/>
        </button>
    );
};

export default LinkButton;