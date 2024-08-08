import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    console.log('Searching for:', searchQuery);

    return (
        <div className="search-bar">
            <input
                type="text"
                name="search-bar" id="search-bar"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Rechercher par nom ou ville du parcours / golf..."
            />
        </div>
    );
};

export default SearchBar;