import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getCourseDetailsById} from '../../services/courseService.ts';
import {CourseProps} from '../../services/types.ts';
import {SmallHeader} from "../../components/SmallHeader/SmallHeader.tsx";

import './CourseDetails.css';
import {GolfDetailsCard} from "../../components/GolfDetailsCard/GolfDetailsCard.tsx";
import CourseCardSelector from "../../components/CourseCardSelector/CourseCardSelector.tsx";
import {ReturnButton} from "../../components/Buttons/ReturnButton/ReturnButton.tsx";
import {HolesCard} from "../../components/HolesCard/HolesCard.tsx";

const CourseDetails: React.FC = () => {
    const {courseId} = useParams<{ courseId: string }>();
    const [courseDetails, setCourseDetails] = useState<CourseProps | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            if (courseId) {
                try {
                    console.log("Fetching course details for ID:", courseId);
                    const response: CourseProps = await getCourseDetailsById(courseId);
                    console.log("API Response:", response);
                    setCourseDetails(response);
                } catch (error) {
                    console.error('Failed to fetch course details:', error);
                    setError('Failed to fetch course details');
                }
            } else {
                console.error('Invalid course ID');
                setError('Invalid course ID');
            }
        };

        fetchCourseDetails().catch(console.error);
    }, [courseId]);

    useEffect(() => {
        console.log("Course DETAILS:", courseDetails);
    }, [courseDetails]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!courseDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="global-container">
            <SmallHeader/>
            <div className="course-details-content">
                <div className="course-details-back">
                    <ReturnButton text="Retour à l’accueil"/>
                    <h1>{courseDetails.golf.name}</h1>
                </div>
                <div className="course-details-content-info">
                    <div className="course-details-golf-info">
                        <CourseCardSelector courses={courseDetails.golf.courses} activeCourseId={courseId}/>
                        <GolfDetailsCard courseDetails={courseDetails.golf}/>
                    </div>
                    <div className="course-details-holes-info">
                        <HolesCard courseDetails={courseDetails}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;