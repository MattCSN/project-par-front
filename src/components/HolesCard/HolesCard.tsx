import {CourseProps} from "../../services/types.ts";
import {HolesTable} from "../HolesTable/HolesTable.tsx";

import Tag from "../Tag/Tag.tsx";

import "./HolesCard.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.tsx";
import EditIcon from "../../assets/svg/icons/edit-white.svg";
import {Modal} from "../Modal/Modal.tsx";
import {useState} from "react";
import {EditCourseForm} from "../EditCourseForm/EditCourseForm.tsx";

interface HolesCardProps {
    courseDetails: CourseProps;
}

export function HolesCard({courseDetails}: HolesCardProps) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCourseDetails, setGolfDetails] = useState(courseDetails);

    const handleSave = async (updatedDetails: CourseProps) => {
        setModalVisible(false);
        // await updateGolf(updatedDetails.id, updatedDetails.name, updatedDetails.city, updatedDetails.postalCode, updatedDetails.googleMapLinks);
        setGolfDetails(updatedDetails);
    };

    return (
        <div className="holes-card-container">
            <div className="holes-card-header">
                <h2>{courseDetails.name}</h2>
                <div className="holes-card-tags">
                    <Tag text={`${courseDetails.numberHoles} trous`} type="positive"/>
                    {courseDetails.pitchAndPutt ?
                        <Tag text="Pitch and Putt" type="positive"/> : null}
                    {courseDetails.compact ? <Tag text="Compact" type="positive"/> : null}
                </div>
            </div>
            <PrimaryButton text="Modifier" onClick={() => setModalVisible(true)}>
                <img src={EditIcon} alt="Edit Icon" className="edit-icon"/>
            </PrimaryButton>
            <div className="holes-card-content">
                <HolesTable holes={courseDetails.holes}/>
            </div>
            <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}
                   title={"Modifier les informations du parcours"}>
                <EditCourseForm courseDetails={selectedCourseDetails} onSave={handleSave}/>
            </Modal>
        </div>
    );
}