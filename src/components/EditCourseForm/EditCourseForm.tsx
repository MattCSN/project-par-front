import {CourseProps} from "../../services/types.ts";
import {InputText} from "../Input/InputText/InputText.tsx";

import "./EditCourseForm.css";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton.tsx";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.tsx";
import {useState} from "react";
import {InputCheckboxes} from "../Input/InputCheckboxes/InputCheckboxes.tsx";

interface EditCourseFormProps {
    courseDetails: CourseProps;
    onSave: (updatedDetails: CourseProps, colors: string[]) => void;
}

const golfColors = ["Orange", "Violet", "Rouge", "Bleu", "Jaune", "Blanc"];

const getUniqueColorsMap = (course: CourseProps): Map<string, boolean> => {
    const uniqueColorsMap = new Map<string, boolean>();
    course.holes.forEach(hole => hole.tees.forEach(tee => uniqueColorsMap.set(tee.Color, true)));
    golfColors.forEach(color => uniqueColorsMap.set(color, uniqueColorsMap.has(color)));
    return uniqueColorsMap;
};

const getSelectedColors = (golfColors: Map<string, boolean>): string[] =>
    Array.from(golfColors.keys()).filter(color => golfColors.get(color));

export const EditCourseForm = ({courseDetails, onSave}: EditCourseFormProps) => {
    const [formData, setFormData] = useState({
        ...courseDetails,
        checkboxes: new Map([
            ["Pitch and Putt", courseDetails.pitchAndPutt || false],
            ["Compact", courseDetails.compact || false]
        ]),
        golfColors: getUniqueColorsMap(courseDetails)
    });

    const handleUpdate = (inputId: string, newValue: string): void =>
        setFormData({...formData, [inputId]: newValue});

    const handleCheckUpdate = (key: string, newValue: boolean): void =>
        setFormData({...formData, checkboxes: new Map(formData.checkboxes).set(key, newValue)});

    const handleGolfColorUpdate = (color: string, newValue: boolean): void =>
        setFormData({...formData, golfColors: new Map(formData.golfColors).set(color, newValue)});

    const handleSubmit = () => onSave({
        ...formData,
        pitchAndPutt: formData.checkboxes.get("Pitch and Putt") || false,
        compact: formData.checkboxes.get("Compact") || false,
    }, getSelectedColors(formData.golfColors));

    const handleCancel = () => setFormData({
        ...courseDetails,
        checkboxes: new Map([
            ["Pitch and Putt", courseDetails.pitchAndPutt || false],
            ["Compact", courseDetails.compact || false]
        ]),
        golfColors: getUniqueColorsMap(courseDetails)
    });

    return (
        <form className="edit-course-form" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <InputText
                title="Nom du parcours"
                inputId="name"
                defaultValue={courseDetails.name}
                placeHolder="Course name"
                onUpdate={handleUpdate}
            />
            <InputCheckboxes
                title="Type de parcours"
                values={formData.checkboxes}
                onUpdate={handleCheckUpdate}
            />

            <InputCheckboxes
                title="Couleurs de départ"
                values={formData.golfColors}
                onUpdate={handleGolfColorUpdate}
                twoColumns
            />
            <div className="edit-course-buttons">
                <SecondaryButton text="Annuler" onClick={handleCancel}/>
                <PrimaryButton text="Modifier" onClick={handleSubmit}/>
            </div>
        </form>
    );
};
