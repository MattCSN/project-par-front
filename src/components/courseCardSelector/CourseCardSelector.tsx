import { CourseSelectorField } from "../courseSelectorField/CourseSelectorField";

import "./CourseCardSelector.css";

type CourseCardSelectorProps = {
  courses: { id: string; name: string; numberHoles: number }[];
  activeCourseId?: string;
};

function CourseCardSelector({
  courses,
  activeCourseId,
}: CourseCardSelectorProps) {
  return (
    <div className="course-card-selector-container">
      <h2>Parcours ({courses.length})</h2>
      <div className="course-card-selector-fields">
        {courses.map((course) => (
          <CourseSelectorField
            key={course.id}
            id={course.id}
            name={course.name}
            numberHoles={course.numberHoles}
            active={course.id == activeCourseId}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseCardSelector;
