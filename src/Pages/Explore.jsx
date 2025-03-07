import React from 'react'
import { GoHeart } from 'react-icons/go';
import { useLocation } from 'react-router-dom'


const Explore = () => {
    const events = useLocation().state.events;
    console.log(events);


    const handleFavorite = (eventId) => {
      console.log('Added to favorites:', eventId);
    };
  
    const handleBuyTicket = (eventId) => {
      console.log('Buy ticket for:', eventId);
    };
  return (
    <div>
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
  )
}

export default Explore