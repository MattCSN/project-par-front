import React from "react";

import ActionButton from "../Buttons/ActionButton/ActionButton.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";

import LogoType from "../../assets/svg/logos/logo-type.svg";
import LogoAPI from "../../assets/svg/logos/logo-api.svg";

import "./Header.css";

const getApp = () => {
    window.open(
        'https://joka-app.com/',
        '_blank'
    );
};

interface HeaderProps {
    onSearch?: (query: string) => void
}

const Header: React.FC<HeaderProps> = ({
                                           onSearch = () => {
                                           }
                                       }) => {
    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-info">
                    <a href="/">
                        <div className="header-logos">
                            <img src={LogoType} alt="JOKA"/>
                            <img src={LogoAPI} alt="API"/>
                        </div>
                    </a>
                    <ActionButton onClick={getApp} text="Télécharger Joka"/>
                </div>
                <div className="header-search-zone">
                    <h1 className="header-title">Parcours de golfs en France</h1>
                    <SearchBar onSearch={onSearch}/>
                </div>
            </div>
        </div>
    );
}

export default Header;