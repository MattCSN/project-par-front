import "./GolfDetailsField.css";

interface GolfDetailsFieldProps {
    title: string;
    value: string;
    last?: boolean;
}

export function GolfDetailsField({title, value, last}: GolfDetailsFieldProps) {
    return (
        <div className={`golf-details-field-container ${last ? 'last' : ''}`}>
            <div className="golf-details-field">
                <h4>{title}</h4>
                <p>{value}</p>
            </div>
        </div>
    );
}