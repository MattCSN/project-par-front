import "./EditableTee.css";
import { updateTeeDistance } from "../../services/courseService";
import InputNumber from "../input/inputNumber/InputNumber";

type EditableTeeProps = {
  id: string;
  color: string;
  value: number;
};

export function EditableTee({ id, color, value }: EditableTeeProps) {
  const handleDistanceUpdate = async (
    id: string,
    newValue: number,
  ): Promise<number> => {
    return updateTeeDistance(id, newValue);
  };

  return (
    <div className="editable-tee-container">
      <h6>{color}</h6>
      <div className="editable-tee">
        <InputNumber
          inputId="Distance"
          id={id}
          defaultValue={value}
          placeHolder="Distance"
          onUpdate={handleDistanceUpdate}
        />
        <p>mètres</p>
      </div>
    </div>
  );
}
