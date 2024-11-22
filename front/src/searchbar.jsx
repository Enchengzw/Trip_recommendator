import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Please where would you like to go"
        className="search-bar-input"
      />
      <img
      src="src/assets/search.svg"
      alt=""
      onClick={handleSearch}
      className="search-bar-image"
      />
    </div>
  );
};

export default SearchBar;