import "./CourseCardGrid.css"
import CourseCard from "../CourseCard/CourseCard";
import {CourseDetailsDTO} from '../../services/courseService';
import classNames from 'classnames';
import DisplayMessage from "../DisplayMesage/DisplayMessage.tsx";

interface CourseCardGridProps {
    courses: CourseDetailsDTO[];
}

const CourseCardGrid = ({courses}: CourseCardGridProps) => {
    const gridClass = classNames('course-card-grid', {
        'more-than-three': courses.length > 3,
        'empty': courses.length < 1
    });

    const empty = courses.length < 1


    return (
        <div className="course-card-grid-container">
            <div className={gridClass}>
                {empty && (
                    <DisplayMessage title="Aucun parcours de golf trouvé." text="Veuillez vérifier votre recherche."/>
                )}
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course}/>
                ))}
            </div>
        </div>
    );
};

export default CourseCardGrid;