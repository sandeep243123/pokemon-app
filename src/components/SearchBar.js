import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;