import {useState} from 'react';
import {useQuery} from 'react-query';
import {getCourseDetails, searchCourseDetails} from '../../services/courseService';
import Header from '../../components/Header/Header.tsx';
import CourseCardGrid from '../../components/CourseCardGrid/CourseCardGrid.tsx';
import Paginator from '../../components/Paginator/Paginator.tsx';
import './HomePage.css';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const {
        data: coursesDTO,
        error,
        isLoading
    } = useQuery(['courseDetails', currentPage], () => getCourseDetails(currentPage, 12),
        {
            enabled: !searchQuery // Disable this query if searchQuery is present
        });

    const handleSearch = async (query: string) => {
        setSearchQuery(query);
        const data = await searchCourseDetails(query, currentPage, 12);
        setSearchResults(data);
    };

    const handleNextPage = () => setCurrentPage((prevPage: number) => prevPage + 1);
    const handlePreviousPage = () => setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1));

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as any).message}</div>;

    return (
        <div className="global-container">
            <Header onSearch={handleSearch}/>
            <div className="home-page-content">
                <CourseCardGrid courses={searchQuery ? searchResults : coursesDTO}/>
            </div>
            <Paginator currentPage={currentPage} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage}/>
        </div>
    );
};

export default HomePage;