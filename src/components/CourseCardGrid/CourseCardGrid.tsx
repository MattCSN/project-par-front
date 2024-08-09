import "./CourseCardGrid.css"
import CourseCard from "../CourseCard/CourseCard.tsx";

function CourseCardGrid() {

    return (
        <div className="course-card-grid-container">
            <div className="course-card-grid">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        </div>
    );
}

export default CourseCardGrid;