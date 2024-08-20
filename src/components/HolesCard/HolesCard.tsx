import {CourseProps} from "../../services/types.ts";
import {HolesTable} from "../HolesTable/HolesTable.tsx";

import Tag from "../Tag/Tag.tsx";

import "./HolesCard.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.tsx";
import EditIcon from "../../assets/svg/icons/edit-white.svg";
import {Modal} from "../Modal/Modal.tsx";
import {useState} from "react";
import {EditCourseForm} from "../EditCourseForm/EditCourseForm.tsx";
import {updateCourse, updateCourseColors} from "../../services/courseService.ts";

interface HolesCardProps {
    details: CourseProps;
}

export function HolesCard({details}: HolesCardProps) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [courseDetails, setCourseDetails] = useState(details);

    const handleSave = async (updatedDetails: CourseProps, updatedColors: string[]) => {
        setModalVisible(false);
        await updateCourse(updatedDetails.id, updatedDetails.name, updatedDetails.pitchAndPutt, updatedDetails.compact);
        const newTees = await updateCourseColors(updatedDetails.id, updatedColors);
        updatedDetails.holes.forEach(hole => {
            hole.tees = newTees.filter((tee: { HoleID: string; }) => tee.HoleID === hole.id);
        });
        setCourseDetails(updatedDetails);
    };

    return (
        <div className="holes-card-container">
            <div className="holes-card-header">
                <h2>{courseDetails.name}</h2>
                <div className="holes-card-tags">
                    <Tag text={`${courseDetails.numberHoles} trous`} type="positive"/>
                    {courseDetails.pitchAndPutt && <Tag text="Pitch and Putt" type="positive"/>}
                    {courseDetails.compact && <Tag text="Compact" type="positive"/>}
                </div>
            </div>
            <PrimaryButton text="Modifier" onClick={() => setModalVisible(true)}>
                <img src={EditIcon} alt="Edit Icon" className="edit-icon"/>
            </PrimaryButton>
            <div className="holes-card-content">
                <HolesTable holes={courseDetails.holes}/>
            </div>
            <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}
                   title="Modifier les informations du parcours">
                <EditCourseForm courseDetails={courseDetails} onSave={handleSave}/>
            </Modal>
        </div>
    );
}