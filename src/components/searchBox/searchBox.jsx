import React from 'react';
import './searchBox.css';

const SearchBox = ({onInputChange}) => {
  return (
    <div className="search-container">
      <input
        onChange={(event) => onInputChange(event.target.value)}
        placeholder="Enter Keywords"
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;
