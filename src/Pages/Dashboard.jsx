import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./CSS/Dashboard.css"
import { FaGauge} from "react-icons/fa6"
import {  MdOutlineEventAvailable } from "react-icons/md"
import { MdOutlineManageHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
     
        <div className='dashboard'>
          <div className='dashboard-items'>
            <p> <Link to='/dashboard/organizer'>EventHub</Link> </p>
            <ul className='dashboard-list-items'>
              <li>
               <FaGauge/>
                <Link to='/dashboard/'>Dashboard</Link>
              </li>
              <li>
               <MdOutlineEventAvailable/> 
               <Link to= '/dashboard/create-events'>Create Event</Link>
              </li>
              <li>
                <MdOutlineManageHistory/>
                <Link to='/dashboard/manage-events'>Manage Events</Link>
              </li>
              <li>
                <CgProfile/>
                <Link to='/dashboard/profile'>Profile</Link>
              </li>
              <li>
               <IoMdLogOut/> 
               <Link to='/dashboard/log-out'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet/>
        </div>
 )
}

export default Dashboard