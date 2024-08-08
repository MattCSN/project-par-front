import "./Header.css"

import LogoType from "../../assets/svg/logos/logo-type.svg";
import LogoAPI from "../../assets/svg/logos/logo-api.svg";
import SearchBar from "../ searchBar/SearchBar.tsx";

function Header() {
    const getApp = () => {
        window.open(
            'https://joka-app.com/',
            '_blank' // <- This is what makes it open in a new window.
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
                    <button onClick={getApp}>Télécharger Joka</button>
                </div>
                <h1 className="header-title">Parcours de golfs en France</h1>
                <SearchBar/>
            </div>
        </div>
    );
}

export default Header;