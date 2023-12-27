import React, { useState } from 'react';
import '../App.css';
const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilter = () => {
    onFilter({ title: titleFilter, rating: ratingFilter });
  };


  return (
    <div className="filter">
        <div className='searchBox'>
        
    
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        className='SearchInput'
        onChange={(e) => setTitleFilter(e.target.value)}
        onInput={handleFilter}
      />
 
      </div>
      <div className='search-box'>
      <input
        type="number"
        placeholder="Filter by Rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
        onInput={handleFilter}
        
      />
      </div>
      
    </div>
  );
};

export default Filter;