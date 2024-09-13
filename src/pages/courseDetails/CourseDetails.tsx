import type React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ReturnButton } from "../../components/buttons/returnButton/ReturnButton";
import CourseCardSelector from "../../components/courseCardSelector/CourseCardSelector";
import { GolfDetailsCard } from "../../components/golfDetailsCard/GolfDetailsCard";
import { HolesCard } from "../../components/holesCard/HolesCard";
import { SmallHeader } from "../../components/smallHeader/SmallHeader";
import { getCourseDetailsById } from "../../services/courseService";

import type { CourseProps } from "../../services/types";

import "./CourseDetails.css";

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [courseDetails, setCourseDetails] = useState<CourseProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (courseId) {
        try {
          const response: CourseProps = await getCourseDetailsById(courseId);
          setCourseDetails(response);
        } catch (error) {
          setError("Failed to fetch course details");
        }
      } else {
        setError("Invalid course ID");
      }
    };

    fetchCourseDetails().catch(console.error);
  }, [courseId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="global-container">
      <SmallHeader />
      <div className="course-details-content">
        <div className="course-details-back">
          <ReturnButton text="Retour à l’accueil" />
          <h1>{courseDetails.golf.name}</h1>
        </div>
        <div className="course-details-content-info">
          <div className="course-details-golf-info">
            <CourseCardSelector
              courses={courseDetails.golf.courses}
              activeCourseId={courseId}
            />
            <GolfDetailsCard courseDetails={courseDetails.golf} />
          </div>
          <div className="course-details-holes-info">
            <HolesCard details={courseDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
