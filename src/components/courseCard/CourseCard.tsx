import LinkButton from "../buttons/linkButton/LinkButton";
import Tag from "../tag/Tag";

import type { CourseDetailsDTO } from "../../services/courseService";

import "./CourseCard.css";

type CourseCardProps = {
  course: CourseDetailsDTO;
};

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="course-cards-container">
      <div className="course-card">
        <h2>{course.golfName}</h2>
        <h3>{course.name}</h3>

        <div className="course-card-tags">
          <Tag text={`${String(course.numHoles)} trous`} type="positive" />
          {course.pitchAndPutt ? (
            <Tag text="Pitch and Putt" type="positive" />
          ) : null}
          {course.compact ? <Tag text="Compact" type="positive" /> : null}
        </div>

        <p>
          {course.postalCode} {course.city}
        </p>
        <p>{course.country}</p>
      </div>

      <div className="course-card-footer">
        <LinkButton
          text={"Voir les détails"}
          href={`/course-details/${course.id}`}
        />
      </div>
    </div>
  );
}

export default CourseCard;
