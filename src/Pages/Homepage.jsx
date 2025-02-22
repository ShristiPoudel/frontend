import React, { useEffect,useState } from 'react';
import Hero from '../Components/Hero/Hero';
import api from '../api/config';


const Homepage = () => {

  const [eventList,setEventList] = useState([]);
  useEffect(() => {
    async function fetchEvents() {
    
        const token = localStorage.getItem('authToken'); 
        
        
        const response = await api.get('/events/public-events/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        console.log("Events:", response.data);
        setEventList(response.data);
       
    }
    
    fetchEvents();
  }, []);

  return (
    <div>
      <div>
        <Hero />
      </div>
      {eventList.map((events,index) =>{
        return <div key={index}>
         <img src={events.image} alt={`image ${index}`} />
        {events.title}
        {events.event_dates}
        {events.category.map((cat,catIndex)=>{
           return <div key={catIndex}>
            {cat.name} 
            </div>
      })}
        {events.interest_count}
        {events.time_start}

        </div>
      })}
    </div>
  );
};

export default Homepage;
