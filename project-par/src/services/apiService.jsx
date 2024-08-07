import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/v1';

export const fetchGolfDetails = (id) => axios.get(`${API_BASE_URL}/golfs/${id}`);
export const fetchCourses = (golfId) => axios.get(`${API_BASE_URL}/golfs/${golfId}/courses`);
export const fetchHoles = (courseId) => axios.get(`${API_BASE_URL}/courses/${courseId}/holes?pageSize=18`);
export const fetchTees = (holeId) => axios.get(`${API_BASE_URL}/holes/${holeId}/tees`);
export const updateGolf = (id, data) => axios.patch(`${API_BASE_URL}/golfs/${id}`, data);
export const updateCourse = (id, data) => axios.patch(`${API_BASE_URL}/courses/${id}`, data);
export const createTees = (courseId, color) => axios.post(`${API_BASE_URL}/courses/${courseId}/tees?color=${color}`);
export const deleteTee = (id) => axios.delete(`${API_BASE_URL}/tees/${id}`);
export const updateTee = (id, data) => axios.patch(`${API_BASE_URL}/tees/${id}`, data);