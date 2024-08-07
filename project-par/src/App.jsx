import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import GolfDetailsPage from './pages/GolfDetailsPage';
import ContactUsPage from './pages/ContactUsPage';

import 'primereact/resources/themes/saga-blue/theme.css'; // Thème de PrimeReact
import 'primereact/resources/primereact.min.css'; // Styles de base de PrimeReact
import 'primeicons/primeicons.css';
import {PrimeReactProvider} from "primereact/api"; // Icônes de PrimeReact
import './styles/global.css';

const App = () => {
    return (
        <PrimeReactProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about-us" element={<AboutUsPage/>}/>
                    <Route path="/golfs/:id" element={<GolfDetailsPage/>}/>
                    <Route path="/contact-us" element={<ContactUsPage/>}/>
                </Routes>
            </Router>
        </PrimeReactProvider>
    );
};

export default App;