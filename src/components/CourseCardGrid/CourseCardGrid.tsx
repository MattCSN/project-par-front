import "./CourseCardGrid.css"
import CourseCard from "../CourseCard/CourseCard";
import {CourseDetailsDTO} from '../../services/courseService';
import classNames from 'classnames';

interface CourseCardGridProps {
    courses: CourseDetailsDTO[];
}

const CourseCardGrid = ({courses}: CourseCardGridProps) => {
    const gridClass = classNames('course-card-grid', {
        'more-than-three': courses.length > 3
    });

    return (
        <div className="course-card-grid-container">
            <div className={gridClass}>
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course}/>
                ))}
            </div>
        </div>
    );
};

export default CourseCardGrid;