import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getCourseDetailsById} from '../../services/courseService.ts';
import {CourseProps} from '../../services/types.ts';
import {SmallHeader} from "../../components/SmallHeader/SmallHeader.tsx";

import './CourseDetails.css';
import Tag from "../../components/Tag/Tag.tsx";

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
                    <p>retour button</p>
                    <h3>{courseDetails.golf.name}</h3>
                </div>
                <div className="course-details-content-info">
                    <div className="course-details-golf-info">
                        <div>
                            <h4>Parcours ({courseDetails.golf.courses.length})</h4>
                            {courseDetails.golf.courses.map(course => (
                                <p>{course.name}</p>
                            ))}
                        </div>
                        <div>
                            <h4>Informations du golf</h4>
                            <p>{courseDetails.golf.name}</p>
                            <p>{courseDetails.golf.city}</p>
                            <p>{courseDetails.golf.postalCode}</p>
                            <p>{courseDetails.golf.googleMapLinks}</p>
                        </div>
                    </div>
                    <div className="course-details-holes-info">
                        <h4>{courseDetails.name}</h4>
                        <div className="course-card-tags">
                            <Tag text={`${courseDetails.numberHoles} trous`} type="positive"/>
                            {courseDetails.pitchAndPutt ?
                                <Tag text="Pitch and Putt" type="positive"/> : null}
                            {courseDetails.compact ? <Tag text="Compact" type="positive"/> : null}
                        </div>
                        <table>
                            <thead>
                            <tr>
                                <th>Trou</th>
                                <th>Par</th>
                                <th>Départs</th>
                            </tr>
                            </thead>
                            <tbody>
                            {courseDetails.holes.map(hole => (
                                <tr key={hole.id}>
                                    <td>{hole.HoleNumber}</td>
                                    <td>{hole.Par}</td>
                                    <td>
                                        <table>
                                            <tbody>
                                            {hole.tees ? (
                                                hole.tees.map(tee => (
                                                    <tr key={tee.HoleID}>
                                                        <th>{tee.Color}</th>
                                                        <td>{tee.Distance} mètres</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={2}>No tees available</td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;