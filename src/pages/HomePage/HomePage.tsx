import {useState} from 'react';
import {useQuery} from 'react-query';
import {getCourseDetails, searchCourseDetails} from '../../services/courseService';
import Header from '../../components/Header/Header.tsx';
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

    const handleSearch = async (query: string) => {
        setCurrentPage(1);
        setSearchQuery(query);
        try {
            const data = await searchCourseDetails(query, 1, 12);
            setSearchResults(data);
        } catch {
            setSearchResults([]);
        }
    };

    const handlePageChange = async (newPage: number) => {
        setCurrentPage(newPage);
        if (searchQuery) {
            try {
                const data = await searchCourseDetails(searchQuery, newPage, 12);
                setSearchResults(data);
            } catch {
                setSearchResults([]);
            }
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    const showPaginator = searchQuery && currentPage === 1
        ? searchResults.length >= 12
        : coursesDTO.length >= 12;

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