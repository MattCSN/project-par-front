import {useState} from 'react';
import {useQuery} from 'react-query';
import {getCourseDetails} from '../../services/courseService';
import Header from '../../components/Header/Header.tsx';
import CourseCardGrid from '../../components/CourseCardGrid/CourseCardGrid.tsx';
import Paginator from '../../components/Paginator/Paginator.tsx';
import './HomePage.css';

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {
        data: coursesDTO,
        error,
        isLoading
    } = useQuery(['courseDetails', currentPage], () => getCourseDetails(currentPage, 12));

    const handleNextPage = () => setCurrentPage((prevPage: number) => prevPage + 1);
    const handlePreviousPage = () => setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1));

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as any).message}</div>;

    return (
        <div className="global-container">
            <Header/>
            <div className="home-page-content">
                <CourseCardGrid courses={coursesDTO}/>
            </div>
            <Paginator currentPage={currentPage} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage}/>
        </div>
    );
};

export default HomePage;