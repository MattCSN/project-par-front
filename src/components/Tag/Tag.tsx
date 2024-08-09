import React from "react";
import "./Tag.css";

interface TagProps {
    text: string;
    type: string;
}

const Tag: React.FC<TagProps> = ({ text, type }) => {
    return (
        <span className={`tag ${type}`}>
            {text}
        </span>
    );
};

export default Tag;