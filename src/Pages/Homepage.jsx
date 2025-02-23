import React, { useEffect,useState } from 'react';
import Hero from '../Components/Hero/Hero';
import api from '../api/config';
import Template from '../Components/Template/Template';
import { useSearch } from "../context/SearchContext";



const Homepage = () => {
  const { searchResults } = useSearch();
  return (
    <div>
     
      {searchResults.length > 0 ? (
        <div className="search-results">
          <Template eventList={searchResults} />
        </div>
      ) : (
       <div>
        <Hero />
        <Template /> </div>
      )}
    </div>
  )
};

export default Homepage;
