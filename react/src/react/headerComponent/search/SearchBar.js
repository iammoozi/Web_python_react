import React, { useState } from 'react';
import './SearchBar.css'; 
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { HiMagnifyingGlass } from "react-icons/hi2";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('검색어:', searchTerm);
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        placeholder="검색어를 입력해주세요"
      
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <button type="submit" className="search-button" >
        <HiMagnifyingGlass style={{fontSize:'25px'}}/>
        <i className="fas fa-search"></i>
    </button>
    </form>
  );
}

export default SearchBar;