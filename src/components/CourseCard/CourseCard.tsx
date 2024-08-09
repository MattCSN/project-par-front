// src/components/CourseCard/CourseCard.tsx
import "./CourseCard.css";
import Tag from "../Tag/Tag";
import CaretButton from "../Buttons/LinkButton/LinkButton";
import {CourseDetailsDTO} from '../../services/courseService';

interface CourseCardProps {
    course: CourseDetailsDTO;
}

function CourseCard({course}: CourseCardProps) {
    return (
        <div className="course-cards-container">
            <div className="course-card">
                <h2>{course.golfName}</h2>
                <h3>{course.name}</h3>

                <div className="course-card-tags">
                    <Tag text={`${course.numHoles} trous`} type="positive"/>
                    {course.pitchAndPutt ? <Tag text="Pitch and Putt" type="positive"/> : null}
                    {course.compact ? <Tag text="Compact" type="positive"/> : null}
                </div>

                <p>{course.postalCode} {course.city}</p>
                <p>{course.country}</p>
            </div>

            <div className="course-card-footer">
                <CaretButton text={"Voir les détails"}/>
            </div>
        </div>
    );
}

export default CourseCard;