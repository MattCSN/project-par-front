import "./InputNumber.css";

interface InputNumberProps {
    inputId: string;
    value: number;
    placeHolder: string;
}

export const InputNumber = ({inputId, value, placeHolder}: InputNumberProps) => {

    return (
        <div className="input-number">
            <input
                type="number"
                className="input-number-input"
                id={inputId}
                defaultValue={value}
                placeholder={placeHolder}
            />
        </div>
    );
};