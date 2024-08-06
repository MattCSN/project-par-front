import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {Card} from 'primereact/card';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import './GolfDetailsPage.css';
import {TabPanel, TabView} from 'primereact/tabview';
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";

const GolfDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [golf, setGolf] = useState(null);
    const [courses, setCourses] = useState([]);
    const [holes, setHoles] = useState([]);
    const [tees, setTees] = useState([]);
    const [editDialogVisible, setEditDialogVisible] = useState(false);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        const fetchGolfDetails = async () => {
            try {
                const detailsResponse = await axios.get(`http://localhost:8080/v1/golfs/${id}`);
                setGolf(detailsResponse.data);

                const coursesResponse = await axios.get(`http://localhost:8080/v1/golfs/${id}/courses`);
                setCourses(coursesResponse.data);

                const holesPromises = coursesResponse.data.map(course =>
                    axios.get(`http://localhost:8080/v1/courses/${course.id}/holes?pageSize=18`)
                );
                const holesResponses = await Promise.all(holesPromises);
                const allHoles = holesResponses.flatMap(response => response.data);
                setHoles(allHoles);

                const teesPromises = allHoles.map(hole =>
                    axios.get(`http://localhost:8080/v1/holes/${hole.id}/tees`)
                );
                const teesResponses = await Promise.all(teesPromises);
                const allTees = teesResponses.flatMap(response => response.data);
                setTees(allTees);
            } catch (error) {
                console.error('Error fetching golf details:', error);
            }
        };

        fetchGolfDetails();
    }, [id]);

    const handleEditClick = () => {
        setEditData(golf);
        setEditDialogVisible(true);
    };


    const handleEditChange = (e) => {
        const {name, value} = e.target;
        setEditData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditSubmit = async () => {
        try {
            const response = await axios.patch(`http://localhost:8080/v1/golfs/${id}`, editData);
            setGolf(response.data);
            setEditDialogVisible(false);
        } catch (error) {
            console.error('Error updating golf details:', error);
        }
    };

    return (
        <div className="golf-details-page">
            <h1>Golf Details Page</h1>
            <Button label="Retour à la page d'accueil" icon="pi pi-arrow-left" onClick={() => navigate('/')}/>
            <Button label="Modifier" icon="pi pi-pencil" onClick={handleEditClick}/>
            {golf && (
                <Card title={golf.name}>
                    <p>Country: {golf.country}</p>
                    <p>City: {golf.city}</p>
                    <p>Postal Code: {golf.postalCode}</p>
                    <p>Maps: <a href={golf.googleMapLinks}>{golf.googleMapLinks}</a></p>
                    <TabView>
                        {courses.map(course => (
                            <TabPanel key={course.id} header={course.name}>
                                <DataTable value={holes.filter(hole => hole.CourseID === course.id)}>
                                    <Column field="HoleNumber" header="Hole Number"/>
                                    <Column field="Par" header="Par"/>
                                    <Column field="tees" header="Tees" body={rowData => (
                                        <ul>
                                            {tees.filter(tee => tee.HoleID === rowData.id).map(tee => (
                                                <li key={tee.id}>{tee.Color}: {tee.Distance} meters</li>
                                            ))}
                                        </ul>
                                    )}/>
                                </DataTable>
                            </TabPanel>
                        ))}
                    </TabView>
                    <Dialog header={`Modifier les détails du golf : ${editData.name}`} visible={editDialogVisible}
                            onHide={() => setEditDialogVisible(false)}>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="city">Ville</label>
                                <InputText id="city" name="city" value={editData.city || ''}
                                           onChange={handleEditChange}/>
                            </div>
                            <div className="p-field">
                                <label htmlFor="postalCode">Code Postal</label>
                                <InputText id="postalCode" name="postalCode" value={editData.postalCode || ''}
                                           onChange={handleEditChange}/>
                            </div>
                            <Button label="Enregistrer" icon="pi pi-check" onClick={handleEditSubmit}/>
                        </div>
                    </Dialog>
                </Card>
            )}
        </div>
    );

};

export default GolfDetailsPage;