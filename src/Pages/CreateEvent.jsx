import React, { useState } from "react";
import "./CSS/CreateEvent.css";
import api from "../api/config";

const CreateEvent = () => {
  const [createData, setCreateData] = useState({
    title: "",
    category: "",
    // session: "",
    time_start: "",
    event_dates: "",
    venue_name: "",
    venue_location: "",
    venue_capacity: "",
    vip_price: "",
    common_price: "",
    description: "",
  });

  const [imageData, setImageData] = useState(null);
  const [error,setError]=useState(null);

  
  const handleChange = (e) => {
    setCreateData({ ...createData, [e.target.name]: e.target.value });
  };

  
  const addEvent = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      // Validate required fields
      if (!createData.event_dates || !createData.time_start || !imageData) {
        throw new Error("All fields are required");
      }
  
      // Date handling
      const eventDate = new Date(createData.event_dates);
      if (isNaN(eventDate)) throw new Error("Invalid event date");
      const formattedDateString = eventDate.toISOString().split('T')[0];
  
      // Time handling
      const timeValue = createData.time_start;
      const formattedTime = timeValue.includes(':') 
        ? `${timeValue}:00` 
        : `${timeValue}:00:00`;
  
      // Category handling
      const categories = createData.category
        .split(',')
        .map(cat => cat.trim())
        .filter(cat => cat !== '');
  
      // Build FormData
      const formData = new FormData();
      formData.append('title', createData.title);
      formData.append('event_dates', formattedDateString);
      formData.append('time_start', formattedTime);
      formData.append('venue_name', createData.venue_name);
      formData.append('venue_location', createData.venue_location);
      formData.append('venue_capacity', createData.venue_capacity);
      formData.append('vip_price', createData.vip_price);
      formData.append('common_price', createData.common_price);
      formData.append('description', createData.description);
      formData.append('category', JSON.stringify(categories));
      formData.append('image', imageData);
  
      // API call
      const token = localStorage.getItem("authToken");
      const response = await api.post("/events/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Token ${token}`,
        },
      });
      
      console.log("Event created:", response.data);
      
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Failed to create event");
    }
  };

  return (
    <div className="create-container">
      <div className="create-event">
        <h1>Create an Event</h1>
        {error && <div className="error-message">{error}</div>}
        <form className="post-event-fields" onSubmit={addEvent}>
          
          <div className="form-group">
            <label htmlFor="name">Event Name:</label>
            <input
              id="name"
              type="text"
              name="title"
              placeholder="Enter event name"
              onChange={handleChange}
              required
            />
          </div>

        
          <div className="form-group">
            <label htmlFor="category">Event Category:</label>
            <input
              id="category"
              type="text"
              name="category"
              placeholder="E.g., Music, Tech, Sports"
              onChange={handleChange}
              required
            />
          </div>

          
          {/* <div className="form-group">
            <label htmlFor="session">Session (Optional):</label>
            <select id="session" name="session" onChange={handleChange}>
              <option value="">-- Select Session --</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
            </select>
          </div> */}

          
          <div className="form-group">
            <label htmlFor="date">Event Date:</label>
            <input id="date"
             type="date" 
             name="event_dates"
              onChange={handleChange}
               required />
          </div>

          <div className="form-group">
            <label htmlFor="time">Event Time:</label>
            <input id="time"
             type="time"
              name="time_start"
               onChange={handleChange}
                required />
          </div>

          
          <div className="form-group">
            <label htmlFor="venue">Venue Name:</label>
            <input
              id="venue"
              type="text"
              name="venue_name"
              placeholder="Enter event venue"
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="location">Venue Location:</label>
            <input
              id="location"
              type="text"
              name="venue_location"
              placeholder="Enter event location"
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="capacity">Venue Capacity:</label>
            <input
              id="capacity"
              type="number"
              name="venue_capacity"
              min="1"
              placeholder="Enter venue capacity"
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="vip-price">VIP Ticket Price (Rs):</label>
            <input
              id="vip-price"
              type="number"
              name="vip_price"
              min="0"
              step="0.01"
              placeholder="Enter ticket price"
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="general-price">General Ticket Price (Rs):</label>
            <input
              id="general-price"
              type="number"
              name="common_price"
              min="0"
              step="0.01"
              placeholder="Enter ticket price"
              onChange={handleChange}
              required
            />
          </div>

         
          <div className="form-group">
            <label htmlFor="image">Event Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => setImageData(e.target.files[0])}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Event Description:</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              placeholder="Provide event details..."
              onChange={handleChange}
              required
            />
          </div>

          <div className="post">
            <button type="submit" value="submit">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default CreateEvent;
