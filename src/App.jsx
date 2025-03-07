import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoutes'; // Make sure this path is correct
import Homepage from './Pages/Homepage';
import CreateEvent from './Pages/CreateEvent';
import BookEvent from './Pages/BookEvent';
import ContactUs from './Pages/ContactUs';
import Feedback from './Pages/FeedBack';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import SignUp from './Pages/SignUp';
import Token from './Pages/Token';
import Dashboard from './Pages/Dashboard';
import ManageEvent from './Pages/ManageEvent';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import Events from './Pages/Events';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Explore from './Pages/Explore';

const App = () => {
  const {user, isLoggedIn, loginUser, logoutUser, loading } = useAuth();
  //  console.log("Auth State:", { isLoggedIn, loading });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <Routes>
        {/* Public routes accessible to everyone */}
        <Route path="/" element={<Homepage />} />
        <Route path = "explore" element={<Explore/>} />
        <Route path="events" element={<Events />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="feedback" element={<Feedback />} />

        {/* Routes that should redirect if logged in */}
        <Route
  path="/"
  element={isLoggedIn && !localStorage.getItem('hasVisitedAuthToken') ? <Navigate to="/auth-token" /> : <Homepage />} 
/> 
       <Route
         path="login"
         element={isLoggedIn ? <Navigate to="/auth-token" /> : <Login />} />
         <Route
           path="sign-up"
           element={isLoggedIn ? <Navigate to="/" /> : <SignUp />}  />
      <Route
        path="auth-token"
       element={isLoggedIn ? <Token /> : <Navigate to="/login" />} />


        {/* Organizer-only routes */}
        <Route element={<ProtectedRoute allowedRoles={['organizer']} />}>
          <Route path="organizer-dashboard">
            <Route index element={<Navigate to="/" />} />
            <Route path="create-events" element={<CreateEvent />} />
            <Route path="manage-events" element={<ManageEvent />} />
          </Route>
        </Route>

        {/* Attendee-only routes */}
         <Route element={<ProtectedRoute allowedRoles={['attendee']} />}>
          <Route path="attendee-dashboard">
          <Route  index element={<Navigate to="/" />} />
          <Route path='book-event' element={<BookEvent/>}/>
          </Route>
        </Route> 

        {/* Common authenticated routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="log-out" element={<Logout />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
