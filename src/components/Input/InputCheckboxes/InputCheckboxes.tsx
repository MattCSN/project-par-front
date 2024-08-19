import "./InputCheckboxes.css";
import React from "react";

interface InputCheckboxesProps {
    title: string;
    values: Map<string, boolean>;
    onUpdate: (key: string, newValue: boolean) => void;
    twoColumns?: boolean; // New prop
}

export const InputCheckboxes = ({title, values, onUpdate, twoColumns = false}: InputCheckboxesProps) => {

    const handleCheckboxChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        onUpdate(key, event.target.checked);
    };

    return (
        <div className={`input-checkboxes`}>
            <h6>{title}</h6>
            <div className={`${twoColumns ? 'two-columns' : ''}`}>
                {Array.from(values.entries()).map(([key, value]) => (
                    <div className="input-checkbox" key={key}>
                        <label>
                            <input
                                type="checkbox"
                                className="input-checkbox-input"
                                checked={value}
                                onChange={handleCheckboxChange(key)}
                            />
                            {key}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};
