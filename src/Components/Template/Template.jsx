import React,{useEffect,useState} from 'react'
import api from '../../api/config';
import './Template.css'

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
  

    return (
       <div className="template-container">
     <h2>Events</h2>
          <hr />
        <div className='template-design'>
          
          {eventList.map((events,index) =>{
            return <div key={index}>
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
            
    
            </div>
          })}
        </div>
        </div>
      )
}

export default Template