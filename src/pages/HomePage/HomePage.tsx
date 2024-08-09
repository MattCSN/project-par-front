import Header from "../../components/Header/Header.tsx";
import "./HomePage.css";
import CourseCardGrid from "../../components/CourseCardGrid/CourseCardGrid.tsx";
import Paginator from "../../components/Paginator/Paginator.tsx"; // Ensure this file exists and contains necessary styles

const HomePage = () => {
    return (
        <div className="global-container">
            <Header/>
            <div className="home-page-content">
                <CourseCardGrid/>
            </div>
            <Paginator/>
        </div>
    );
}

export default HomePage;