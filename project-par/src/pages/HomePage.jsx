import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'primereact/card';
import {ProgressSpinner} from 'primereact/progressspinner';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Message} from 'primereact/message';
import {useNavigate} from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(12);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            const url = searchQuery
                ? `http://localhost:8080/v1/golfs/search?searchTerm=${searchQuery}&page=${currentPage}&pageSize=${pageSize}`
                : `http://localhost:8080/v1/golfs?page=${currentPage}&pageSize=${pageSize}`;

            try {
                const response = await axios.get(url, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data!", error);
                setError("Error fetching data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, pageSize, searchQuery]);

    const handlePageChange = (newPage) => {
        if (newPage > 0) setCurrentPage(newPage);
    };

    const handleSearchChange = (event) => setSearchQuery(event.target.value);

    const clearSearch = () => setSearchQuery('');

    const handleCardClick = (id) => {
        navigate(`/golfs/${id}`);
    };

    return (
        <div className="homepage">
            <h1>Home Page</h1>
            <div className="search-container">
                <InputText
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for golf courses..."
                    className="search-input"
                />
                {searchQuery &&
                    <Button label="Clear" icon="pi pi-times" onClick={clearSearch} className="clear-button"/>}
            </div>
            {loading ? (
                <div className="spinner-container">
                    <ProgressSpinner/>
                </div>
            ) : error ? (
                <Message severity="error" text={error}/>
            ) : (
                <div className="card-container">
                    {data.map(golf => (
                        <div className="card-wrapper" key={golf.id}>
                            <Card title={golf.name}
                                  subTitle={`${golf.country ? golf.country : 'unknown postalCode'}, ${golf.postalCode ? golf.postalCode : 'unknown postalCode'} ${golf.city ? golf.city : 'unknown city'}`}
                                  onClick={() => handleCardClick(golf.id)}>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
            <div className="pagination">
                <Button label="Previous" icon="pi pi-chevron-left" onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}/>
                <span>Page {currentPage}</span>
                <Button label="Next" icon="pi pi-chevron-right" onClick={() => handlePageChange(currentPage + 1)}/>
            </div>
        </div>
    );
};

export default HomePage;