import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./CSS/Dashboard.css"
import { FaGauge} from "react-icons/fa6"
import {  MdOutlineEventAvailable } from "react-icons/md"
import { MdOutlineManageHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import NavBar from '../Components/NavBar/NavBar'


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
     
        <div className='dashboard'>
          <div className='dashboard-items'>
            <p> <Link to='/dashboard/organizer'>EventHub</Link> </p>
            <ul className='dashboard-list-items'>
              <li>
               <FaGauge/>
                <Link to='/organizer-dashboard/'>Dashboard</Link>
              </li>
              <li>
               <MdOutlineEventAvailable/> 
               <Link to= '/organizer-dashboard/create-events'>Create Event</Link>
              </li>
              <li>
                <MdOutlineManageHistory/>
                <Link to='/organizer-dashboard/manage-events'>Manage Events</Link>
              </li>
              <li>
                <CgProfile/>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
               <IoMdLogOut/> 
               <Link to='log-out'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet/>
        </div>
 )
}

export default Dashboard
