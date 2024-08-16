import "./EditableTee.css";

interface EditableTeeProps {
    id: string;
    color: string;
    value: number;
}

export function EditableTee({id, color, value}: EditableTeeProps) {
    return (
        <div className="editable-tee-container">
            <h6>{color}</h6>
            <div className="editable-tee" key={id}>
                <input
                    className="editable-tee-input"
                    type="number"
                    id="Par"
                    key={id}
                    placeholder="Distance"
                    defaultValue={value}
                />
                <p>mètres</p>
            </div>
        </div>
    );
}