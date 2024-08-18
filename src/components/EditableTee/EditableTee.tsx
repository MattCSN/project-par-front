import "./EditableTee.css";
import {InputNumber} from "../Input/InputNumber/InputNumber.tsx";

interface EditableTeeProps {
    id: string;
    color: string;
    value: number;
}

export function EditableTee({id, color, value}: EditableTeeProps) {
    return (
        <div key={id} className="editable-tee-container">
            <h6>{color}</h6>
            <div className="editable-tee" key={id}>
                <InputNumber inputId={"Distance"} value={value} placeHolder={"Distance"}/>
                <p>mètres</p>
            </div>
        </div>
    );
}