import {useState} from 'react';
import {useQuery} from 'react-query';
import {Header} from '../../components/Header/Header.tsx';
import {getCourseDetails, searchCourseDetails} from '../../services/courseService';

import CourseCardGrid from '../../components/CourseCardGrid/CourseCardGrid.tsx';
import Paginator from '../../components/Paginator/Paginator.tsx';

import './HomePage.css';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const {data: coursesDTO, error, isLoading} = useQuery(
        ['courseDetails', currentPage],
        () => getCourseDetails(currentPage, 12),
        {enabled: !searchQuery}
    );

    const fetchCourseDetails = async (query: string, page: number) => {
        try {
            const data = await searchCourseDetails(query, page, 12);
            setSearchResults(data);
        } catch {
            setSearchResults([]);
        }
    };

    const handleSearch = async (query: string) => {
        setCurrentPage(1);
        setSearchQuery(query);
        await fetchCourseDetails(query, 1);
    };

    const handlePageChange = async (newPage: number) => {
        setCurrentPage(newPage);
        if (searchQuery) {
            await fetchCourseDetails(searchQuery, newPage);
        }
    };

    if (isLoading) return (
        <div className="global-container">
            <Header onSearch={handleSearch}/>
            <div className="home-page-content">
                <CourseCardGrid courses={[]}
                                messageTitle="Greens en cours de tonte."
                                message="Chargement en cours..."/>
            </div>
        </div>
    );


    if (error) return (
        <div className="global-container">
            <Header onSearch={handleSearch}/>
            <div className="home-page-content">
                <CourseCardGrid courses={[]}
                                messageTitle="Fariways impraticables !"
                                message={(error as Error).message}/>
            </div>
        </div>
    );

    const showPaginator = searchQuery
        ? currentPage == 1 ? searchResults.length == 12 : searchResults
        : currentPage == 1 ? coursesDTO.length == 12 : coursesDTO

    return (
        <div className="global-container">
            <Header onSearch={handleSearch}/>
            <div className="home-page-content">
                <CourseCardGrid courses={searchQuery ? searchResults : coursesDTO}/>
            </div>
            {showPaginator && (
                <Paginator
                    currentPage={currentPage}
                    itemsCount={searchQuery ? searchResults.length : coursesDTO.length}
                    onNextPage={() => handlePageChange(currentPage + 1)}
                    onPreviousPage={() => handlePageChange(Math.max(currentPage - 1, 1))}
                />
            )}
        </div>
    );
};

export default HomePage;