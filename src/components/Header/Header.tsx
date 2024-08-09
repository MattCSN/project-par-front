import "./Header.css"

import LogoType from "../../assets/svg/logos/logo-type.svg";
import LogoAPI from "../../assets/svg/logos/logo-api.svg";
import SearchBar from "../SearchBar/SearchBar.tsx";
import ActionButton from "../Buttons/ActionButton/ActionButton.tsx";

function Header() {
    const getApp = () => {
        window.open(
            'https://joka-app.com/',
            '_blank'
        );
    };

    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-info">
                    <div className="header-logos">
                        <img src={LogoType} alt="JOKA"/>
                        <img src={LogoAPI} alt="API"/>
                    </div>
                    <ActionButton onClick={getApp} text="Télécharger Joka"/>
                </div>
                <div className="header-search-zone">
                    <h1 className="header-title">Parcours de golfs en France</h1>
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
}

export default Header;