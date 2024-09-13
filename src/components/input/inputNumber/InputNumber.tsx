import type React from "react";

import { useCallback, useEffect, useState } from "react";

import { useDebounce } from "../../../hooks/useDebounce";
import "./InputNumber.css";

type InputNumberProps = {
  inputId: string;
  id: string;
  defaultValue: number;
  placeHolder: string;
  onUpdate: (id: string, value: number) => Promise<number>;
};

const InputNumber: React.FC<InputNumberProps> = ({
  inputId,
  id,
  defaultValue,
  placeHolder,
  onUpdate,
}) => {
  const [value, setValue] = useState(defaultValue);
  const debouncedValue = useDebounce(value, 500);

  const handleUpdate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(event.target.value);

      if (!isNaN(newValue)) {
        setValue(newValue);
      }
    },
    [],
  );

  useEffect(() => {
    if (debouncedValue !== defaultValue) {
      onUpdate(id, debouncedValue).catch((error) => {
        console.error("Update failed:", error);
      });
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

export default InputNumber;
