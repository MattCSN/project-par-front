import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import CourseDetails from "./pages/courseDetails/CourseDetails";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course-details/:courseId" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
