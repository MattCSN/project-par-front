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

const updateData = async (url: string, payload: object) => {
    try {
        const {data} = await axiosInstance.patch(url, payload);
        return data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

export const updateHolePar = (holeId: string, par: number) =>
    updateData(`/v1/holes/${holeId}`, {par}).then(data => data.Par);

export const updateTeeDistance = (teeId: string, distance: number) =>
    updateData(`/v1/tees/${teeId}`, {distance}).then(data => data.Distance);

export const updateGolf = (golfId: string, name: string, city: string, postalCode: string, googleMapLinks: string) =>
    updateData(`/v1/golfs/${golfId}`, {name, city, postalCode, googleMapLinks}).then(data => data);

export const updateCourse = (courseId: string, name: string, pitchAndPutt: boolean, compact: boolean) =>
    updateData(`/v1/courses/${courseId}`, {name, pitchAndPutt, compact}).then(data => data);