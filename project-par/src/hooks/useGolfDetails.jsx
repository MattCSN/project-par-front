import {useEffect, useState} from 'react';
import {fetchCourses, fetchGolfDetails, fetchHoles, fetchTees} from '../services/apiService';

const useGolfDetails = (id) => {
    const [golf, setGolf] = useState(null);
    const [courses, setCourses] = useState([]);
    const [holes, setHoles] = useState([]);
    const [tees, setTees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailsResponse = await fetchGolfDetails(id);
                setGolf(detailsResponse.data);

                const coursesResponse = await fetchCourses(id);
                setCourses(coursesResponse.data);

                const holesResponses = await Promise.all(coursesResponse.data.map(course => fetchHoles(course.id)));
                setHoles(holesResponses.flatMap(response => response.data));

                const teesResponses = await Promise.all(holesResponses.flatMap(response => response.data.map(hole => fetchTees(hole.id))));
                setTees(teesResponses.flatMap(response => response.data));
            } catch (error) {
                console.error('Error fetching golf details:', error);
            }
        };

        fetchData();
    }, [id]);

    return {golf, courses, holes, tees, setGolf, setCourses, setHoles, setTees};
};

export default useGolfDetails;