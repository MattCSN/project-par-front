import './App.css';
import HomePage from './pages/HomePage/HomePage.tsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CourseDetails from "./pages/CourseDetails/CourseDetails.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/course-details/:courseId" element={<CourseDetails/>}/>
            </Routes>
        </Router>
    );
}

export default App;