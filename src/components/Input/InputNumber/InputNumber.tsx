import "./InputNumber.css";
import React, {useState} from "react";
import {useDebounce} from "../../../hooks/useDebounce.ts";

interface InputNumberProps {
    inputId: string;
    id: string;
    defaultValue: number;
    placeHolder: string;
    onUpdate: (id: string, value: number) => Promise<number>;
}

export const InputNumber = ({inputId, id, defaultValue, placeHolder, onUpdate}: InputNumberProps) => {
    const [value, setValue] = useState(defaultValue);
    const debouncedValue = useDebounce(value, 500); // Adjust the debounce timeout as needed

    const handleUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        setValue(newValue);
    };

    React.useEffect(() => {
        if (debouncedValue !== defaultValue) {
            onUpdate(id, debouncedValue);
        }
    }, [debouncedValue, id, defaultValue, onUpdate]);

    return (
        <div className="input-number">
            <input
                type="number"
                className="input-number-input"
                id={inputId}
                placeholder={placeHolder}
                value={value}
                onChange={handleUpdate}
            />
        </div>
    );
};