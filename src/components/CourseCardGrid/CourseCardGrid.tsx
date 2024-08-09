import "./CourseCardGrid.css"
import CourseCard from "../CourseCard/CourseCard.tsx";
import {CourseDetailsDTO} from '../../services/courseService';

interface CourseCardGridProps {
    courses: CourseDetailsDTO[];
}

const CourseCardGrid = ({courses}: CourseCardGridProps) => {
    return (
        <div className="course-card-grid-container">
            <div className="course-card-grid">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course}/>
                ))}
            </div>
        </div>
    );
};

export default CourseCardGrid;
