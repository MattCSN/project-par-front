import "./InputNumber.css";
import React, {useState} from "react";

interface InputNumberProps {
    inputId: string;
    id: string;
    defaultValue: number;
    placeHolder: string;
    onUpdate: (id: string, value: number) => Promise<number>;
}

export const InputNumber = ({inputId, id, defaultValue, placeHolder, onUpdate}: InputNumberProps) => {
    const [value, setValue] = useState<number>(defaultValue);


    const handleUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);

        setValue(await onUpdate(id, newValue));
    };

    return (
        <div className="input-number">
            <input
                type="number"
                className="input-number-input"
                id={inputId}
                defaultValue={defaultValue}
                placeholder={placeHolder}
                value={value}
                onChange={handleUpdate}
            />
        </div>
    );
};