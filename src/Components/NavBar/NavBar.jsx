import React, { useState , useEffect } from 'react'
import "./NavBar.css"
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import { useSearch } from "../../context/SearchContext";
import api from "../../api/config"

const NavBar = () => {
  const {user, isLoggedIn, loginUser, logoutUser, loading } = useAuth();
 const userRole = user?.role;
//  const [searchText,setSearchText] = useState("");

const { searchText, setSearchText, searchEvents } = useSearch();

//   useEffect ( () => {
//   async function searchEvents(){
//     const response = await api.get (`/events/public-events/?search=${searchText}`);

//     if(response.data){
//       console.log(response.data);
//     }

//   }

//   searchEvents();

// },
// [searchText]);

useEffect(() => {
  const delayDebounceFn = setTimeout(() => {
    searchEvents(searchText);
  }, 500); // Debounce API calls

  return () => clearTimeout(delayDebounceFn);
}, [searchText, searchEvents]);


  return (
    <div className='navbar'>
        <div className="navlogo">
          <img src={logo} alt="" />  
          <p> <Link to="/">EVENTHUB</Link></p>
        </div>
        <ul className="nav-menu">
           <li> <Link to="/events">Events</Link></li>
           {isLoggedIn && userRole === 'attendee' && (
          <>
            <li> <Link to="/attendee-dashboard/book-event">Book Event</Link></li>
          </>
        )}

           {isLoggedIn && userRole === 'organizer' && (
          <>
            <li> <Link to="/organizer-dashboard/create-events">Create Event</Link></li>
            <li> <Link to="/organizer-dashboard/manage-events">Manage Events</Link></li>
          </>
        )}

          {/* <li><Link to="/book-event">Book Event </Link></li> */}
          <li><Link to="/contactus" >Contact Us </Link></li>
          {(!isLoggedIn || userRole === 'attendee') && (
          <li> <Link to="/feedback">Feedback</Link></li>
        )}


          </ul>
         <div className="search-bar">
            <input type="text"
              placeholder="Search events..."
              value={searchText}

              onChange={(e)=>setSearchText(e.target.value)}
               />
            <FaSearch className='search-icon'/>
               </div>
        <div className='login-signup'>
        {!isLoggedIn ? (
          <>
            <button className='log-in-btn'><Link to="/login">Login</Link></button>
            {/* <button><Link to="/sign-up">Sign Up</Link></button> */}
          </>
        ) : (
          <>
            <button className='log-out-btn'><Link to="/log-out">Logout</Link></button>
            <Link to="/profile"><CgProfile className='profile-icon'/></Link> 
          </>
        )}

          
         </div>

    </div>
  )
}

export default NavBar