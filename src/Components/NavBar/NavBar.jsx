import React from 'react'
import "./NavBar.css"
import logo from '../../assets/react.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="navlogo">
          <img src={logo} alt="" />  
          <p> <Link to="/">EVENTHUB</Link></p>
        </div>
        <ul className="nav-menu">
          <li> <Link to="/create-event">Create Event</Link></li>
          <li><Link to="/book-event">Book Event </Link></li>
          <li><Link to="/contactus" >Contact Us </Link></li>
          <li><Link to ="/feedback">Feedback</Link></li>
        </ul>
        <div className='login-signup'>
          <button> <Link to="/login">Login</Link></button>
        </div>

    </div>
  )
}

export default NavBar