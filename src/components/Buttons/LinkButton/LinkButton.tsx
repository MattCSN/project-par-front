import React from "react";
import "./LinkButton.css";


interface LinkButtonProps {
    text: string;
    href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({text, href}) => {
    return (
        <a className="link-button" href={href}>
            {text}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.33335 14.1667C8.12002 14.1667 7.90666 14.0851 7.74416 13.9226C7.41833 13.5967 7.41833 13.07 7.74416 12.7442L10.4883 10L7.74416 7.25589C7.41833 6.93006 7.41833 6.40334 7.74416 6.0775C8.06999 5.75167 8.59671 5.75167 8.92255 6.0775L12.2559 9.41084C12.5817 9.73667 12.5817 10.2634 12.2559 10.5892L8.92255 13.9226C8.76005 14.0851 8.54669 14.1667 8.33335 14.1667Z"
                    fill="#296662"/>
            </svg>
        </a>
    );
};

export default LinkButton;