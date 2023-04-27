import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Restaurants from '../Restaurants/Restaurants';
import SearchInput from '../SearchInput/SearchInput';
import SearchList from '../SearchList/SearchList';

const HomePage = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return(
    <section className='restaurants'>
      <Banner />
      <SearchInput value={searchQuery} onChange={handleChange}/>
      {searchQuery 
        ? <SearchList value={searchQuery}/>
        : <Restaurants />
      }
    </section>
  )
}

export default HomePage;