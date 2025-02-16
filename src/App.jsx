import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import Homepage from './Pages/Homepage'
import CreateEvent from './Pages/CreateEvent'
import BookEvent from './Pages/BookEvent'
import ContactUs from './Pages/ContactUs'
import Feedback from './Pages/FeedBack'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'
import SignUp from './Pages/SignUp'
import Token from './Pages/Token'
import Dashboard from './Pages/Dashboard'
import ManageEvent from './Pages/ManageEvent'
import Profile from './Pages/Profile'
import Logout from './Pages/Logout'

const App = () => {
  return (
    
    <div>
     <AuthProvider>
      <Router>
        <NavBar/>
        {/* <Dashboard/> */}
         <Routes>
         
          <Route path='/' element={<Homepage/>} />
          <Route path='create-event' element={<CreateEvent/>}/>
          <Route path='book-event' element={<BookEvent/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='feedback' element={<Feedback/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='sign-up' element={<SignUp/>}/>
          <Route path='auth-token' element={<Token/>}/>
          
           <Route path='dashboard'>
          <Route path='' element={<Dashboard/>}/>
          <Route path='organizer' element={<Homepage/>}/> 
          <Route path='create-events' element={<CreateEvent/>}/>
          <Route path='manage-events' element={<ManageEvent/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='log-out' element={<Logout/>}/>
          
          </Route> 
          <Route path='*' element={<PageNotFound/>}/>

        </Routes>
      </Router>
      </AuthProvider>

    </div>
  )
}

export default App