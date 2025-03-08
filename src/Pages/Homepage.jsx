import React, { useEffect,useState } from 'react';
import Hero from '../Components/Hero/Hero';
import api from '../api/config';
import Template from '../Components/Template/Template';
import { useSearch } from "../context/SearchContext";
import Footer from '../Components/Footer/Footer';



const Homepage = () => {
  const { searchResults } = useSearch();
  const [events, setEvents] = useState([]);
  return (
    <div>
     
      {searchResults.length > 0 ? (
        <div className="search-results">
          <Template eventList={searchResults} />
        </div>
      ) : (
       <div>
        <Hero />
        <Template  eventList={events} /> 
        {/* <Footer/> */}
        </div>
      )}
    </div>
  )
};

export default Homepage;
