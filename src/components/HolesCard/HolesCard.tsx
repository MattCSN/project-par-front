import {CourseProps} from "../../services/types.ts";
import {HolesTable} from "../HolesTable/HolesTable.tsx";

import Tag from "../Tag/Tag.tsx";

import "./HolesCard.css";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.tsx";
import EditIcon from "../../assets/svg/icons/edit-white.svg";

interface HolesCardProps {
    courseDetails: CourseProps;
}

export function HolesCard({courseDetails}: HolesCardProps) {
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
            <PrimaryButton text="Modifier" onClick={() => console.log("Edit button clicked")}>
                <img src={EditIcon} alt="Edit Icon" className="edit-icon"/>
            </PrimaryButton>
            <div className="holes-card-content">
            <HolesTable holes={courseDetails.holes}/>
            </div>
        </div>
    );
}