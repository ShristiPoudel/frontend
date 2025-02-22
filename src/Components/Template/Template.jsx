import React,{useEffect,useState} from 'react'
import api from '../../api/config';
import './Template.css'
import { GoHeart } from "react-icons/go"; 
const Template = () => {

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

    const handleFavorite = (eventId) => {
      console.log('Added to favorites:', eventId);
    };
  
    const handleBuyTicket = (eventId) => {
      console.log('Buy ticket for:', eventId);
    };
  

    return (
       <div className="template-container">
     <h2>Events</h2>
          <hr />
        <div className='template-design'>
          
          {eventList.map((events,index) =>{
            return <div key={index}>
              <div className="favorite-btn-container">
              <button className="favorite-btn" onClick={() => handleFavorite(events.id)}>
                <GoHeart/> 
              </button>
            </div>
             <img src={events.image} alt={`image ${index}`} />
             <p>{events.title}</p>
             <div className='event-category'>{events.category.map((cat,catIndex)=>{
               return <div key={catIndex} className='categories-container'>
                Category:{cat.name} 
                </div>
            
          })}
          </div>
          <div className="time-date">
          <div className="event-date">Date:{events.event_dates}</div>
          <div className="event-time">Time:{events.time_start}</div>
          </div>
            <div className="interest-count">Interested:{events.interest_count}</div>
            
            <div className="buy-ticket-btn-container">
              <button className="buy-ticket-btn" onClick={() => handleBuyTicket(events.id)}>
                Buy Ticket
              </button>
            </div>

    
            </div>
          })}
        </div>
        </div>
      )
}

export default Template