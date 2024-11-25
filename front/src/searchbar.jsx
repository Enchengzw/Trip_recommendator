import React, { useContext, useState } from 'react';
import './searchbar.css';
import { MyContext } from './context.jsx';

const SearchBar = ({ onSearch }) => {
  const { setQuery } = useContext(MyContext);
  const [localQuery, setLocalQuery] = useState('');

  const handleInputChange = (e) => {
    setLocalQuery(e.target.value);
  };

const handleSearch = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/search?query=${encodeURIComponent(localQuery)}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setQuery(data);
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
};
  

  return (
    <div className="search-bar-container">
      <input
        type="text"
        name='search'
        value={localQuery}
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