import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getCourseDetailsById} from '../../services/courseService.ts';
import {ApiResponse} from '../../services/types.ts';

const CourseDetails: React.FC = () => {
    const {courseId} = useParams<{ courseId: string }>();
    const [courseDetails, setCourseDetails] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            if (courseId) {
                try {
                    console.log("Fetching course details for ID:", courseId);
                    const response: ApiResponse = await getCourseDetailsById(courseId);
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
        <div>
            <h2>{courseDetails.golf.name}</h2>
            <h1>{courseDetails.course_details.name}</h1>
            <p>Number of Holes: {courseDetails.course_details.number_of_holes}</p>
            <p>Pitch and Putt: {courseDetails.course_details.pitch_and_putt ? 'Yes' : 'No'}</p>
            <p>Compact: {courseDetails.course_details.compact ? 'Yes' : 'No'}</p>
            <h2>Holes</h2>
            {courseDetails.course_details.holes.map(hole => (
                <div key={hole.details.id}>
                    <h3>Hole {hole.hole_number}</h3>
                    <p>Par: {hole.details.Par}</p>
                    <h4>Tees</h4>
                    {hole.tees.map((tee, index) => (
                        <div key={index}>
                            <p>Name: {tee.name}</p>
                            <p>Distance: {tee.distance}</p>
                            <p>Par: {tee.par}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CourseDetails;