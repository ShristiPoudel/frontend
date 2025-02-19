import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/config";
import { useAuth } from '../context/AuthContext'
import "./CSS/Profile.css"
import { Link } from 'react-router-dom'


export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log(token);
    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    api.get("/user/profile/", 
      { headers: { Authorization: `Token ${token}`} })
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        navigate("/login"); // Redirect if API request fails
      });
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Failed to load profile.</p>;
  }

  return (
    <div className="profile-container">
      <img
        src={user.avatar || "default-avatar.png"}
        alt="User Avatar"
        className="profile-avatar"
      />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p>
      <p className="profile-bio">{user.bio || "No bio available"}</p>
      {user.role === "organizer" && (
        <>
        <Link to="/organizer-dashboard/create-events" className="event-btn">Create Event</Link>  
        <Link to="/organizer-dashboard/manage-events" className="event-btn">Manage Event</Link>  

        </>
      )}
    </div>
  );
}


