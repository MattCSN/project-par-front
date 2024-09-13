import "./InputText.css";
import type React from "react";

import { useState } from "react";

type InputTextProps = {
  title: string;
  inputId: string;
  defaultValue: string;
  placeHolder: string;
  onUpdate: (inputId: string, newValue: string) => void;
};

export const InputText = ({
  title,
  inputId,
  defaultValue,
  placeHolder,
  onUpdate,
}: InputTextProps) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleUpdate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onUpdate(inputId, newValue);
    setValue(newValue);
  };

  return (
    <label className="input-text">
      {title}
      <input
        type="text"
        className="input-text-input"
        id={inputId}
        placeholder={placeHolder}
        value={value}
        onChange={handleUpdate}
      />
    </label>
  );
};
