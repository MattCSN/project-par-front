import {GolfProps} from "../../services/types.ts";
import {InputText} from "../Input/InputText/InputText.tsx";

import "./EditGolfForm.css";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton.tsx";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.tsx";
import {useState} from "react";

interface EditGolfFormProps {
    golfDetails: GolfProps;
    onSave: (updatedDetails: GolfProps) => void;
}

export const EditGolfForm = ({golfDetails, onSave}: EditGolfFormProps) => {
    const [formData, setFormData] = useState(golfDetails);

    const handleUpdate = (inputId: string, newValue: string): void => {
        setFormData({...formData, [inputId]: newValue});
    };

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <form className="edit-golf-form" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <InputText
                title={"Nom du golf"}
                inputId={"name"}
                defaultValue={golfDetails.name}
                placeHolder={"Golf name"}
                onUpdate={handleUpdate}
            />
            <div className="edit-golf-address">
                <InputText
                    title={"Ville"}
                    inputId={"city"}
                    defaultValue={golfDetails.city}
                    placeHolder={"City"}
                    onUpdate={handleUpdate}
                />
                <InputText
                    title={"Code postal"}
                    inputId={"postalCode"}
                    defaultValue={golfDetails.postalCode}
                    placeHolder={"Postal code"}
                    onUpdate={handleUpdate}
                />
            </div>
            <InputText
                title={"Maps"}
                inputId={"googleMapLinks"}
                defaultValue={golfDetails.googleMapLinks}
                placeHolder={"https://maps.google.com/..."}
                onUpdate={handleUpdate}
            />
            <div className="edit-golf-buttons">
                <SecondaryButton text={"Annuler"} onClick={() => console.log("Annuler")}/>
                <PrimaryButton text={"Modifier"} onClick={() => handleSubmit()}/>
            </div>
        </form>
    );
};
