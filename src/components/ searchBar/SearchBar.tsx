import React, {useState} from 'react';
import './SearchBar.css';
import SearchIcon from "../../assets/svg/icons/search-icon.svg";

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    console.log('Searching for:', searchQuery);

    return (
        <div className="search-bar">
            <img src={SearchIcon} alt="Search Icon" className="search-icon"/>
            <input
                type="text"
                name="search-bar"
                id="search-bar"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Rechercher par nom ou ville du parcours / golf..."
            />
        </div>
    );
};

export default SearchBar;