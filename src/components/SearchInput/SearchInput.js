import React from 'react';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className='restaurants__heading'>
      <h2 className='restaurants__title'>Рестораны</h2>
      <label className='restaurants__search'>
        <input 
          type="text"
          className="input input-search"
          value={value}
          onChange={onChange}
          placeholder="Поиск блюд"
        />
      </label>
    </div>
  )
};

export default SearchInput;