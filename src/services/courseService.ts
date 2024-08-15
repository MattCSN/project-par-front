import axiosInstance from './axiosInstance';
import {isAxiosError} from 'axios';

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
        if (isAxiosError(error) && error.response?.status === 404) {
            throw new Error('Course details not found (404)');
        }
        throw new Error('Error fetching course details');
    }
};

export const searchCourseDetails = async (searchTerm: string, page: number = 1, pageSize: number = 12) => {
    try {
        const response = await axiosInstance.get('/v1/courses/details/search', {
            params: {searchTerm, page, pageSize},
        });
        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response?.status === 404) {
            throw new Error('Search results not found (404)');
        }
        throw new Error('Error searching course details');
    }
};

export const getCourseDetailsById = async (id: string) => {
    try {
        const response = await axiosInstance.get('/v1/courses/' + id + '/details');
        console.log("Response Data:", response.data);
        console.log("Full Response:", response);
        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response?.status === 404) {
            throw new Error('Search results not found (404)');
        }
        throw new Error('Failed to fetch course details');
    }
};