import React, {useState} from 'react';

import SearchIcon from "../../assets/svg/icons/search-icon.svg";

import './SearchBar.css';

interface SearchBarProps {
    onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <img src={SearchIcon} alt="Search Icon" className="search-icon"/>
            <input
                type="text"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Rechercher par nom ou ville du parcours / golf..."
            />
        </div>
    );
};

export default SearchBar;