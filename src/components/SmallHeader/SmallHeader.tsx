import ActionButton from "../Buttons/ActionButton/ActionButton.tsx";

import LogoJokaAPI from "../../assets/svg/logos/logo-Joka-API-green.svg";

import "./SmallHeader.css";

const getApp = () => {
    window.open(
        'https://joka-app.com/',
        '_blank'
    );
};


export const SmallHeader = () => {
    return (
        <div className="small-header-container">
            <div className="small-header-content">
                <div className="small-header-info">
                    <a href="/">
                        <div className="header-logos">
                            <img src={LogoJokaAPI} alt="JOKA API"/>
                        </div>
                    </a>
                    <ActionButton onClick={getApp} text="Télécharger Joka"/>
                </div>
            </div>
        </div>
    );
}