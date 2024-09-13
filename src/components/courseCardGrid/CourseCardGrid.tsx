import classNames from "classnames";

import CourseCard from "../courseCard/CourseCard";
import DisplayMessage from "../displayMesage/DisplayMessage";

import type { CourseDetailsDTO } from "../../services/courseService";

import "./CourseCardGrid.css";

type CourseCardGridProps = {
  courses: CourseDetailsDTO[];
  messageTitle?: string;
  message?: string;
};

const CourseCardGrid = ({
  courses,
  messageTitle,
  message,
}: CourseCardGridProps) => {
  const gridClass = classNames("course-card-grid", {
    "more-than-three": courses.length > 3,
    empty: courses.length < 1,
  });

  const empty = courses.length < 1;

  return (
    <div className="course-card-grid-container">
      <div className={gridClass}>
        {empty && (
          <DisplayMessage
            title={messageTitle || "Aucun parcours de golf trouvé."}
            text={message || "Veuillez vérifier votre recherche."}
          />
        )}
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCardGrid;
