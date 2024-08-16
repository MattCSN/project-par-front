import "./CourseSelectorField.css";

interface GolfDetailsFieldProps {
    id: string;
    name: string;
    numberHoles: number;
    active?: boolean;
}

export function CourseSelectorField({id, name, active, numberHoles}: GolfDetailsFieldProps) {

    const handleClick = () => {
        if (!active) {
            window.location.href = `/course-details/${id}`;
        }
    };

    return (
        <div key={id}
             className={`course-selector-field-container ${active ? 'active' : ''}`}
             onClick={handleClick}>
            <div className="course-selector-field">
                <p>{name} ({numberHoles} trous)</p>
            </div>
        </div>
    );
}