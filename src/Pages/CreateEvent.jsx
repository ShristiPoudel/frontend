import React from 'react';
import "./CSS/CreateEvent.css";

const CreateEvent = () => {
  return (
    <div className="create-event">
      <h1>Create an Event</h1>
      <form className="post-event-fields">
        
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input id="name" type="text" name="name" placeholder="Enter event name" required />
        </div>

        <div className="form-group">
          <label htmlFor="category">Event Category:</label>
          <input id="category" type="text" name="category" placeholder="E.g., Music, Tech, Sports" required />
        </div>

        <div className="form-group">
          <label htmlFor="organized">Event Organized By:</label>
          <input id="organized" type="text" name="organized" placeholder="Organizer's name" required />
        </div>

        <div className="form-group">
          <label htmlFor="session">Session (Optional):</label>
          <select id="session" name="session">
            <option value="">-- Select Session --</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Event Date:</label>
          <input id="date" type="date" name="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="time">Event Time:</label>
          <input id="time" type="time" name="time" required />
        </div>

        <div className="form-group">
          <label htmlFor="location">Venue:</label>
          <input id="location" type="text" name="location" placeholder="Enter event venue" required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Ticket Price ($):</label>
          <input id="price" type="number" name="ticketprice" min="0" step="0.01" placeholder="Enter ticket price" required />
        </div>

        <div className="form-group">
          <label htmlFor="image">Event Image:</label>
          <input type="file" id="image" name="image" accept="image/*" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Event Description:</label>
          <textarea id="description" name="description" rows="5" placeholder="Provide event details..." required />
        </div>

        <div className="post">
          <button type="submit">Create Event</button>
        </div>

      </form>
    </div>
  );
};

export default CreateEvent;
