import "./Tag.css";

interface TagProps {
    text: string;
    type: string;
}

const Tag = ({text, type}: TagProps) => {
    return (
        <span className={`tag ${type}`}>
            {text}
        </span>
    );
};

export default Tag;