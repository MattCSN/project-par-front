import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import GolfDetailsPage from './pages/GolfDetailsPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about-us" element={<AboutUsPage/>}/>
                <Route path="/golfs/:id" element={<GolfDetailsPage/>}/>
                <Route path="/contact-us" element={<ContactUsPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;