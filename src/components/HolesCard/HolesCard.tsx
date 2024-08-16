import {CourseProps} from "../../services/types.ts";
import {HolesTable} from "../HolesTable/HolesTable.tsx";

import Tag from "../Tag/Tag.tsx";

import "./HolesCard.css";

interface HolesCardProps {
    courseDetails: CourseProps;
}

export function HolesCard({courseDetails}: HolesCardProps) {
    return (
        <div className="holes-card-container">
            <div className="holes-card-header">
                <h2>{courseDetails.name}</h2>
                <div className="course-card-tags">
                    <Tag text={`${courseDetails.numberHoles} trous`} type="positive"/>
                    {courseDetails.pitchAndPutt ?
                        <Tag text="Pitch and Putt" type="positive"/> : null}
                    {courseDetails.compact ? <Tag text="Compact" type="positive"/> : null}
                </div>
            </div>
            <div className="holes-card-content">
                <HolesTable holes={courseDetails.holes}/>
            </div>
        </div>
    );
}