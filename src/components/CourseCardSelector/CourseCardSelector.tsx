import {CourseSelectorField} from "../CourseSelectorField/CourseSelectorField.tsx";

import "./CourseCardSelector.css";

interface CourseCardSelectorProps {
    courses: { id: string; name: string; numberHoles: number; }[];
    activeCourseId?: string;
}

function CourseCardSelector({courses, activeCourseId}: CourseCardSelectorProps) {
    return (
        <div className="course-card-selector-container">
            <h2>Parcours ({courses.length})</h2>
            <div className="course-card-selector-fields">
                {courses.map(course => (
                    <CourseSelectorField id={course.id}
                        name={course.name}
                                         numberHoles={course.numberHoles}
                                         active={course.id == activeCourseId}/>
                ))}
            </div>
        </div>
    );
}

export default CourseCardSelector;