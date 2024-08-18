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

const fetchData = async (url: string, params: object = {}) => {
    try {
        const {data} = await axiosInstance.get(url, {params});
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response?.status === 404) {
            throw new Error('Resource not found (404)');
        }
        throw new Error('Error fetching data');
    }
};

export const getCourseDetails = (page: number = 1, pageSize: number = 12) =>
    fetchData('/v1/courses/details', {page, pageSize});

export const searchCourseDetails = (searchTerm: string, page: number = 1, pageSize: number = 12) =>
    fetchData('/v1/courses/details/search', {searchTerm, page, pageSize});

export const getCourseDetailsById = (id: string) =>
    fetchData(`/v1/courses/${id}/details`);

const API_BASE_URL = 'http://localhost:8080/v1';

export const updateHolePar = async (holeId: string, par: number): Promise<number> => {
    try {
        const response = await fetch(`${API_BASE_URL}/holes/${holeId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({par}),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error updating hole par');
        }

        const responseData = await response.json();
        return responseData.Par;
    } catch (error) {
        console.error('Error updating hole par:', error);
        throw error;
    }
};