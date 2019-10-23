import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  console.log('SearchBox');
  return (
    <div className='tc'>
      <input className='pa3 ma2 ba b--green bg-lightest-blue'
             type='search'
             placeholder='Search Robots'
             onChange={ searchChange }
             aria-label="search robot names"
      />
    </div>
  );
}

export default SearchBox;
