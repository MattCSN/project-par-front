import axiosInstance from './axiosInstance';

export type CourseDetailsDTO = {
    id: string;
    city: string;
    compact: boolean;
    country: string;
    golfName: string;
    name: string;
    numHoles: number;
    pitchAndPutt: boolean;
    postalCode: string;
};

export const getCourseDetails = async (page: number = 1, pageSize: number = 12) => {
    try {
        const response = await axiosInstance.get('/v1/courses/details', {
            params: {page, pageSize},
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching course details');
    }
};