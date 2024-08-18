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
                <InputNumber inputId={"Distance"} defaultValue={value} placeHolder={"Distance"} onUpdate={
                    (value: number) => {
                        console.log("Just set DISTANCE to " + value);
                    }
                }/>
                <p>mètres</p>
            </div>
        </div>
    );
}