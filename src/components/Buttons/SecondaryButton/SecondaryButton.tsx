import React from "react";
import Button from "../Button/Button.tsx";
import EditIcon from "../../../assets/svg/icons/edit.svg"; // Adjust the path as necessary
import "./SecondaryButton.css";

interface SecondaryButtonProps {
    text: string;
    onClick: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({text, onClick}) => {
    return (
        <Button text={text} className="secondary-button" onClick={onClick}>
            <img src={EditIcon} alt="Edit Icon" className="edit-icon"/>
        </Button>
    );
}

export default SecondaryButton;