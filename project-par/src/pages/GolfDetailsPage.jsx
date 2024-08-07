import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {TabPanel, TabView} from 'primereact/tabview';
import PropTypes from 'prop-types';

import EditCourseDialog from '../components/EditCourseDialog';
import EditGolfDialog from '../components/EditGolfDialog';
import TeeColorDialog from '../components/TeeColorDialog';
import useGolfDetails from '../hooks/useGolfDetails';
import {createTees, deleteTee, updateCourse, updateGolf, updateTee} from '../services/apiService';

import './GolfDetailsPage.css';

const GolfDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {golf, courses, holes, tees, setGolf, setCourses, setHoles, setTees} = useGolfDetails(id);

    const [dialogState, setDialogState] = useState({
        editDialogVisible: false,
        courseEditDialogVisible: false,
        teeColorDialogVisible: false,
        editTeeDialogVisible: false,
        editData: {},
        courseEditData: {},
        selectedTeeColors: [],
        selectedTee: null,
        selectedCourseId: null,
    });

    const handleEditClick = () => setDialogState({...dialogState, editData: golf, editDialogVisible: true});
    const handleEditChange = (e) => setDialogState({
        ...dialogState,
        editData: {...dialogState.editData, [e.target.name]: e.target.value}
    });
    const handleEditSubmit = async () => {
        try {
            const response = await updateGolf(id, dialogState.editData);
            setGolf(response.data);
            setDialogState({...dialogState, editDialogVisible: false});
        } catch (error) {
            console.error('Error updating golf details:', error);
        }
    };

    const handleCourseEditClick = (course) => setDialogState({
        ...dialogState,
        courseEditData: course,
        courseEditDialogVisible: true
    });
    const handleCourseEditChange = (e) => setDialogState({
        ...dialogState,
        courseEditData: {...dialogState.courseEditData, [e.target.name]: e.target.value}
    });
    const handleCourseEditSubmit = async () => {
        try {
            const response = await updateCourse(dialogState.courseEditData.id, dialogState.courseEditData);
            setCourses(prevCourses => prevCourses.map(course => course.id === response.data.id ? response.data : course));
            setDialogState({...dialogState, courseEditDialogVisible: false});
        } catch (error) {
            console.error('Error updating course details:', error);
        }
    };

    const handleTeeColorSelect = (courseId) => setDialogState({
        ...dialogState,
        selectedCourseId: courseId,
        teeColorDialogVisible: true
    });
    const handleTeeColorChange = (e) => {
        const selectedColors = e.checked ? [...dialogState.selectedTeeColors, e.value] : dialogState.selectedTeeColors.filter(color => color !== e.value);
        setDialogState({...dialogState, selectedTeeColors: selectedColors});
    };
    const handleTeeColorSubmit = async () => {
        try {
            const newTees = await Promise.all(dialogState.selectedTeeColors.map(color => createTees(dialogState.selectedCourseId, color)));
            setTees(prevTees => [...prevTees, ...newTees.flatMap(response => response.data)]);
            setDialogState({...dialogState, teeColorDialogVisible: false});
        } catch (error) {
            console.error("Error submitting tee color:", error);
        }
    };

    const handleDeleteTee = async (teeId) => {
        try {
            await deleteTee(teeId);
            setTees(prevTees => prevTees.filter(tee => tee.id !== teeId));
        } catch (error) {
            console.error('Error deleting tee:', error);
        }
    };

    const handleEditTeeSubmit = async () => {
        try {
            await updateTee(dialogState.selectedTee.id, dialogState.selectedTee);
            setTees(prevTees => prevTees.map(tee => (tee.id === dialogState.selectedTee.id ? dialogState.selectedTee : tee)));
            setDialogState({...dialogState, editTeeDialogVisible: false});
        } catch (error) {
            console.error('Error editing tee:', error);
        }
    };

    return (
        <div className="golf-details-page">
            <h1>Golf Details Page</h1>
            <Button label="Retour à la page d'accueil" icon="pi pi-arrow-left" onClick={() => navigate('/')}/>
            {golf && (
                <Card title={golf.name}>
                    <Button label="Modifier les détails du golf" icon="pi pi-pencil" onClick={handleEditClick}/>
                    <p>Country: {golf.country}</p>
                    <p>City: {golf.city}</p>
                    <p>Postal Code: {golf.postalCode}</p>
                    <p>Maps: <a href={golf.googleMapLinks}>{golf.googleMapLinks}</a></p>
                    <TabView>
                        {courses.map(course => (
                            <TabPanel key={course.id} header={course.name}>
                                <Button label="Renommer le parcours" icon="pi pi-pencil"
                                        onClick={() => handleCourseEditClick(course)}/>
                                <Button label="Ajouter une couleur de départ" icon="pi pi-plus"
                                        onClick={() => handleTeeColorSelect(course.id)}/>
                                <DataTable value={holes.filter(hole => hole.CourseID === course.id)}>
                                    <Column field="HoleNumber" header="Hole Number"/>
                                    <Column field="Par" header="Par"/>
                                    <Column field="Tees" header="Tees" body={rowData => (
                                        <ul>
                                            {tees.filter(tee => tee.HoleID === rowData.id).map(tee => (
                                                <li key={tee.id}>
                                                    {tee.Color}: {tee.Distance} meters
                                                    <Button icon="pi pi-trash" className="p-button-danger"
                                                            onClick={() => handleDeleteTee(tee.id)}/>
                                                </li>
                                            ))}
                                        </ul>
                                    )}/>
                                </DataTable>
                            </TabPanel>
                        ))}
                    </TabView>
                    <EditGolfDialog dialogState={dialogState} setDialogState={setDialogState}
                                    handleEditChange={handleEditChange} handleEditSubmit={handleEditSubmit}/>
                    <EditCourseDialog dialogState={dialogState} setDialogState={setDialogState}
                                      handleCourseEditChange={handleCourseEditChange}
                                      handleCourseEditSubmit={handleCourseEditSubmit}/>
                    <TeeColorDialog dialogState={dialogState} setDialogState={setDialogState}
                                    handleTeeColorChange={handleTeeColorChange}
                                    handleTeeColorSubmit={handleTeeColorSubmit}/>
                </Card>
            )}
        </div>
    );
};

GolfDetailsPage.propTypes = {
    dialogState: PropTypes.object.isRequired,
    setDialogState: PropTypes.func.isRequired,
    handleEditChange: PropTypes.func.isRequired,
    handleEditSubmit: PropTypes.func.isRequired,
    handleCourseEditChange: PropTypes.func.isRequired,
    handleCourseEditSubmit: PropTypes.func.isRequired,
    handleTeeColorChange: PropTypes.func.isRequired,
    handleTeeColorSubmit: PropTypes.func.isRequired
};

export default GolfDetailsPage;