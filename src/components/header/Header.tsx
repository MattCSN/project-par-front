import LogoJokaAPI from "../../assets/svg/logos/logo-Joka-API.svg";
import ActionButton from "../buttons/actionButton/ActionButton";
import SearchBar from "../searchBar/SearchBar";

import "./Header.css";

const getApp = () => {
  window.open("https://joka-app.com/", "_blank");
};

type HeaderProps = {
  onSearch?: (query: string) => void;
};

export const Header = ({ onSearch = () => {} }: HeaderProps) => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-info">
          <a href="/">
            <div className="header-logos">
              <img src={LogoJokaAPI} alt="JOKA API" />
            </div>
          </a>
          <ActionButton onClick={getApp} text="Télécharger Joka" />
        </div>
        <div className="header-search-zone">
          <h1 className="header-title">Parcours de golfs en France</h1>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};
